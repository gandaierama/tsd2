import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginMotoboyDto } from './dto/login-motoboy.dto';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { Motoboy } from './entities/motoboy.entity';


@Injectable()
export class MotoboyService {
  constructor(
    @InjectRepository(Motoboy)
    private motoboyRepository: Repository<Motoboy>,
  ) {}


  private readonly logger = new Logger(MotoboyService.name);
  private readonly loggerC = new Logger("CRON");

  async login(loginMotoboyDto: LoginMotoboyDto){

      console.log("DTO", loginMotoboyDto.senha);
      this.logger.log(loginMotoboyDto.senha);
      const email = loginMotoboyDto.email;
      const senha = loginMotoboyDto.senha;
      const user = await this.motoboyRepository.find({ where: { email } });
      console.log("USER", user);
      if(user!==null){
          console.log("USER", user[0].senha);
          return user;

          if (senha===user[0].senha) {
            return user;
          } 

          return false;
        
      }
      return null;
 
  }
  

  create(createMotoboyDto: CreateMotoboyDto): Promise<Motoboy> {

    console.log("Req",createMotoboyDto);
    const obje = new Motoboy();
    obje.name = createMotoboyDto.name;

    obje.email = createMotoboyDto.email;
    obje.telefone = createMotoboyDto.telefone;
    obje.senha = createMotoboyDto.senha;
    obje.cpf = createMotoboyDto.cpf;
    obje.rg = createMotoboyDto.rg;
    obje.endereco = createMotoboyDto.endereco;
    obje.numero = createMotoboyDto.numero;
    obje.complemento = createMotoboyDto.complemento;
    obje.cep = createMotoboyDto.cep;
    obje.cidade = createMotoboyDto.cidade;
    obje.estado = createMotoboyDto.estado;
    obje.bairro = createMotoboyDto.bairro;

    obje.cnh = createMotoboyDto.cnh;
    obje.placa = createMotoboyDto.placa;

    obje.banco = createMotoboyDto.banco;
    obje.agencia = createMotoboyDto.agencia;
    obje.conta = createMotoboyDto.conta;
    obje.chave_pix = createMotoboyDto.chave_pix;

    obje.valor_entrega = createMotoboyDto.valor_entrega;
    obje.valor_diaria = createMotoboyDto.valor_diaria;

    console.log("Objeto",obje);
    return this.motoboyRepository.save(obje);
  }

    async update(id: string, updateOrdemDto: UpdateMotoboyDto) {

    // Update
    await this.motoboyRepository.update(id, {
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
    return this.motoboyRepository.findOneOrFail(id);
  }

  findAll(): Promise<Motoboy[]> {
    return this.motoboyRepository.find();
  }

  findOne(id: string): Promise<Motoboy> {
    return this.motoboyRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.motoboyRepository.delete(id);
  }
}
