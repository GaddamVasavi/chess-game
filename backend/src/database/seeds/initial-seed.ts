import { UserRole } from '../entities/User.entity';
import { GameCategory } from '../entities/Game.entity';

export const INITIAL_ACHIEVEMENTS = [
  {
    code: 'FIRST_WIN',
    title: 'First Blood',
    description: 'Win your very first online chess match.',
    xpReward: 100,
  },
  {
    code: 'WIN_10',
    title: 'Rising Tactician',
    description: 'Win 10 online rated games.',
    xpReward: 250,
  },
  {
    code: 'GAMES_100',
    title: 'Centurion',
    description: 'Play 100 online games.',
    xpReward: 500,
  },
  {
    code: 'WIN_STREAK_5',
    title: 'Unstoppable',
    description: 'Achieve a 5-game win streak.',
    xpReward: 350,
  },
  {
    code: 'TOURNAMENT_CHAMPION',
    title: 'Grandmaster Crown',
    description: 'Win first place in an official tournament.',
    xpReward: 1000,
  },
  {
    code: 'RATING_1500',
    title: 'Intermediate Scholar',
    description: 'Reach a rating of 1500 in any category.',
    xpReward: 300,
  },
  {
    code: 'RATING_2000',
    title: 'Master Mind',
    description: 'Reach a rating of 2000 in any category.',
    xpReward: 800,
  },
];

export const INITIAL_BOT_PLAYERS = [
  {
    username: 'Stockfish_Bot_Easy',
    email: 'stockfish.easy@grandmaster.io',
    role: UserRole.PLAYER,
    rating: 1000,
    title: 'BOT',
    country: 'DE',
  },
  {
    username: 'Stockfish_Bot_Medium',
    email: 'stockfish.med@grandmaster.io',
    role: UserRole.PLAYER,
    rating: 1500,
    title: 'BOT',
    country: 'DE',
  },
  {
    username: 'Stockfish_Bot_Hard',
    email: 'stockfish.hard@grandmaster.io',
    role: UserRole.PLAYER,
    rating: 2200,
    title: 'BOT',
    country: 'DE',
  },
  {
    username: 'Admin_Master',
    email: 'admin@grandmaster.io',
    role: UserRole.ADMIN,
    rating: 2500,
    title: 'GM',
    country: 'US',
  },
];
