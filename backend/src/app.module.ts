import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ChessModule } from './modules/chess/chess.module';
import { GamesModule } from './modules/games/games.module';
import { MatchmakingModule } from './modules/matchmaking/matchmaking.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { FriendsModule } from './modules/friends/friends.module';
import { ChatModule } from './modules/chat/chat.module';
import { ReplayModule } from './modules/replay/replay.module';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    AuthModule,
    ChessModule,
    GamesModule,
    MatchmakingModule,
    LeaderboardModule,
    TournamentsModule,
    FriendsModule,
    ChatModule,
    ReplayModule,
    AchievementsModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
