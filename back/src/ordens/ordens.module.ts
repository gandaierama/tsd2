import { Module } from '@nestjs/common';
import { OrdenService } from './ordens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdensController } from './ordens.controller';
import { Orden } from './entities/orden.entity';
@Module({
  controllers: [OrdensController],
  providers: [OrdenService]
})
export class OrdensModule {}
