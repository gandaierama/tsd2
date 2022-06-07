import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.senha, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}