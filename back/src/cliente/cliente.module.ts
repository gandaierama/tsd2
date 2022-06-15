import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteEntity } from './entities/cliente.entity';
import { JwtStrategy } from '../auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
	imports: [TypeOrmModule.forFeature([ClienteEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
    ],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService, JwtStrategy]
})
export class ClienteModule {}
