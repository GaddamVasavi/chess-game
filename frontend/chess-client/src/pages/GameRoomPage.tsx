import React, { useState } from 'react';
import { ChessBoard } from '../components/chess/ChessBoard';
import { ChessClock } from '../components/chess/ChessClock';

export const GameRoomPage: React.FC = () => {
  const [fen, setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [moves, setMoves] = useState<string[]>([]);
  const [whiteTime, setWhiteTime] = useState(300000);
  const [blackTime, setBlackTime] = useState(300000);
  const [turn, setTurn] = useState<'w' | 'b'>('w');
  const [gameStatus, setGameStatus] = useState<string>('IN_PROGRESS');

  const handleMove = (from: string, to: string) => {
    // Optimistic local state update demonstration for responsive UI feel
    setMoves((prev) => [...prev, `${from}-${to}`]);
    setTurn((prev) => (prev === 'w' ? 'b' : 'w'));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Board & Player Clocks */}
      <div className="lg:col-span-8 flex flex-col items-center gap-4">
        {/* Opponent (Black) Clock */}
        <div className="w-full max-w-[560px]">
          <ChessClock
            username="Grandmaster_Opponent"
            rating={2150}
            timeRemainingMs={blackTime}
            isActive={turn === 'b'}
            color="BLACK"
          />
        </div>

        {/* Interactive Chess Board */}
        <ChessBoard fen={fen} turn={turn} onMove={handleMove} />

        {/* User (White) Clock */}
        <div className="w-full max-w-[560px]">
          <ChessClock
            username="You (Grandmaster)"
            rating={2180}
            timeRemainingMs={whiteTime}
            isActive={turn === 'w'}
            color="WHITE"
          />
        </div>
      </div>

      {/* Right Column: Move Notation & Game Controls */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-slate-100">Live Game Notation</h3>
            <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {gameStatus}
            </span>
          </div>

          {/* Move Notation List */}
          <div className="h-64 overflow-y-auto font-mono text-sm space-y-1 pr-2">
            {moves.length === 0 ? (
              <p className="text-slate-500 text-xs italic">Game started. Make a move on the board.</p>
            ) : (
              moves.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-800/50 text-slate-300">
                  <span className="text-slate-500 text-xs font-semibold w-8">{Math.floor(idx / 2) + 1}.</span>
                  <span className="font-bold text-sky-400">{m}</span>
                </div>
              ))
            )}
          </div>

          {/* Game Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              Offer Draw
            </button>
            <button
              type="button"
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 transition"
            >
              Resign Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
