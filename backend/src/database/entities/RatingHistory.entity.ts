import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Player } from './Player.entity';
import { GameCategory } from './Game.entity';

@Entity('rating_history')
export class RatingHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  playerId: string;

  @ManyToOne(() => Player, (player) => player.ratingHistories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  player: Player;

  @Column({
    type: 'enum',
    enum: GameCategory,
  })
  category: GameCategory;

  @Column()
  ratingBefore: number;

  @Column()
  ratingAfter: number;

  @Column({ nullable: true })
  gameId: string;

  @CreateDateColumn()
  createdAt: Date;
}
