import { Injectable } from '@nestjs/common';
import { GameCategory } from '../../database/entities/Game.entity';

@Injectable()
export class LeaderboardService {
  private mockLeaderboard = [
    { rank: 1, username: 'Magnus_C', rating: 2850, category: GameCategory.BLITZ, wins: 450, losses: 50, draws: 30, country: 'NO' },
    { rank: 2, username: 'Hikaru_N', rating: 2820, category: GameCategory.BLITZ, wins: 420, losses: 60, draws: 40, country: 'US' },
    { rank: 3, username: 'Alireza_F', rating: 2790, category: GameCategory.BLITZ, wins: 380, losses: 70, draws: 25, country: 'FR' },
    { rank: 4, username: 'Fabiano_C', rating: 2780, category: GameCategory.CLASSICAL, wins: 310, losses: 40, draws: 80, country: 'US' },
    { rank: 5, username: 'Nodirbek_A', rating: 2765, category: GameCategory.RAPID, wins: 290, losses: 55, draws: 35, country: 'UZ' },
  ];

  async getLeaderboard(category?: GameCategory, page: number = 1, limit: number = 50) {
    let filtered = this.mockLeaderboard;
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return {
      data: paginated,
      total: filtered.length,
      page,
      limit,
    };
  }
}
