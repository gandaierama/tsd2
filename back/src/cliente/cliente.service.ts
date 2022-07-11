import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LoginClienteDto } from './dto/login-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
    private jwtService: JwtService
  ) {}

  private readonly logger = new Logger(ClienteService.name);
  private readonly loggerC = new Logger("CRON");


  async login(loginClienteDto: LoginClienteDto){

      console.log("DTO", loginClienteDto);
      this.logger.log(loginClienteDto.senha);
      const email = loginClienteDto.email;
      const senha = loginClienteDto.senha;
      const user = await this.clienteRepository.findOne({ email });

      if(user!==undefined){
          console.log("USER", user);
          if (loginClienteDto.senha===user.senha) {

            const payload = {id: user.id, email: user.email };
              return {
                access_token: this.jwtService.sign(payload),
                id: user.id
              };

          } 

          return {
                error: "senha errada!",
              };
        
      }
      return {
                error: "usuario não encontrado!",
              };
 
  }
  

  create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    const obje = new ClienteEntity();
    obje.name = createClienteDto.name;
    obje.email = createClienteDto.email;
    obje.telefone = createClienteDto.telefone;
    obje.senha = createClienteDto.senha;
    obje.cpf = createClienteDto.cpf;
    obje.cnpj = createClienteDto.cnpj;
    obje.endereco = createClienteDto.endereco;
    obje.numero = createClienteDto.numero;
    obje.complemento = createClienteDto.complemento;
    obje.bairro = createClienteDto.bairro;
    obje.cidade = createClienteDto.cidade;
    obje.estado = createClienteDto.estado;
    obje.cep = createClienteDto.cep;
    console.log(obje);
    return this.clienteRepository.save(obje);
  }

  async update(id: string, updateOrdemDto: UpdateClienteDto) {

    // Update
    console.log(updateOrdemDto);
    await this.clienteRepository.update(id, {
      ...(updateOrdemDto.name && { name: updateOrdemDto.name }),
      ...(updateOrdemDto.email && { email: updateOrdemDto.email }),
      ...(updateOrdemDto.telefone && { telefone: updateOrdemDto.telefone }),
      ...(updateOrdemDto.senha && { senha: updateOrdemDto.senha }),
      ...(updateOrdemDto.cpf && { cpf: updateOrdemDto.cpf }),
      ...(updateOrdemDto.cnpj && { cnpj: updateOrdemDto.cnpj }),
      ...(updateOrdemDto.endereco && { endereco: updateOrdemDto.endereco }),
      ...(updateOrdemDto.numero && { numero: updateOrdemDto.numero }),
      ...(updateOrdemDto.complemento && { complemento: updateOrdemDto.complemento }),
      ...(updateOrdemDto.bairro && { bairro: updateOrdemDto.bairro }),
      ...(updateOrdemDto.cidade && { cidade: updateOrdemDto.cidade }),
      ...(updateOrdemDto.estado && { estado: updateOrdemDto.estado }),
      ...(updateOrdemDto.cep && { cep: updateOrdemDto.cep })

    });

    // Return
    return this.clienteRepository.findOneOrFail(id);
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
