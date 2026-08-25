import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { GameCategory } from './Game.entity';

export enum LeaderboardPeriod {
  GLOBAL = 'GLOBAL',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

@Entity('leaderboards')
@Index(['period', 'category', 'rank'])
export class Leaderboard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: LeaderboardPeriod,
    default: LeaderboardPeriod.GLOBAL,
  })
  period: LeaderboardPeriod;

  @Column({
    type: 'enum',
    enum: GameCategory,
  })
  category: GameCategory;

  @Column()
  playerId: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column()
  rating: number;

  @Column()
  rank: number;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 0 })
  draws: number;

  @UpdateDateColumn()
  updatedAt: Date;
}
