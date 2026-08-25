import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { ChatRoomType } from '../../database/entities/ChatMessage.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':roomId')
  @ApiOperation({ summary: 'Get recent chat messages for room or game channel' })
  async getRoomMessages(@Param('roomId') roomId: string) {
    return this.chatService.getRoomMessages(roomId);
  }

  @Post('send')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Post a chat message to a room' })
  async sendMessage(
    @Body()
    body: {
      senderId: string;
      username: string;
      roomId: string;
      roomType: ChatRoomType;
      message: string;
    },
  ) {
    return this.chatService.sendMessage(
      body.senderId,
      body.username,
      body.roomId,
      body.roomType,
      body.message,
    );
  }
}
