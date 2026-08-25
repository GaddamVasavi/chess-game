import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Admin Dashboard')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('health')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get system health status, DB/Redis connections, and live metrics' })
  async getSystemHealth() {
    return this.adminService.getSystemHealth();
  }

  @Get('active-games')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Monitor live active games' })
  async getActiveGames() {
    return this.adminService.getActiveGames();
  }

  @Get('audit-logs')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Fetch security audit logs' })
  async getAuditLogs() {
    return this.adminService.getAuditLogs();
  }
}
