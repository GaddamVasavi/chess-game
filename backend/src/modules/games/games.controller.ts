import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { GameCategory } from '../../database/entities/Game.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new private or custom chess match room' })
  async createGame(
    @Body()
    body: {
      mode: GameCategory;
      isRated?: boolean;
      isPrivate?: boolean;
      timeControlBase?: number;
      timeControlIncrement?: number;
    },
  ) {
    return this.gamesService.createGame(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get chess game details by ID' })
  async getGameById(@Param('id') id: string) {
    return this.gamesService.getGameById(id);
  }
}
