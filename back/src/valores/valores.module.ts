import { Module } from '@nestjs/common';
import { ValoresService } from './valores.service';
import { ValoresController } from './valores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valor } from './entities/valor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Valor])],
  controllers: [ValoresController],
  providers: [ValoresService],
  exports: [ValoresService]
})
export class ValoresModule {}
