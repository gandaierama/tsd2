import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotoboyService } from './motoboys.service';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';

@Controller('motoboys')
export class MotoboysController {
  constructor(private readonly motoboyService: MotoboyService) {}

  @Post()
  create(@Body() createMotoboyDto: CreateMotoboyDto) {
    return this.motoboyService.create(createMotoboyDto);
  }

  @Get()
  findAll() {
    return this.motoboyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoboyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotoboyDto: UpdateMotoboyDto) {
    return this.motoboyService.update(id, updateMotoboyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoboyService.remove(id);
  }
}
