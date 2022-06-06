import { Injectable } from '@nestjs/common';
import { ClienteService } from '../cliente/cliente.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from '../login.dto';
import { Repository } from 'typeorm';
import { ClienteEntity } from '../cliente/entities/cliente.entity';
@Injectable()
export class AuthService {
  constructor(
     @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
    private clienteService: ClienteService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.clienteService.findOne(email);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}