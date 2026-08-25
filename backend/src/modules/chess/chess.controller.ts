import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ChessService } from './chess.service';

@ApiTags('Chess Engine')
@Controller('chess')
export class ChessController {
  constructor(private readonly chessService: ChessService) {}

  @Get('moves/:gameId')
  @ApiOperation({ summary: 'Get legal moves for current game turn' })
  @ApiQuery({ name: 'square', required: false, example: 'e2' })
  getLegalMoves(
    @Param('gameId') gameId: string,
    @Query('square') square?: string,
  ) {
    return this.chessService.getLegalMoves(gameId, square);
  }
}
