import { Module } from '@nestjs/common';
import { ValoresService } from './valores.service';
import { ValoresController } from './valores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValoresEntity } from './entities/valore.entity';
@Module({
  controllers: [ValoresController],
  providers: [ValoresService]
})
export class ValoresModule {}
