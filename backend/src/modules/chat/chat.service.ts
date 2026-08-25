import { Injectable } from '@nestjs/common';
import { ChatRoomType } from '../../database/entities/ChatMessage.entity';

@Injectable()
export class ChatService {
  private messages: Map<string, any[]> = new Map();

  async sendMessage(senderId: string, username: string, roomId: string, roomType: ChatRoomType, message: string) {
    const msgObj = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      senderId,
      username,
      roomId,
      roomType,
      message,
      createdAt: new Date().toISOString(),
    };

    const roomMsgs = this.messages.get(roomId) || [];
    roomMsgs.push(msgObj);
    this.messages.set(roomId, roomMsgs);

    return msgObj;
  }

  async getRoomMessages(roomId: string) {
    return this.messages.get(roomId) || [];
  }
}
