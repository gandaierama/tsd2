import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoboysService } from './motoboys.service';
import { MotoboysController } from './motoboys.controller';
import { MotoboysEntity } from './entities/motoboys.entity';
@Module({
  controllers: [MotoboysController],
  providers: [MotoboysService]
})
export class MotoboysModule {}
