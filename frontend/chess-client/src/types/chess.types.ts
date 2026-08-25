export type GameMode = 'BULLET' | 'BLITZ' | 'RAPID' | 'CLASSICAL' | 'CUSTOM';

export type GameStatus = 'PENDING' | 'WAITING' | 'IN_PROGRESS' | 'COMPLETED' | 'ABORTED';

export type GameResultType = 
  | 'CHECKMATE'
  | 'STALEMATE'
  | 'TIMEOUT'
  | 'RESIGNATION'
  | 'DRAW_AGREEMENT'
  | 'THREEFOLD_REPETITION'
  | 'FIFTY_MOVE_RULE'
  | 'INSUFFICIENT_MATERIAL'
  | 'DISCONNECT';

export type PieceColor = 'w' | 'b';

export interface MovePayload {
  gameId: string;
  from: string;
  to: string;
  promotion?: string;
}

export interface GameState {
  id: string;
  fen: string;
  turn: PieceColor;
  status: GameStatus;
  whitePlayer: { id: string; username: string; rating: number; avatarUrl?: string };
  blackPlayer: { id: string; username: string; rating: number; avatarUrl?: string };
  whiteTimeMs: number;
  blackTimeMs: number;
  lastMove?: { from: string; to: string; san: string };
  isCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  isDraw: boolean;
  winnerId?: string;
  resultType?: GameResultType;
  history: string[];
}
