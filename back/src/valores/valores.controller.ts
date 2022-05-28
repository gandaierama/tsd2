import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValoresService } from './valores.service';
import { CreateValoreDto } from './dto/create-valore.dto';
import { UpdateValoreDto } from './dto/update-valore.dto';

@Controller('valores')
export class ValoresController {
  constructor(private readonly valoresService: ValoresService) {}

  @Post()
  create(@Body() createValoreDto: CreateValoreDto) {
    return this.valoresService.create(createValoreDto);
  }

  @Get()
  findAll() {
    return this.valoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValoreDto: UpdateValoreDto) {
    return this.valoresService.update(+id, updateValoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valoresService.remove(+id);
  }
}
