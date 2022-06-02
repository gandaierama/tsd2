import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { Contrato } from './entities/contrato.entity';


@Injectable()
export class ContratoService {
  constructor(
    @InjectRepository(Contrato)
    private contratoRepository: Repository<Contrato>,
  ) {}



  

  create(createContratoDto: CreateContratoDto): Promise<Contrato> {
    const obje = new Contrato();
    obje.name = createContratoDto.name;


    return this.contratoRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateContratoDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find();
  }

  findOne(id: string): Promise<Contrato> {
    return this.contratoRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contratoRepository.delete(id);
  }
}
