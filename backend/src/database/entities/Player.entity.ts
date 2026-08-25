import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User.entity';
import { Rating } from './Rating.entity';
import { RatingHistory } from './RatingHistory.entity';
import { GamePlayer } from './GamePlayer.entity';
import { TournamentPlayer } from './TournamentPlayer.entity';
import { Friend } from './Friend.entity';
import { FriendRequest } from './FriendRequest.entity';
import { PlayerAchievement } from './PlayerAchievement.entity';
import { ChatMessage } from './ChatMessage.entity';
import { Notification } from './Notification.entity';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  userId: string;

  @OneToOne(() => User, (user) => user.player, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ default: 'US' })
  country: string;

  @Column({ nullable: true })
  title: string; // e.g. GM, IM, FM, CM

  @Column({ default: 0 })
  totalGames: number;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 0 })
  draws: number;

  @Column({ default: 0 })
  winStreak: number;

  @Column({ default: 0 })
  bestWinStreak: number;

  @Column({ default: 0 })
  xp: number;

  @Column({ default: 1 })
  level: number;

  @OneToMany(() => Rating, (rating) => rating.player)
  ratings: Rating[];

  @OneToMany(() => RatingHistory, (rh) => rh.player)
  ratingHistories: RatingHistory[];

  @OneToMany(() => GamePlayer, (gp) => gp.player)
  gamePlayers: GamePlayer[];

  @OneToMany(() => TournamentPlayer, (tp) => tp.player)
  tournamentPlayers: TournamentPlayer[];

  @OneToMany(() => Friend, (friend) => friend.player)
  friends: Friend[];

  @OneToMany(() => FriendRequest, (fr) => fr.sender)
  sentFriendRequests: FriendRequest[];

  @OneToMany(() => FriendRequest, (fr) => fr.receiver)
  receivedFriendRequests: FriendRequest[];

  @OneToMany(() => PlayerAchievement, (pa) => pa.player)
  achievements: PlayerAchievement[];

  @OneToMany(() => ChatMessage, (msg) => msg.sender)
  chatMessages: ChatMessage[];

  @OneToMany(() => Notification, (notif) => notif.player)
  notifications: Notification[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
