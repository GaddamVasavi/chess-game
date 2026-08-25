import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './Game.entity';
import { PlayerColor } from './GamePlayer.entity';

@Entity('game_moves')
export class GameMove {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameId: string;

  @ManyToOne(() => Game, (game) => game.moves, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @Column()
  moveNumber: number;

  @Column({
    type: 'enum',
    enum: PlayerColor,
  })
  color: PlayerColor;

  @Column() // Standard Algebraic Notation e.g. Nf3, e4, O-O, e8=Q#
  san: string;

  @Column() // Long Algebraic Notation e.g. e2e4
  lan: string;

  @Column() // FEN state after move
  fenAfter: string;

  @Column({ default: 0 }) // Move execution duration in ms
  durationMs: number;

  @Column({ type: 'jsonb', nullable: true })
  annotations: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}
