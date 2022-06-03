import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloqueioService } from './bloqueios.service';
import { BloqueiosController } from './bloqueios.controller';
import { Bloqueio } from './entities/bloqueio.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Bloqueio])],
  controllers: [BloqueiosController],
  providers: [BloqueioService]
})
export class BloqueiosModule {}
