import { Module } from '@nestjs/common';
import { ValoresService } from './valores.service';
import { ValoresController } from './valores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valor } from './entities/valor.entity';
@Module({
  controllers: [ValoresController],
  providers: [ValoresService]
})
export class ValoresModule {}
