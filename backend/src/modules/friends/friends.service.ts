import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { FriendRequestStatus } from '../../database/entities/FriendRequest.entity';

@Injectable()
export class FriendsService {
  private friendRequests: Map<string, any> = new Map();
  private friendships: Map<string, Set<string>> = new Map();

  async sendFriendRequest(senderId: string, receiverId: string) {
    if (senderId === receiverId) {
      throw new BadRequestException('Cannot send friend request to yourself');
    }

    const id = `freq_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const request = {
      id,
      senderId,
      receiverId,
      status: FriendRequestStatus.PENDING,
      createdAt: new Date(),
    };

    this.friendRequests.set(id, request);
    return request;
  }

  async respondFriendRequest(requestId: string, status: FriendRequestStatus) {
    const request = this.friendRequests.get(requestId);
    if (!request) {
      throw new NotFoundException('Friend request not found');
    }

    request.status = status;

    if (status === FriendRequestStatus.ACCEPTED) {
      if (!this.friendships.has(request.senderId)) {
        this.friendships.set(request.senderId, new Set());
      }
      if (!this.friendships.has(request.receiverId)) {
        this.friendships.set(request.receiverId, new Set());
      }

      this.friendships.get(request.senderId)!.add(request.receiverId);
      this.friendships.get(request.receiverId)!.add(request.senderId);
    }

    return request;
  }

  async getFriendsList(playerId: string) {
    const friendIds = Array.from(this.friendships.get(playerId) || []);
    return friendIds.map((id) => ({
      playerId: id,
      username: `Player_${id.substr(0, 6)}`,
      status: 'ONLINE',
    }));
  }
}
