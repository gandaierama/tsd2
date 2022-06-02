import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBloqueioDto } from './dto/create-bloqueio.dto';
import { UpdateBloqueioDto } from './dto/update-bloqueio.dto';
import { Bloqueio } from './entities/bloqueio.entity';


@Injectable()
export class BloqueioService {
  constructor(
    @InjectRepository(Bloqueio)
    private bloqueioRepository: Repository<Bloqueio>,
  ) {}




  create(createBloqueioDto: CreateBloqueioDto): Promise<Bloqueio> {
    const obje = new Bloqueio();
    obje.name = createBloqueioDto.name;


    return this.bloqueioRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateBloqueioDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Bloqueio[]> {
    return this.bloqueioRepository.find();
  }

  findOne(id: string): Promise<Bloqueio> {
    return this.bloqueioRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.bloqueioRepository.delete(id);
  }
}
