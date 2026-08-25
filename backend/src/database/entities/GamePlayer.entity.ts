import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './Game.entity';
import { Player } from './Player.entity';

export enum PlayerColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}

@Entity('game_players')
export class GamePlayer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameId: string;

  @ManyToOne(() => Game, (game) => game.players, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @Column()
  playerId: string;

  @ManyToOne(() => Player, (player) => player.gamePlayers, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  player: Player;

  @Column({
    type: 'enum',
    enum: PlayerColor,
  })
  color: PlayerColor;

  @Column({ default: 300000 }) // Milliseconds remaining
  timeRemainingMs: number;

  @Column({ default: 1200 })
  ratingBefore: number;

  @Column({ nullable: true })
  ratingAfter: number;
}
