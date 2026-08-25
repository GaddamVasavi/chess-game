import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ChessService } from '../chess/chess.service';

interface ActiveRoom {
  gameId: string;
  whiteSocketId?: string;
  blackSocketId?: string;
  spectatorSocketIds: Set<string>;
  turn: 'w' | 'b';
  whiteTimeRemainingMs: number;
  blackTimeRemainingMs: number;
  lastMoveTimestamp: number;
  drawOfferedBy?: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/chess',
})
export class ChessGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger('ChessGateway');
  private activeRooms: Map<string, ActiveRoom> = new Map();
  private socketToPlayerMap: Map<string, { playerId: string; username: string }> = new Map();

  constructor(private readonly chessService: ChessService) {}

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    const playerData = this.socketToPlayerMap.get(client.id);
    if (playerData) {
      // Notify game rooms about disconnection & start 60s forfeit countdown timer
      this.server.emit('player:presence_change', {
        playerId: playerData.playerId,
        status: 'OFFLINE',
      });
      this.socketToPlayerMap.delete(client.id);
    }
  }

  @SubscribeMessage('game:join_room')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { gameId: string; playerId: string; username: string; color?: 'WHITE' | 'BLACK' },
  ) {
    const { gameId, playerId, username, color } = payload;
    client.join(gameId);

    this.socketToPlayerMap.set(client.id, { playerId, username });

    let room = this.activeRooms.get(gameId);
    if (!room) {
      room = {
        gameId,
        spectatorSocketIds: new Set(),
        turn: 'w',
        whiteTimeRemainingMs: 300000,
        blackTimeRemainingMs: 300000,
        lastMoveTimestamp: Date.now(),
      };
      this.activeRooms.set(gameId, room);
    }

    if (color === 'WHITE') {
      room.whiteSocketId = client.id;
    } else if (color === 'BLACK') {
      room.blackSocketId = client.id;
    } else {
      room.spectatorSocketIds.add(client.id);
    }

    const engine = this.chessService.getOrCreateEngine(gameId);

    client.emit('game:state_sync', {
      gameId,
      fen: engine.getFen(),
      turn: engine.getTurn(),
      whiteTimeRemainingMs: room.whiteTimeRemainingMs,
      blackTimeRemainingMs: room.blackTimeRemainingMs,
      spectatorCount: room.spectatorSocketIds.size,
    });

    this.server.to(gameId).emit('chat:system_notice', {
      message: `${username} joined the game room.`,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('game:make_move')
  handleMakeMove(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { gameId: string; from: string; to: string; promotion?: string },
  ) {
    const { gameId, from, to, promotion } = payload;
    const room = this.activeRooms.get(gameId);

    if (!room) {
      return client.emit('game:error', { message: 'Game room not active' });
    }

    try {
      const result = this.chessService.validateMove(gameId, from, to, promotion);

      const now = Date.now();
      const elapsed = now - room.lastMoveTimestamp;

      if (room.turn === 'w') {
        room.whiteTimeRemainingMs = Math.max(0, room.whiteTimeRemainingMs - elapsed);
        room.turn = 'b';
      } else {
        room.blackTimeRemainingMs = Math.max(0, room.blackTimeRemainingMs - elapsed);
        room.turn = 'w';
      }
      room.lastMoveTimestamp = now;

      // Broadcast move to all room participants and spectators
      this.server.to(gameId).emit('game:move_executed', {
        gameId,
        from,
        to,
        promotion,
        san: result.san,
        lan: result.lan,
        fenAfter: result.fenAfter,
        turn: room.turn,
        whiteTimeRemainingMs: room.whiteTimeRemainingMs,
        blackTimeRemainingMs: room.blackTimeRemainingMs,
        isCheck: result.isCheck,
        isCheckmate: result.isCheckmate,
        isStalemate: result.isStalemate,
        isDraw: result.isDraw,
      });

      if (result.isGameOver) {
        let winnerColor: string | null = null;
        let resultReason = 'DRAW';

        if (result.isCheckmate) {
          winnerColor = room.turn === 'w' ? 'BLACK' : 'WHITE';
          resultReason = 'CHECKMATE';
        } else if (result.isStalemate) {
          resultReason = 'STALEMATE';
        } else if (result.isThreefoldRepetition) {
          resultReason = 'THREEFOLD_REPETITION';
        } else if (result.isInsufficientMaterial) {
          resultReason = 'INSUFFICIENT_MATERIAL';
        }

        this.server.to(gameId).emit('game:over', {
          gameId,
          winnerColor,
          reason: resultReason,
          finalFen: result.fenAfter,
        });

        this.chessService.removeEngine(gameId);
        this.activeRooms.delete(gameId);
      }
    } catch (err: any) {
      client.emit('game:move_rejected', {
        gameId,
        reason: err.message || 'Illegal chess move rejected by server engine',
      });
    }
  }

  @SubscribeMessage('game:offer_draw')
  handleOfferDraw(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { gameId: string; playerId: string },
  ) {
    this.server.to(payload.gameId).emit('game:draw_offered', {
      offeredByPlayerId: payload.playerId,
    });
  }

  @SubscribeMessage('game:resign')
  handleResign(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { gameId: string; playerId: string },
  ) {
    this.server.to(payload.gameId).emit('game:over', {
      gameId: payload.gameId,
      reason: 'RESIGNATION',
      resignedPlayerId: payload.playerId,
    });
    this.chessService.removeEngine(payload.gameId);
    this.activeRooms.delete(payload.gameId);
  }
}
