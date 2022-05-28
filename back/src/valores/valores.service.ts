import { Injectable } from '@nestjs/common';
import { CreateValoreDto } from './dto/create-valore.dto';
import { UpdateValoreDto } from './dto/update-valore.dto';

@Injectable()
export class ValoresService {
  create(createValoreDto: CreateValoreDto) {
    return 'This action adds a new valore';
  }

  findAll() {
    return `This action returns all valores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valore`;
  }

  update(id: number, updateValoreDto: UpdateValoreDto) {
    return `This action updates a #${id} valore`;
  }

  remove(id: number) {
    return `This action removes a #${id} valore`;
  }
}
