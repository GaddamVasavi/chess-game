import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './Game.entity';

@Entity('game_replays')
export class GameReplay {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameId: string;

  @ManyToOne(() => Game, (g) => g.replays, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @Column({ type: 'text' })
  pgn: string;

  @Column({ type: 'jsonb' })
  timeline: Array<{
    moveIndex: number;
    san: string;
    fen: string;
    timeRemainingWhite: number;
    timeRemainingBlack: number;
  }>;

  @CreateDateColumn()
  createdAt: Date;
}
