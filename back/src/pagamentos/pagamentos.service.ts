import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';


@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ) {}


  

  create(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
    const obje = new Pagamento();
    obje.name = createPagamentoDto.name;


    return this.pagamentoRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdatePagamentoDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.find();
  }

  findOne(id: string): Promise<Pagamento> {
    return this.pagamentoRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pagamentoRepository.delete(id);
  }
}
