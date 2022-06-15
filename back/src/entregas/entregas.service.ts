import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEntregaDto } from './dto/create-entregas.dto';
import { UpdateEntregaDto } from './dto/update-entregas.dto';
import { Entrega } from './entities/entregas.entity';


@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private entregaRepository: Repository<Entrega>,
  ) {}


  

  create(createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    const obje = new Entrega();
    obje.id_cliente = createEntregaDto.id_cliente;


    return this.entregaRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateEntregaDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Entrega[]> {
    return this.entregaRepository.find();
  }

  findOne(id: string): Promise<Entrega> {
    return this.entregaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.entregaRepository.delete(id);
  }
}
