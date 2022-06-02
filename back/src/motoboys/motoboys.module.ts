import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoboyService } from './motoboys.service';
import { MotoboysController } from './motoboys.controller';
import { Motoboy } from './entities/motoboy.entity';
@Module({
  controllers: [MotoboysController],
  providers: [MotoboyService]
})
export class MotoboysModule {}
