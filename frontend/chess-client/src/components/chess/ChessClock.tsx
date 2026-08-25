import React from 'react';

interface ChessClockProps {
  username: string;
  rating: number;
  timeRemainingMs: number;
  isActive: boolean;
  color: 'WHITE' | 'BLACK';
  avatarUrl?: string;
}

export const ChessClock: React.FC<ChessClockProps> = ({
  username,
  rating,
  timeRemainingMs,
  isActive,
  color,
}) => {
  const totalSeconds = Math.max(0, Math.floor(timeRemainingMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = Math.floor((timeRemainingMs % 1000) / 100);

  const isLowTime = totalSeconds < 30;

  return (
    <div
      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
        isActive
          ? 'bg-slate-900 border-sky-500 shadow-[0_0_15px_rgba(2,132,199,0.3)] ring-1 ring-sky-500/50'
          : 'bg-slate-900/60 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            color === 'WHITE' ? 'bg-slate-100 border-slate-400' : 'bg-slate-900 border-slate-700'
          }`}
        />
        <div>
          <h4 className="text-sm font-bold text-slate-100 leading-tight">{username}</h4>
          <span className="text-xs font-mono text-slate-400">({rating})</span>
        </div>
      </div>

      <div
        className={`px-4 py-1.5 rounded-lg font-mono text-xl font-black tracking-wider ${
          isLowTime
            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
            : isActive
            ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
            : 'bg-slate-800 text-slate-400'
        }`}
      >
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        {isLowTime && <span className="text-xs ml-0.5">.{millis}</span>}
      </div>
    </div>
  );
};
