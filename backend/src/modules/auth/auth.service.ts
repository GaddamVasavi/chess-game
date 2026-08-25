import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // In-memory / mock database store for standalone baseline verification before DB connection
  private users: Map<string, any> = new Map();
  private players: Map<string, any> = new Map();

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, username, password, country } = registerDto;

    // Check email or username uniqueness
    for (const u of this.users.values()) {
      if (u.email === email) {
        throw new ConflictException('Email address already registered');
      }
    }
    for (const p of this.players.values()) {
      if (p.username.toLowerCase() === username.toLowerCase()) {
        throw new ConflictException('Username is already taken');
      }
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const userId = `usr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const playerId = `ply_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

    const user = {
      id: userId,
      email,
      passwordHash,
      role: 'PLAYER',
      isActive: true,
      createdAt: new Date(),
    };

    const player = {
      id: playerId,
      userId,
      username,
      country: country || 'US',
      totalGames: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      xp: 0,
      level: 1,
      createdAt: new Date(),
    };

    this.users.set(userId, user);
    this.players.set(playerId, player);

    const tokens = await this.generateTokens(userId, email, user.role, playerId, username);

    return {
      user: { id: userId, email, role: user.role },
      player,
      tokens,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    let foundUser: any = null;
    for (const u of this.users.values()) {
      if (u.email === email) {
        foundUser = u;
        break;
      }
    }

    if (!foundUser) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, foundUser.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    let foundPlayer: any = null;
    for (const p of this.players.values()) {
      if (p.userId === foundUser.id) {
        foundPlayer = p;
        break;
      }
    }

    const tokens = await this.generateTokens(
      foundUser.id,
      foundUser.email,
      foundUser.role,
      foundPlayer?.id || '',
      foundPlayer?.username || '',
    );

    return {
      user: { id: foundUser.id, email: foundUser.email, role: foundUser.role },
      player: foundPlayer,
      tokens,
    };
  }

  private async generateTokens(
    userId: string,
    email: string,
    role: string,
    playerId: string,
    username: string,
  ) {
    const payload = { sub: userId, email, role, playerId, username };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: 86400,
    };
  }
}
