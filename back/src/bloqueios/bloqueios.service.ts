import { Injectable } from '@nestjs/common';
import { CreateBloqueioDto } from './dto/create-bloqueio.dto';
import { UpdateBloqueioDto } from './dto/update-bloqueio.dto';

@Injectable()
export class BloqueiosService {
  create(createBloqueioDto: CreateBloqueioDto) {
    return 'This action adds a new bloqueio';
  }

  findAll() {
    return `This action returns all bloqueios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloqueio`;
  }

  update(id: number, updateBloqueioDto: UpdateBloqueioDto) {
    return `This action updates a #${id} bloqueio`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloqueio`;
  }
}
