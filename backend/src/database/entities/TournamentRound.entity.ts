import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Tournament } from './Tournament.entity';
import { TournamentMatch } from './TournamentMatch.entity';

@Entity('tournament_rounds')
export class TournamentRound {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tournamentId: string;

  @ManyToOne(() => Tournament, (t) => t.rounds, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament;

  @Column()
  roundNumber: number; // e.g. 1 (Quarter), 2 (Semi), 3 (Final)

  @Column({ default: 'Quarter-Finals' })
  name: string;

  @Column({ default: false })
  isCompleted: boolean;

  @OneToMany(() => TournamentMatch, (tm) => tm.round, { cascade: true })
  matches: TournamentMatch[];

  @CreateDateColumn()
  createdAt: Date;
}
