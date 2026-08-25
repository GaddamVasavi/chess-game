import { Chess, Move, PieceSymbol, Square } from 'chess.js';

export interface MoveValidationResult {
  isValid: boolean;
  san?: string;
  lan?: string;
  fenAfter?: string;
  isCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  isDraw: boolean;
  isThreefoldRepetition: boolean;
  isInsufficientMaterial: boolean;
  isFiftyMoveDraw: boolean;
  isGameOver: boolean;
  captured?: PieceSymbol;
  promotion?: PieceSymbol;
  errorMessage?: string;
}

export class ServerChessEngine {
  private instance: Chess;

  constructor(fen?: string) {
    this.instance = new Chess(fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  }

  public getFen(): string {
    return this.instance.fen();
  }

  public getTurn(): 'w' | 'b' {
    return this.instance.turn();
  }

  public getLegalMoves(square?: Square): Move[] {
    return this.instance.moves({ square, verbose: true });
  }

  public validateAndExecuteMove(
    from: string,
    to: string,
    promotion?: string,
  ): MoveValidationResult {
    try {
      // Validate that promotion symbol is valid if pawn reaches 8th/1st rank
      const promotionSymbol = (promotion?.toLowerCase() || 'q') as PieceSymbol;

      const move = this.instance.move({
        from: from as Square,
        to: to as Square,
        promotion: promotionSymbol,
      });

      if (!move) {
        return {
          isValid: false,
          isCheck: false,
          isCheckmate: false,
          isStalemate: false,
          isDraw: false,
          isThreefoldRepetition: false,
          isInsufficientMaterial: false,
          isFiftyMoveDraw: false,
          isGameOver: false,
          errorMessage: `Illegal chess move: ${from} to ${to}`,
        };
      }

      return {
        isValid: true,
        san: move.san,
        lan: move.from + move.to + (move.promotion || ''),
        fenAfter: this.instance.fen(),
        isCheck: this.instance.inCheck(),
        isCheckmate: this.instance.isCheckmate(),
        isStalemate: this.instance.isStalemate(),
        isDraw: this.instance.isDraw(),
        isThreefoldRepetition: this.instance.isThreefoldRepetition(),
        isInsufficientMaterial: this.instance.isInsufficientMaterial(),
        isFiftyMoveDraw: this.instance.isDraw() && !this.instance.isCheckmate() && !this.instance.isStalemate() && !this.instance.isInsufficientMaterial(),
        isGameOver: this.instance.isGameOver(),
        captured: move.captured,
        promotion: move.promotion,
      };
    } catch (err: any) {
      return {
        isValid: false,
        isCheck: false,
        isCheckmate: false,
        isStalemate: false,
        isDraw: false,
        isThreefoldRepetition: false,
        isInsufficientMaterial: false,
        isFiftyMoveDraw: false,
        isGameOver: false,
        errorMessage: err.message || 'Invalid move execution',
      };
    }
  }

  public getPgn(): string {
    return this.instance.pgn();
  }

  public loadPgn(pgn: string): boolean {
    try {
      this.instance.loadPgn(pgn);
      return true;
    } catch {
      return false;
    }
  }

  public isGameOver(): boolean {
    return this.instance.isGameOver();
  }
}
