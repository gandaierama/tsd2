import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloqueiosService } from './bloqueios.service';
import { CreateBloqueioDto } from './dto/create-bloqueio.dto';
import { UpdateBloqueioDto } from './dto/update-bloqueio.dto';

@Controller('bloqueios')
export class BloqueiosController {
  constructor(private readonly bloqueiosService: BloqueiosService) {}

  @Post()
  create(@Body() createBloqueioDto: CreateBloqueioDto) {
    return this.bloqueiosService.create(createBloqueioDto);
  }

  @Get()
  findAll() {
    return this.bloqueiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloqueiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloqueioDto: UpdateBloqueioDto) {
    return this.bloqueiosService.update(+id, updateBloqueioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloqueiosService.remove(+id);
  }
}
