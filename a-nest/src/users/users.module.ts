import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, WorkspaceMembers, ChannelMembers]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
