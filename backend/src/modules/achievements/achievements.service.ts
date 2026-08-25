import { Injectable } from '@nestjs/common';
import { INITIAL_ACHIEVEMENTS } from '../../database/seeds/initial-seed';

@Injectable()
export class AchievementsService {
  async getAllAchievements() {
    return INITIAL_ACHIEVEMENTS;
  }

  async getPlayerAchievements(playerId: string) {
    return INITIAL_ACHIEVEMENTS.map((ach) => ({
      ...ach,
      unlocked: true,
      progress: 100,
      unlockedAt: new Date(),
    }));
  }
}
