import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { FriendsService } from './friends.service';
import { FriendRequestStatus } from '../../database/entities/FriendRequest.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Friends')
@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get(':playerId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get player friends list' })
  async getFriendsList(@Param('playerId') playerId: string) {
    return this.friendsService.getFriendsList(playerId);
  }

  @Post('request')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send friend invite request' })
  async sendFriendRequest(@Body() body: { senderId: string; receiverId: string }) {
    return this.friendsService.sendFriendRequest(body.senderId, body.receiverId);
  }

  @Post('request/:id/respond')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Accept or reject pending friend request' })
  async respondFriendRequest(
    @Param('id') id: string,
    @Body() body: { status: FriendRequestStatus },
  ) {
    return this.friendsService.respondFriendRequest(id, body.status);
  }
}
