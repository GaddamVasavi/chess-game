import React, { useState } from 'react';

export const LeaderboardPage: React.FC = () => {
  const [leaderboard] = useState([
    { rank: 1, username: 'Magnus_C', rating: 2850, category: 'BLITZ', wins: 450, losses: 50, draws: 30, country: 'NO' },
    { rank: 2, username: 'Hikaru_N', rating: 2820, category: 'BLITZ', wins: 420, losses: 60, draws: 40, country: 'US' },
    { rank: 3, username: 'Alireza_F', rating: 2790, category: 'BLITZ', wins: 380, losses: 70, draws: 25, country: 'FR' },
    { rank: 4, username: 'Fabiano_C', rating: 2780, category: 'CLASSICAL', wins: 310, losses: 40, draws: 80, country: 'US' },
    { rank: 5, username: 'Nodirbek_A', rating: 2765, category: 'RAPID', wins: 290, losses: 55, draws: 35, country: 'UZ' },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Global Leaderboard</h1>
        <p className="text-slate-400 text-sm">Top ranked grandmasters across Bullet, Blitz, Rapid, and Classical categories</p>
      </div>

      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/80 text-xs uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th className="py-3.5 px-6">Rank</th>
              <th className="py-3.5 px-6">Player</th>
              <th className="py-3.5 px-6">Category</th>
              <th className="py-3.5 px-6">Rating</th>
              <th className="py-3.5 px-6 text-right">Win / Loss / Draw</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {leaderboard.map((player) => (
              <tr key={player.rank} className="hover:bg-slate-800/40 transition">
                <td className="py-4 px-6 font-mono font-bold text-sky-400">#{player.rank}</td>
                <td className="py-4 px-6 font-bold text-slate-100 flex items-center gap-2">
                  <span>{player.username}</span>
                  <span className="text-xs font-mono text-slate-500">[{player.country}]</span>
                </td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {player.category}
                  </span>
                </td>
                <td className="py-4 px-6 font-mono font-bold text-amber-400">{player.rating}</td>
                <td className="py-4 px-6 text-right font-mono text-xs text-slate-400">
                  <span className="text-emerald-400 font-bold">{player.wins}W</span> /{' '}
                  <span className="text-rose-400 font-bold">{player.losses}L</span> /{' '}
                  <span className="text-slate-400">{player.draws}D</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
