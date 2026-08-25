import React, { useState } from 'react';

export const TournamentsPage: React.FC = () => {
  const [tournaments] = useState([
    {
      id: 'tourn_1',
      name: 'Grandmaster Arena Blitz Cup #1',
      description: 'Official 16-player single-elimination blitz tournament.',
      format: 'SINGLE_ELIMINATION',
      timeCategory: 'BLITZ',
      maxPlayers: 16,
      registeredCount: 12,
      status: 'REGISTRATION_OPEN',
    },
    {
      id: 'tourn_2',
      name: 'Bullet Madness Knockout',
      description: 'Ultra fast 1+0 bullet tournament.',
      format: 'SINGLE_ELIMINATION',
      timeCategory: 'BULLET',
      maxPlayers: 32,
      registeredCount: 32,
      status: 'IN_PROGRESS',
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Tournaments & Brackets</h1>
          <p className="text-slate-400 text-sm">Compete in single elimination and Swiss tournament brackets</p>
        </div>
        <button
          type="button"
          className="py-2.5 px-5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg transition"
        >
          Create Tournament
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments.map((t) => (
          <div key={t.id} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{t.name}</h3>
                <p className="text-slate-400 text-xs mt-1">{t.description}</p>
              </div>
              <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                {t.timeCategory}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-b border-slate-800 py-3">
              <span>Format: <strong className="text-slate-200">{t.format}</strong></span>
              <span>Players: <strong className="text-sky-400">{t.registeredCount} / {t.maxPlayers}</strong></span>
            </div>

            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition"
            >
              {t.status === 'REGISTRATION_OPEN' ? 'Register Now' : 'View Tournament Bracket'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
