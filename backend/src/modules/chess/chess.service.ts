import { Injectable, BadRequestException } from '@nestjs/common';
import { ServerChessEngine, MoveValidationResult } from './chess.engine';

@Injectable()
export class ChessService {
  private activeEngines: Map<string, ServerChessEngine> = new Map();

  public getOrCreateEngine(gameId: string, initialFen?: string): ServerChessEngine {
    if (!this.activeEngines.has(gameId)) {
      this.activeEngines.set(gameId, new ServerChessEngine(initialFen));
    }
    return this.activeEngines.get(gameId)!;
  }

  public validateMove(
    gameId: string,
    from: string,
    to: string,
    promotion?: string,
  ): MoveValidationResult {
    const engine = this.getOrCreateEngine(gameId);
    const result = engine.validateAndExecuteMove(from, to, promotion);
    if (!result.isValid) {
      throw new BadRequestException(result.errorMessage || 'Invalid move');
    }
    return result;
  }

  public getLegalMoves(gameId: string, square?: string) {
    const engine = this.getOrCreateEngine(gameId);
    return engine.getLegalMoves(square as any);
  }

  public removeEngine(gameId: string): void {
    this.activeEngines.delete(gameId);
  }
}
