import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { TournamentFormat, TournamentStatus } from '../../database/entities/Tournament.entity';
import { GameCategory } from '../../database/entities/Game.entity';

@Injectable()
export class TournamentsService {
  private tournaments: Map<string, any> = new Map();

  constructor() {
    // Seed initial upcoming tournament
    const defaultTournament = {
      id: 'tourn_grandmaster_blitz_2026',
      name: 'Grandmaster Arena Blitz Cup #1',
      description: 'Official 16-player single-elimination blitz tournament.',
      format: TournamentFormat.SINGLE_ELIMINATION,
      timeCategory: GameCategory.BLITZ,
      timeControlBase: 180,
      timeControlIncrement: 0,
      maxPlayers: 16,
      registeredPlayerIds: ['ply_1', 'ply_2', 'ply_3', 'ply_4'],
      status: TournamentStatus.REGISTRATION_OPEN,
      startTime: new Date(Date.now() + 86400000),
      rounds: [
        {
          roundNumber: 1,
          name: 'Quarter-Finals',
          matches: [
            { matchId: 'm1', whitePlayerId: 'ply_1', blackPlayerId: 'ply_2', winnerId: null },
            { matchId: 'm2', whitePlayerId: 'ply_3', blackPlayerId: 'ply_4', winnerId: null },
          ],
        },
        {
          roundNumber: 2,
          name: 'Semi-Finals',
          matches: [],
        },
        {
          roundNumber: 3,
          name: 'Finals',
          matches: [],
        },
      ],
    };
    this.tournaments.set(defaultTournament.id, defaultTournament);
  }

  async getAllTournaments() {
    return Array.from(this.tournaments.values());
  }

  async getTournamentById(id: string) {
    const tournament = this.tournaments.get(id);
    if (!tournament) {
      throw new NotFoundException(`Tournament ${id} not found`);
    }
    return tournament;
  }

  async registerPlayer(tournamentId: string, playerId: string) {
    const tournament = await this.getTournamentById(tournamentId);

    if (tournament.registeredPlayerIds.includes(playerId)) {
      throw new BadRequestException('Player already registered for this tournament');
    }

    if (tournament.registeredPlayerIds.length >= tournament.maxPlayers) {
      throw new BadRequestException('Tournament capacity reached');
    }

    tournament.registeredPlayerIds.push(playerId);
    return {
      success: true,
      registeredCount: tournament.registeredPlayerIds.length,
      maxPlayers: tournament.maxPlayers,
    };
  }

  async createTournament(payload: any) {
    const id = `tourn_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const tournament = {
      id,
      name: payload.name,
      description: payload.description || '',
      format: payload.format || TournamentFormat.SINGLE_ELIMINATION,
      timeCategory: payload.timeCategory || GameCategory.BLITZ,
      timeControlBase: payload.timeControlBase || 180,
      timeControlIncrement: payload.timeControlIncrement || 0,
      maxPlayers: payload.maxPlayers || 16,
      registeredPlayerIds: [],
      status: TournamentStatus.UPCOMING,
      startTime: payload.startTime || new Date(Date.now() + 3600000),
      rounds: [],
    };
    this.tournaments.set(id, tournament);
    return tournament;
  }
}
