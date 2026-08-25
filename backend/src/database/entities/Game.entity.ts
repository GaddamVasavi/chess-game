import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { GamePlayer } from './GamePlayer.entity';
import { GameMove } from './GameMove.entity';
import { GameReplay } from './GameReplay.entity';
import { Spectator } from './Spectator.entity';
import { ChatMessage } from './ChatMessage.entity';

export enum GameCategory {
  BULLET = 'BULLET',
  BLITZ = 'BLITZ',
  RAPID = 'RAPID',
  CLASSICAL = 'CLASSICAL',
  CUSTOM = 'CUSTOM',
}

export enum GameStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ABORTED = 'ABORTED',
}

export enum GameResultType {
  CHECKMATE = 'CHECKMATE',
  STALEMATE = 'STALEMATE',
  TIMEOUT = 'TIMEOUT',
  RESIGNATION = 'RESIGNATION',
  DRAW_AGREEMENT = 'DRAW_AGREEMENT',
  THREEFOLD_REPETITION = 'THREEFOLD_REPETITION',
  FIFTY_MOVE_RULE = 'FIFTY_MOVE_RULE',
  INSUFFICIENT_MATERIAL = 'INSUFFICIENT_MATERIAL',
  DISCONNECT = 'DISCONNECT',
}

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: GameCategory,
    default: GameCategory.BLITZ,
  })
  mode: GameCategory;

  @Column({
    type: 'enum',
    enum: GameStatus,
    default: GameStatus.PENDING,
  })
  status: GameStatus;

  @Column({
    type: 'enum',
    enum: GameResultType,
    nullable: true,
  })
  resultType: GameResultType;

  @Column({ nullable: true })
  winnerPlayerId: string;

  @Column({ default: 300 }) // In seconds
  timeControlBase: number;

  @Column({ default: 0 }) // In seconds increment
  timeControlIncrement: number;

  @Column({ default: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' })
  initialFen: string;

  @Column({ default: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' })
  finalFen: string;

  @Column({ type: 'text', nullable: true })
  pgn: string;

  @Column({ default: true })
  isRated: boolean;

  @Column({ default: false })
  isPrivate: boolean;

  @Column({ unique: true, nullable: true })
  customRoomCode: string;

  @Column({ type: 'timestamp', nullable: true })
  startedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  endedAt: Date;

  @OneToMany(() => GamePlayer, (gp) => gp.game, { cascade: true })
  players: GamePlayer[];

  @OneToMany(() => GameMove, (gm) => gm.game, { cascade: true })
  moves: GameMove[];

  @OneToMany(() => GameReplay, (gr) => gr.game)
  replays: GameReplay[];

  @OneToMany(() => Spectator, (spec) => spec.game)
  spectators: Spectator[];

  @OneToMany(() => ChatMessage, (msg) => msg.game)
  chatMessages: ChatMessage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
