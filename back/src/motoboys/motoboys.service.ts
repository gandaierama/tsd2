import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { Motoboy } from './entities/motoboy.entity';


@Injectable()
export class MotoboyService {
  constructor(
    @InjectRepository(Motoboy)
    private motoboyRepository: Repository<Motoboy>,
  ) {}


  async login(email: string, senha: string){

      const user = await this.motoboyRepository.findOne(email);

      if(user!==null){
        return user;
        if (senha===user.senha) {
          return user;
        }
      }
 
  }
  
  

  create(createMotoboyDto: CreateMotoboyDto): Promise<Motoboy> {
    const obje = new Motoboy();
    obje.name = createMotoboyDto.name;

    obje.email = createMotoboyDto.email;
    obje.telefone = createMotoboyDto.telefone;
    obje.senha = createMotoboyDto.senha;
    obje.cpf = createMotoboyDto.cpf;
    obje.cnpj = createMotoboyDto.cnpj;
    
    return this.motoboyRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateMotoboyDto) {
    return `This action updates a #${id} ordem`;
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
