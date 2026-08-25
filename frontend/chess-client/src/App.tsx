import React, { useState } from 'react';
import { GameRoomPage } from './pages/GameRoomPage';
import { TournamentsPage } from './pages/TournamentsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<'play' | 'tournaments' | 'leaderboard' | 'admin'>('play');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Global Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg text-white font-black text-xl">
            ♔
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent leading-none">
              Grandmaster IO
            </h1>
            <span className="text-[10px] font-mono text-slate-400">Multiplayer Online Chess Engine</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('play')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'play'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Play 1v1
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tournaments')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'tournaments'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Tournaments
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Leaderboard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'admin'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Admin Dashboard
          </button>
        </nav>

        {/* User Quick Info */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-slate-400">Rating: <strong className="text-amber-400">2180</strong></span>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sky-400">
            GM
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-6">
        {activeTab === 'play' && <GameRoomPage />}
        {activeTab === 'tournaments' && <TournamentsPage />}
        {activeTab === 'leaderboard' && <LeaderboardPage />}
        {activeTab === 'admin' && <AdminDashboardPage />}
      </main>
    </div>
  );
}
