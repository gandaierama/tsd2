import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { Contrato } from './entities/contrato.entity';
import { EntregasModule } from '../entregas/entregas.module';
import { OrdensModule } from '../ordens/ordens.module';
import { OrdenService } from '../ordens/ordens.service';
import { Orden } from '../ordens/entities/orden.entity';
import { ClienteEntity } from '../cliente/entities/cliente.entity';
import { Valor } from '../valores/entities/valor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Contrato, Orden, ClienteEntity, Valor]), EntregasModule, OrdensModule ],
  controllers: [ContratosController],
  providers: [ContratoService, OrdenService]
})
export class ContratosModule {}
