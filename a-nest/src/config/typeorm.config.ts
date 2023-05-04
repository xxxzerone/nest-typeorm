import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';
import { ChannelChats } from '../entities/ChannelChats.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';
import { Channels } from '../entities/Channels.entity';
import { DMs } from '../entities/DMs.entity';
import { Mentions } from '../entities/Mentions.entity';
import { Users } from '../entities/Users.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { Workspaces } from '../entities/Workspaces.entity';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DATABASE || dbConfig.database,
  synchronize: dbConfig.synchronize,
  entities: [
    ChannelChats,
    ChannelMembers,
    Channels,
    DMs,
    Mentions,
    Users,
    WorkspaceMembers,
    Workspaces,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  charset: 'utf8mb4_unicode_ci',
  logging: true,
};
