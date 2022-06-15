import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';


@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}


  

  create(createTrackDto: CreateTrackDto): Promise<Track> {
    const obje = new Track();
    obje.id_motoboy = createTrackDto.id_motoboy;
    obje.id_cliente = createTrackDto.id_cliente;
    obje.id_entrega = createTrackDto.id_entrega;
    obje.latitude = createTrackDto.latitude;
    obje.longitude = createTrackDto.longitude;


    return this.trackRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateTrackDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }

  findOne(id: string): Promise<Track> {
    return this.trackRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.trackRepository.delete(id);
  }
}
