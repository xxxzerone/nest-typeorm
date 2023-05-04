import { DataSource } from 'typeorm';
import config from 'config';
import { ChannelChats } from './src/entities/ChannelChats.entity';
import { ChannelMembers } from './src/entities/ChannelMembers.entity';
import { Channels } from './src/entities/Channels.entity';
import { DMs } from './src/entities/DMs.entity';
import { Mentions } from './src/entities/Mentions.entity';
import { Users } from './src/entities/Users.entity';
import { WorkspaceMembers } from './src/entities/WorkspaceMembers.entity';
import { Workspaces } from './src/entities/Workspaces.entity';

const dbConfig = config.get('db');

const dataSource = new DataSource({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DATABASE || dbConfig.database,
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
  migrations: [__dirname + '/src/database/migrations/*.ts'],
  charset: 'utf8mb4_unicode_ci',
  synchronize: false,
  logging: true,
});

export default dataSource;
