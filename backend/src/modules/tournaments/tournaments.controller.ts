import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TournamentsService } from './tournaments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  @ApiOperation({ summary: 'List all active and upcoming tournaments' })
  async getAllTournaments() {
    return this.tournamentsService.getAllTournaments();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tournament bracket details and match rounds' })
  async getTournamentById(@Param('id') id: string) {
    return this.tournamentsService.getTournamentById(id);
  }

  @Post(':id/register')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Register authenticated player for tournament' })
  async registerPlayer(
    @Param('id') id: string,
    @Body() body: { playerId: string },
  ) {
    return this.tournamentsService.registerPlayer(id, body.playerId);
  }
}
