import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { MatchmakingService } from './matchmaking.service';
import { GameCategory } from '../../database/entities/Game.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Matchmaking')
@Controller('matchmaking')
export class MatchmakingController {
  constructor(private readonly matchmakingService: MatchmakingService) {}

  @Post('join')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Join the matchmaking queue for a specific game mode' })
  async joinQueue(
    @Body()
    body: {
      playerId: string;
      username: string;
      rating: number;
      category: GameCategory;
    },
  ) {
    return this.matchmakingService.joinQueue({
      ...body,
      joinedAt: Date.now(),
    });
  }

  @Post('leave')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Leave the current matchmaking queue' })
  async leaveQueue(@Body() body: { playerId: string; category: GameCategory }) {
    return this.matchmakingService.leaveQueue(body.playerId, body.category);
  }
}
