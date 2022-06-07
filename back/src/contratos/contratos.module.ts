import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { Contrato } from './entities/contrato.entity';
import { EntregasModule } from '../entregas/entregas.module';
import { OrdensModule } from '../ordens/ordens.module';
@Module({
  imports: [TypeOrmModule.forFeature([Contrato]), EntregasModule, OrdensModule ],
  controllers: [ContratosController],
  providers: [ContratoService]
})
export class ContratosModule {}
