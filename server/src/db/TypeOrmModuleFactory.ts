import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';

const shouldSynchronizeDb = process.env.TYPEORM_SYNCHRONIZE === 'true';
const notInTestEnv = process.env.NODE_ENV !== 'test';

export default {
  create: () =>
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User],
      synchronize: notInTestEnv && shouldSynchronizeDb,
      migrations: ['src/db/migrations/*.ts'],
    }),
};
