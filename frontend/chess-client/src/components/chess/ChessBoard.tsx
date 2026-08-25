import React, { useState } from 'react';
import { Chess, Square, Move } from 'chess.js';

interface ChessBoardProps {
  fen?: string;
  turn?: 'w' | 'b';
  orientation?: 'white' | 'black';
  onMove?: (from: string, to: string, promotion?: string) => void;
  disabled?: boolean;
}

const PIECE_SYMBOLS: Record<string, string> = {
  wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
  bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟',
};

export const ChessBoard: React.FC<ChessBoardProps> = ({
  fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  orientation = 'white',
  onMove,
  disabled = false,
}) => {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [legalSquareHighlights, setLegalSquareHighlights] = useState<string[]>([]);

  const chess = new Chess(fen);
  const board = chess.board();

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const displayRanks = orientation === 'white' ? ranks : [...ranks].reverse();
  const displayFiles = orientation === 'white' ? files : [...files].reverse();

  const handleSquareClick = (square: string) => {
    if (disabled) return;

    if (!selectedSquare) {
      const piece = chess.get(square as Square);
      if (piece && piece.color === chess.turn()) {
        setSelectedSquare(square);
        const moves = chess.moves({ square: square as Square, verbose: true }) as Move[];
        setLegalSquareHighlights(moves.map((m) => m.to));
      }
    } else {
      if (legalSquareHighlights.includes(square)) {
        if (onMove) {
          onMove(selectedSquare, square, 'q');
        }
      }
      setSelectedSquare(null);
      setLegalSquareHighlights([]);
    }
  };

  return (
    <div className="relative aspect-square max-w-[560px] w-full border-4 border-slate-800 rounded-2xl shadow-2xl overflow-hidden glass-panel select-none">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
        {displayRanks.map((rank, rIdx) =>
          displayFiles.map((file, fIdx) => {
            const square = `${file}${rank}`;
            const isLight = (rIdx + fIdx) % 2 === 0;
            const piece = chess.get(square as Square);
            const isSelected = selectedSquare === square;
            const isHighlight = legalSquareHighlights.includes(square);

            const pieceKey = piece ? `${piece.color}${piece.type.toUpperCase()}` : null;
            const pieceChar = pieceKey ? PIECE_SYMBOLS[pieceKey] : '';

            return (
              <button
                key={square}
                type="button"
                onClick={() => handleSquareClick(square)}
                className={`relative flex items-center justify-center transition-colors duration-150 ${
                  isLight ? 'bg-[#eeeed2]' : 'bg-[#769656]'
                } ${isSelected ? '!bg-amber-400/80 ring-4 ring-amber-300 z-10' : ''}`}
              >
                {/* File/Rank Notation Labels */}
                {fIdx === 0 && (
                  <span
                    className={`absolute top-1 left-1 text-[10px] font-bold ${
                      isLight ? 'text-[#769656]' : 'text-[#eeeed2]'
                    }`}
                  >
                    {rank}
                  </span>
                )}
                {rIdx === 7 && (
                  <span
                    className={`absolute bottom-0.5 right-1 text-[10px] font-bold ${
                      isLight ? 'text-[#769656]' : 'text-[#eeeed2]'
                    }`}
                  >
                    {file}
                  </span>
                )}

                {/* Move Highlight Indicator */}
                {isHighlight && (
                  <div
                    className={`absolute z-10 rounded-full ${
                      piece
                        ? 'w-full h-full border-4 border-black/20'
                        : 'w-4 h-4 bg-black/20'
                    }`}
                  />
                )}

                {/* Render Piece */}
                {pieceChar && (
                  <span
                    className={`text-4xl sm:text-5xl font-serif drop-shadow-md transition-transform duration-100 ${
                      piece?.color === 'w'
                        ? 'text-slate-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'
                        : 'text-slate-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.4)]'
                    } ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
                  >
                    {pieceChar}
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
