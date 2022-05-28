import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregasService } from './entregas.service';
import { EntregasController } from './entregas.controller';
import { EntregasEntity } from './entities/entregas.entity';

@Module({
  controllers: [EntregasController],
  providers: [EntregasService]
})
export class EntregasModule {}
