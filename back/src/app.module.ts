import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import {ClienteEntity } from './cliente/entities/cliente.entity';
import {User } from './users/entities/user.entity';
@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user_test',
      password: 'test',
      database: 'db_main',
      entities: [ClienteEntity, User],
      synchronize: true,
    }),
  AuthModule, UsersModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
