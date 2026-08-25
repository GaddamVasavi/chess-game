import { Injectable, Logger } from '@nestjs/common';
import { GameCategory } from '../../database/entities/Game.entity';
import { GamesService } from '../games/games.service';

export interface QueueEntry {
  playerId: string;
  username: string;
  rating: number;
  category: GameCategory;
  joinedAt: number;
}

@Injectable()
export class MatchmakingService {
  private readonly logger = new Logger('MatchmakingService');
  private queues: Map<GameCategory, QueueEntry[]> = new Map([
    [GameCategory.BULLET, []],
    [GameCategory.BLITZ, []],
    [GameCategory.RAPID, []],
    [GameCategory.CLASSICAL, []],
  ]);

  constructor(private readonly gamesService: GamesService) {}

  public async joinQueue(entry: QueueEntry) {
    const queue = this.queues.get(entry.category) || [];
    
    // Remove duplicate entry if player was already in queue
    const filtered = queue.filter((e) => e.playerId !== entry.playerId);
    filtered.push(entry);
    this.queues.set(entry.category, filtered);

    this.logger.log(`Player ${entry.username} (${entry.rating}) joined ${entry.category} queue`);
    return await this.processMatchmaking(entry.category);
  }

  public leaveQueue(playerId: string, category: GameCategory) {
    const queue = this.queues.get(category) || [];
    const updated = queue.filter((e) => e.playerId !== playerId);
    this.queues.set(category, updated);
    this.logger.log(`Player ${playerId} left ${category} queue`);
    return { success: true };
  }

  private async processMatchmaking(category: GameCategory) {
    const queue = this.queues.get(category) || [];
    if (queue.length < 2) {
      return null;
    }

    // Sort entries by rating proximity
    queue.sort((a, b) => a.rating - b.rating);

    for (let i = 0; i < queue.length - 1; i++) {
      const player1 = queue[i];
      const player2 = queue[i + 1];
      const ratingDiff = Math.abs(player1.rating - player2.rating);

      // Expand allowed rating delta based on waiting time (e.g. +50 ELO every 5 seconds)
      const waitTimeSeconds = (Date.now() - Math.min(player1.joinedAt, player2.joinedAt)) / 1000;
      const maxAllowedDelta = 200 + Math.floor(waitTimeSeconds / 5) * 50;

      if (ratingDiff <= maxAllowedDelta) {
        // Remove matched players from queue
        this.queues.set(
          category,
          queue.filter((e) => e.playerId !== player1.playerId && e.playerId !== player2.playerId),
        );

        // Assign colors randomly
        const isP1White = Math.random() > 0.5;
        const whitePlayer = isP1White ? player1 : player2;
        const blackPlayer = isP1White ? player2 : player1;

        const game = await this.gamesService.createGame({
          mode: category,
          isRated: true,
          whitePlayerId: whitePlayer.playerId,
          blackPlayerId: blackPlayer.playerId,
        });

        this.logger.log(`Match created: ${game.id} for ${whitePlayer.username} vs ${blackPlayer.username}`);

        return {
          matchFound: true,
          game,
          whitePlayer,
          blackPlayer,
        };
      }
    }

    return null;
  }
}
