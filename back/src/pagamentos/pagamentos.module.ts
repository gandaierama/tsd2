import { Module } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';
import { PagamentosController } from './pagamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from './entities/pagamento.entity';
@Module({
  controllers: [PagamentosController],
  providers: [PagamentosService]
})
export class PagamentosModule {}
