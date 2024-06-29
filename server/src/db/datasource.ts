import Env from '../../../shared/services/Env';
import { DataSource } from 'typeorm';

// This file is only for the typeorm CLI.
export default new DataSource({
  type: 'postgres',
  logging: Env.IS_DEV_ENV,
  host: Env.DB_HOST,
  port: Number(Env.DB_PORT),
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_DATABASE,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
});
