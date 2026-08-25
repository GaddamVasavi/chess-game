import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Player } from './Player.entity';
import { GameCategory } from './Game.entity';

@Entity('ratings')
@Unique(['playerId', 'category'])
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  playerId: string;

  @ManyToOne(() => Player, (player) => player.ratings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  player: Player;

  @Column({
    type: 'enum',
    enum: GameCategory,
  })
  category: GameCategory;

  @Column({ default: 1200 })
  rating: number;

  @Column({ type: 'float', default: 350.0 })
  ratingDeviation: number;

  @Column({ type: 'float', default: 0.06 })
  volatility: number;

  @Column({ default: 1200 })
  peakRating: number;

  @UpdateDateColumn()
  updatedAt: Date;
}
