import { Module } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';
import { PagamentosController } from './pagamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentosEntity } from './entities/pagamentos.entity';
@Module({
  controllers: [PagamentosController],
  providers: [PagamentosService]
})
export class PagamentosModule {}
