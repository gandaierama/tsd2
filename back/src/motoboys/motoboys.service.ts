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


  

  create(createMotoboyDto: CreateMotoboyDto): Promise<Motoboy> {
    const obje = new Motoboy();
    obje.name = createMotoboyDto.name;


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
