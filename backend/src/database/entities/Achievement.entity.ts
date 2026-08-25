import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { PlayerAchievement } from './PlayerAchievement.entity';

@Entity('achievements')
export class Achievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string; // e.g. FIRST_WIN, WIN_10, GAMES_100, TOURNAMENT_CHAMPION

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  badgeIconUrl: string;

  @Column({ default: 100 })
  xpReward: number;

  @OneToMany(() => PlayerAchievement, (pa) => pa.achievement)
  playerAchievements: PlayerAchievement[];

  @CreateDateColumn()
  createdAt: Date;
}
