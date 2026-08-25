import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Player } from './Player.entity';
import { Game } from './Game.entity';

export enum ChatRoomType {
  GLOBAL = 'GLOBAL',
  GAME = 'GAME',
  DIRECT = 'DIRECT',
  TOURNAMENT = 'TOURNAMENT',
}

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ChatRoomType,
    default: ChatRoomType.GLOBAL,
  })
  roomType: ChatRoomType;

  @Column({ nullable: true })
  roomId: string;

  @Column()
  senderId: string;

  @ManyToOne(() => Player, (p) => p.chatMessages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'senderId' })
  sender: Player;

  @Column({ nullable: true })
  gameId: string;

  @ManyToOne(() => Game, (g) => g.chatMessages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @Column({ type: 'text' })
  message: string;

  @Column({ default: false })
  isModerated: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
