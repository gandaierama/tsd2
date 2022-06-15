import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoboyService } from './motoboys.service';
import { MotoboysController } from './motoboys.controller';
import { Motoboy } from './entities/motoboy.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [TypeOrmModule.forFeature([Motoboy]),
  PassportModule,
  JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [MotoboysController],
  providers: [MotoboyService]
})
export class MotoboysModule {}
