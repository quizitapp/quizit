import {
  CallHandler,
  Controller,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/db/entities/User';
import { Crud, CrudController } from '@nestjs-library/crud';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}

@Crud({
  entity: User,
  routes: {
    readMany: {
      interceptors: [LoggingInterceptor],
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public readonly crudService: UsersService) {}
}
