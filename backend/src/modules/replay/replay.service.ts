import { Injectable, NotFoundException } from '@nestjs/common';
import { Chess } from 'chess.js';

@Injectable()
export class ReplayService {
  async generateReplayFromPgn(pgn: string) {
    try {
      const chess = new Chess();
      chess.loadPgn(pgn);
      const history = chess.history({ verbose: true });

      const replayChess = new Chess();
      const timeline = [
        {
          moveIndex: 0,
          san: 'START',
          fen: replayChess.fen(),
        },
      ];

      history.forEach((move, idx) => {
        replayChess.move(move);
        timeline.push({
          moveIndex: idx + 1,
          san: move.san,
          fen: replayChess.fen(),
        });
      });

      return {
        totalMoves: history.length,
        initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        finalFen: chess.fen(),
        pgn,
        timeline,
      };
    } catch (err: any) {
      throw new NotFoundException(`Invalid PGN string format: ${err.message}`);
    }
  }
}
