import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from './entities/orden.entity';


@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
  ) {}


  

  create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    const obje = new Orden();
    obje.id_cliente = createOrdenDto.id_cliente;


    return this.ordenRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateOrdenDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Orden[]> {
    return this.ordenRepository.find();
  }

  findOne(id: string): Promise<Orden> {
    return this.ordenRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ordenRepository.delete(id);
  }
}
