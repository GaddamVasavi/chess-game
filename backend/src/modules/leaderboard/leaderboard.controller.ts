import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LeaderboardService } from './leaderboard.service';
import { GameCategory } from '../../database/entities/Game.entity';

@ApiTags('Leaderboard')
@Controller('leaderboards')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch paginated global and category player rankings' })
  @ApiQuery({ name: 'category', enum: GameCategory, required: false })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 50 })
  async getLeaderboard(
    @Query('category') category?: GameCategory,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.leaderboardService.getLeaderboard(category, Number(page) || 1, Number(limit) || 50);
  }
}
