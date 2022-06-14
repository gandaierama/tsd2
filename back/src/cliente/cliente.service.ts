import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LoginClienteDto } from './dto/login-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';


@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}


  async login(loginClienteDto: LoginClienteDto){



      const user = await this.clienteRepository.findOne(loginClienteDto.email);
    
      if(user!==null){
        if (loginClienteDto.senha===user.senha) {
          return user;
        }else{
          return false;
        }
      }
 
  }
  

  create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    const obje = new ClienteEntity();
    obje.name = createClienteDto.name;
    obje.email = createClienteDto.email;
    obje.telefone = createClienteDto.telefone;
    obje.senha = createClienteDto.senha;
    obje.cpf = createClienteDto.cpf;
    obje.cnpj = createClienteDto.cnpj;

    return this.clienteRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateClienteDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<ClienteEntity[]> {
    return this.clienteRepository.find();
  }

  findOne(id: string): Promise<ClienteEntity> {
    return this.clienteRepository.findOne(id);
  }

  findEmail(email: string): Promise<ClienteEntity> {
    return this.clienteRepository.findOne(email);
  }

  async remove(id: string): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
