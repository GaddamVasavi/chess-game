import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { GameCategory } from './Game.entity';
import { TournamentPlayer } from './TournamentPlayer.entity';
import { TournamentRound } from './TournamentRound.entity';

export enum TournamentFormat {
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  SWISS = 'SWISS',
}

export enum TournamentStatus {
  UPCOMING = 'UPCOMING',
  REGISTRATION_OPEN = 'REGISTRATION_OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: TournamentFormat,
    default: TournamentFormat.SINGLE_ELIMINATION,
  })
  format: TournamentFormat;

  @Column({
    type: 'enum',
    enum: GameCategory,
    default: GameCategory.BLITZ,
  })
  timeCategory: GameCategory;

  @Column({ default: 180 }) // Time control base (seconds)
  timeControlBase: number;

  @Column({ default: 0 }) // Increment (seconds)
  timeControlIncrement: number;

  @Column({ default: 16 })
  maxPlayers: number;

  @Column({
    type: 'enum',
    enum: TournamentStatus,
    default: TournamentStatus.UPCOMING,
  })
  status: TournamentStatus;

  @Column({ type: 'timestamp' })
  startTime: Date;

  @OneToMany(() => TournamentPlayer, (tp) => tp.tournament, { cascade: true })
  players: TournamentPlayer[];

  @OneToMany(() => TournamentRound, (tr) => tr.tournament, { cascade: true })
  rounds: TournamentRound[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
