import { Module } from '@nestjs/common';
import { MotoboysService } from './motoboys.service';
import { MotoboysController } from './motoboys.controller';

@Module({
  controllers: [MotoboysController],
  providers: [MotoboysService]
})
export class MotoboysModule {}
