import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaService } from './entregas.service';
import { EntregasController } from './entregas.controller';
import { Entrega } from './entities/entregas.entity';

@Module({
  controllers: [EntregasController],
  providers: [EntregaService]
})
export class EntregasModule {}
