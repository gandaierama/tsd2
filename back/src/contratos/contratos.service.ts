import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { Contrato } from './entities/contrato.entity';
import { Orden } from '../ordens/entities/orden.entity';
import { OrdenService } from '../ordens/ordens.service';
import { ClienteEntity } from '../cliente/entities/cliente.entity';
import { Valor } from '../valores/entities/valor.entity';

@Injectable()
export class ContratoService {
  constructor(
    @InjectRepository(Contrato)
    private contratoRepository: Repository<Contrato>,
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
    @InjectRepository(Valor)
    private pacoteRepository: Repository<Valor>,
  ) {}



  

  async create(createContratoDto: CreateContratoDto): Promise<Contrato> {


console.log(createContratoDto);
const id=createContratoDto.id_cliente;
const id_pacote=createContratoDto.id_pacote;
const inicio= createContratoDto.start_date;
const fim= createContratoDto.end_date;

    const date1 = new Date(inicio);
const date2 = new Date(fim);
  
  const diaSemana=date1.getDay();


const difTime = date2.getTime() - date1.getTime();

const difDay = difTime / (1000 * 3600 * 24);
  const resCli = await this.clienteRepository.findOne(id);
  const resPac =await this.pacoteRepository.findOne(id_pacote);
console.log(resPac);
    const obje = new Contrato();
    obje.id_cliente = id;
    obje.cliente = resCli.name;
    obje.id_pacote = createContratoDto.id_pacote;
    obje.start_date = date1;
    obje.end_date = date2;
    let i =0;
    const diasSemana= [JSON.parse(resPac.segunda), JSON.parse(resPac.terca), resPac.quarta, resPac.quinta, resPac.sexta, resPac.sabado, resPac.domingo];
    for (i; difDay > i; i++) {
      var d = new Date();
      d.setDate(date1.getDate()+i);
      console.log(JSON.stringify(diasSemana[d.getDay()]));
      // var configDia=JSON.parse(JSON.stringify(diasSemana[d.getDay()+1]);
      // if(configDia.motoboys > 0){
      //   const obje2 = new Orden();
      //   obje2.id_cliente = createContratoDto.id_cliente;
      //   obje2.id_pacote = createContratoDto.id_pacote;
      //   obje2.cliente = resCli.name;
      //   obje2.inicio = d;
      //   obje2.motoboys=configDia.motoboys;
      //   await this.ordenRepository.save(obje2);
      // }
      
    }

    return this.contratoRepository.save(obje);
  }

  update(id: string, updateContratoDto: UpdateContratoDto) {
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
