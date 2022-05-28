import { Module } from '@nestjs/common';
import { OrdensService } from './ordens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdensController } from './ordens.controller';
import { OrdensEntity } from './entities/orden.entity';
@Module({
  controllers: [OrdensController],
  providers: [OrdensService]
})
export class OrdensModule {}
