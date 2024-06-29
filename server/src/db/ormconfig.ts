import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Env from 'src/shared/services/Env';
const shouldSynchronizeDb = Env.TYPEORM_SYNCHRONIZE;
const notInTestEnv = Env.NODE_ENV !== 'test';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  logging: Env.IS_DEV_ENV,
  host: Env.DB_HOST,
  port: Number(Env.DB_PORT),
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_DATABASE,
  synchronize: notInTestEnv && shouldSynchronizeDb,
  entities: [__dirname + '/entities/*.js'],
  migrations: [__dirname + '/migrations/*.ts'],
};

export default ormconfig;
