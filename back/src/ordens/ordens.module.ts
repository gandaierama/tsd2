import { Module } from '@nestjs/common';
import { OrdenService } from './ordens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdensController } from './ordens.controller';
import { Orden } from './entities/orden.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Orden])],
  controllers: [OrdensController],
  providers: [OrdenService],
  exports: [OrdenService],
})
export class OrdensModule {}
