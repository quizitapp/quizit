import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypeOrmModuleFactory from '../db/TypeOrmModuleFactory';

@Module({
  imports: [TypeOrmModuleFactory.create()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
