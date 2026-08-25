import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Player } from './Player.entity';
import { Achievement } from './Achievement.entity';

@Entity('player_achievements')
@Unique(['playerId', 'achievementId'])
export class PlayerAchievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  playerId: string;

  @ManyToOne(() => Player, (p) => p.achievements, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  player: Player;

  @Column()
  achievementId: string;

  @ManyToOne(() => Achievement, (a) => a.playerAchievements, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'achievementId' })
  achievement: Achievement;

  @Column({ default: 100 }) // Progress percentage e.g. 100 = completed
  progress: number;

  @CreateDateColumn()
  unlockedAt: Date;
}
