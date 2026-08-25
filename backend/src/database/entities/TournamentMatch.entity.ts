import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TournamentRound } from './TournamentRound.entity';

@Entity('tournament_matches')
export class TournamentMatch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roundId: string;

  @ManyToOne(() => TournamentRound, (tr) => tr.matches, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'roundId' })
  round: TournamentRound;

  @Column({ nullable: true })
  whitePlayerId: string;

  @Column({ nullable: true })
  blackPlayerId: string;

  @Column({ nullable: true })
  gameId: string;

  @Column({ nullable: true })
  winnerPlayerId: string;

  @Column({ default: false })
  isCompleted: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
