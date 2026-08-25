import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ReplayService } from './replay.service';

@ApiTags('Game Replay & PGN')
@Controller('replay')
export class ReplayController {
  constructor(private readonly replayService: ReplayService) {}

  @Post('parse-pgn')
  @ApiOperation({ summary: 'Parse PGN and generate interactive move timeline for replay controls' })
  async parsePgn(@Body() body: { pgn: string }) {
    return this.replayService.generateReplayFromPgn(body.pgn);
  }
}
