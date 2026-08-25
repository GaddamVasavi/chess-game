import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { ChessGateway } from './chess.gateway';
import { ChessModule } from '../chess/chess.module';

@Module({
  imports: [ChessModule],
  controllers: [GamesController],
  providers: [GamesService, ChessGateway],
  exports: [GamesService, ChessGateway],
})
export class GamesModule {}
