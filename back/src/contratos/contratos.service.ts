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

const inicio= createContratoDto.inicio;
const fim= createContratoDto.fim;

    const date1 = new Date(inicio);
const date2 = new Date(fim);
  
  const diaSemana=date1.getDay();

const difTime = date2.getTime() - date1.getTime();

const difDay = difTime / (1000 * 3600 * 24);
  
console.log(difDay);
    const obje = new Contrato();
    obje.id_cliente = createContratoDto.id_cliente;
    obje.pacote = createContratoDto.pacote;
    obje.inicio = createContratoDto.inicio;
    obje.fim = createContratoDto.fim;

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
