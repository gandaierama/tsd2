import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValoresService } from './valores.service';
import { CreateValorDto } from './dto/create-valore.dto';
import { UpdateValorDto } from './dto/update-valore.dto';

@Controller('valores')
export class ValoresController {
  constructor(private readonly valoresService: ValoresService) {}

  @Post()
  create(@Body() createValorDto: CreateValorDto) {
    return this.valoresService.create(createValorDto);
  }

  @Get()
  findAll() {
    return this.valoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValorDto: UpdateValorDto) {
    return this.valoresService.update(id, updateValorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valoresService.remove(id);
  }
}
