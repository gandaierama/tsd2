import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import {ClienteEntity } from './cliente/entities/cliente.entity';
import {User } from './users/entities/user.entity';
import { MotoboysModule } from './motoboys/motoboys.module';
import { ContratosModule } from './contratos/contratos.module';
import { OrdensModule } from './ordens/ordens.module';
import { EntregasModule } from './entregas/entregas.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { BloqueiosModule } from './bloqueios/bloqueios.module';
import { ValoresModule } from './valores/valores.module';
@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'db_main',
      entities: ["**/*.entity{.ts,.js}", "dist/**/*.entity{.ts,.js}"], 
      synchronize: true,
    }),
  AuthModule, UsersModule, ClienteModule, MotoboysModule, ContratosModule, OrdensModule, EntregasModule, PagamentosModule, BloqueiosModule, ValoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
