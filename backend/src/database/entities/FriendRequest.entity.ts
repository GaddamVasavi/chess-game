import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Player } from './Player.entity';

export enum FriendRequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

@Entity('friend_requests')
export class FriendRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  senderId: string;

  @ManyToOne(() => Player, (p) => p.sentFriendRequests, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'senderId' })
  sender: Player;

  @Column()
  receiverId: string;

  @ManyToOne(() => Player, (p) => p.receivedFriendRequests, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'receiverId' })
  receiver: Player;

  @Column({
    type: 'enum',
    enum: FriendRequestStatus,
    default: FriendRequestStatus.PENDING,
  })
  status: FriendRequestStatus;

  @CreateDateColumn()
  createdAt: Date;
}
