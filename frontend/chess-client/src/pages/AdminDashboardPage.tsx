import React, { useState } from 'react';

export const AdminDashboardPage: React.FC = () => {
  const [metrics] = useState({
    activePlayers: 142,
    activeGames: 38,
    matchmakingQueue: 12,
    activeWebSockets: 215,
    requestsPerMinute: 1840,
    averageApiLatencyMs: 24,
    dbPoolActive: 5,
    redisPingMs: 1,
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Admin Control Center</h1>
        <p className="text-slate-400 text-sm">Real-time telemetry, active game monitoring, and server health overview</p>
      </div>

      {/* Telemetry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400">Active Players</span>
          <h3 className="text-2xl font-black text-sky-400 font-mono">{metrics.activePlayers}</h3>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400">Active Games</span>
          <h3 className="text-2xl font-black text-emerald-400 font-mono">{metrics.activeGames}</h3>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400">WebSocket Latency</span>
          <h3 className="text-2xl font-black text-purple-400 font-mono">{metrics.averageApiLatencyMs} ms</h3>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400">Redis Ping</span>
          <h3 className="text-2xl font-black text-amber-400 font-mono">{metrics.redisPingMs} ms</h3>
        </div>
      </div>
    </div>
  );
};
