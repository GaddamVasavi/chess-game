import { Injectable, NotFoundException } from '@nestjs/common';
import { GameCategory, GameStatus } from '../../database/entities/Game.entity';

@Injectable()
export class GamesService {
  private games: Map<string, any> = new Map();

  async createGame(payload: {
    mode: GameCategory;
    isRated?: boolean;
    isPrivate?: boolean;
    timeControlBase?: number;
    timeControlIncrement?: number;
    whitePlayerId?: string;
    blackPlayerId?: string;
  }) {
    const gameId = `gm_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const game = {
      id: gameId,
      mode: payload.mode || GameCategory.BLITZ,
      status: GameStatus.PENDING,
      timeControlBase: payload.timeControlBase || 300,
      timeControlIncrement: payload.timeControlIncrement || 0,
      initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      finalFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      isRated: payload.isRated ?? true,
      isPrivate: payload.isPrivate ?? false,
      customRoomCode: payload.isPrivate ? Math.random().toString(36).substr(2, 6).toUpperCase() : null,
      whitePlayerId: payload.whitePlayerId,
      blackPlayerId: payload.blackPlayerId,
      createdAt: new Date(),
    };

    this.games.set(gameId, game);
    return game;
  }

  async getGameById(id: string) {
    const game = this.games.get(id);
    if (!game) {
      throw new NotFoundException(`Game session ${id} not found`);
    }
    return game;
  }
}
