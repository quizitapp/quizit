import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'src/db/ormconfig';
import { UsersModule } from 'src/features/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
