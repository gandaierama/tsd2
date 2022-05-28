import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotoboysService } from './motoboys.service';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';

@Controller('motoboys')
export class MotoboysController {
  constructor(private readonly motoboysService: MotoboysService) {}

  @Post()
  create(@Body() createMotoboyDto: CreateMotoboyDto) {
    return this.motoboysService.create(createMotoboyDto);
  }

  @Get()
  findAll() {
    return this.motoboysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoboysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotoboyDto: UpdateMotoboyDto) {
    return this.motoboysService.update(+id, updateMotoboyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoboysService.remove(+id);
  }
}
