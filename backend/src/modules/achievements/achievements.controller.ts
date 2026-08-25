import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AchievementsService } from './achievements.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Achievements')
@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  @ApiOperation({ summary: 'List all available system achievements and badges' })
  async getAllAchievements() {
    return this.achievementsService.getAllAchievements();
  }

  @Get('player/:playerId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get unlocked achievements for specific player' })
  async getPlayerAchievements(@Param('playerId') playerId: string) {
    return this.achievementsService.getPlayerAchievements(playerId);
  }
}
