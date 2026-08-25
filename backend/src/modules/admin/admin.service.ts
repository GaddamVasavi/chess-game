import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async getSystemHealth() {
    return {
      status: 'HEALTHY',
      uptimeSeconds: process.uptime(),
      timestamp: new Date().toISOString(),
      components: {
        server: { status: 'UP', latencyMs: 2 },
        database: { status: 'CONNECTED', poolActive: 5, poolIdle: 15 },
        redis: { status: 'CONNECTED', pingMs: 1 },
      },
      metrics: {
        activePlayers: 142,
        activeGames: 38,
        matchmakingQueue: 12,
        activeWebSockets: 215,
        requestsPerMinute: 1840,
        averageApiLatencyMs: 24,
      },
    };
  }

  async getActiveGames() {
    return [
      { gameId: 'gm_active_1', mode: 'BLITZ', white: 'Magnus_C', black: 'Hikaru_N', movesCount: 24, status: 'IN_PROGRESS' },
      { gameId: 'gm_active_2', mode: 'BULLET', white: 'Alireza_F', black: 'Nodirbek_A', movesCount: 42, status: 'IN_PROGRESS' },
    ];
  }

  async getAuditLogs() {
    return [
      { id: 'log_1', action: 'AUTH_LOGIN', userId: 'usr_admin', ipAddress: '127.0.0.1', timestamp: new Date().toISOString() },
      { id: 'log_2', action: 'TOURNAMENT_CREATED', userId: 'usr_admin', details: { name: 'Grandmaster Blitz Cup' }, timestamp: new Date().toISOString() },
    ];
  }
}
