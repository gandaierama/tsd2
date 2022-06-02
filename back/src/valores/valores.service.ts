import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateValorDto } from './dto/create-valore.dto';
import { UpdateValorDto } from './dto/update-valore.dto';
import { Valor } from './entities/valor.entity';


@Injectable()
export class ValoresService {
  constructor(
    @InjectRepository(Valor)
    private valorRepository: Repository<Valor>,
  ) {}


  

  create(createValorDto: CreateValorDto): Promise<Valor> {
    const obje = new Valor();
    obje.name = createValorDto.name;


    return this.valorRepository.save(obje);
  }

  update(id: string, updateValorDto: UpdateValorDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Valor[]> {
    return this.valorRepository.find();
  }

  findOne(id: string): Promise<Valor> {
    return this.valorRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.valorRepository.delete(id);
  }
}
