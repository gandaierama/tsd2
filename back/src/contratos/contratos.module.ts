import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { Contrato } from './entities/contrato.entity';

@Module({
  controllers: [ContratosController],
  providers: [ContratoService]
})
export class ContratosModule {}
