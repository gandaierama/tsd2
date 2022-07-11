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
    obje.status = createValorDto.status;

    obje.diaria1 = createValorDto.diaria1;
    obje.diaria2 = createValorDto.diaria2;
    obje.diaria3 = createValorDto.diaria3;

    obje.entrega1 = createValorDto.entrega1;
    obje.entrega2 = createValorDto.entrega2;
    obje.entrega3 = createValorDto.entrega3;

    obje.segunda = createValorDto.segunda;
    obje.terca = createValorDto.terca;
    obje.quarta = createValorDto.quarta;
    obje.quinta = createValorDto.quinta;
    obje.sexta = createValorDto.sexta;
    obje.sabado = createValorDto.sabado;
    obje.domingo = createValorDto.domingo;



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
