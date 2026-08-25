import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tournament } from './Tournament.entity';
import { Player } from './Player.entity';

@Entity('tournament_players')
export class TournamentPlayer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tournamentId: string;

  @ManyToOne(() => Tournament, (t) => t.players, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament;

  @Column()
  playerId: string;

  @ManyToOne(() => Player, (p) => p.tournamentPlayers, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  player: Player;

  @Column({ default: 0 })
  seed: number;

  @Column({ nullable: true })
  finalRank: number;

  @Column({ type: 'float', default: 0 })
  score: number;

  @CreateDateColumn()
  registeredAt: Date;
}
