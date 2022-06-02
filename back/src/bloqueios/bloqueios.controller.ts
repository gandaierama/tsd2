import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloqueioService } from './bloqueios.service';
import { CreateBloqueioDto } from './dto/create-bloqueio.dto';
import { UpdateBloqueioDto } from './dto/update-bloqueio.dto';

@Controller('bloqueios')
export class BloqueiosController {
  constructor(private readonly bloqueioService: BloqueioService) {}

  @Post()
  create(@Body() createBloqueioDto: CreateBloqueioDto) {
    return this.bloqueioService.create(createBloqueioDto);
  }

  @Get()
  findAll() {
    return this.bloqueioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloqueioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloqueioDto: UpdateBloqueioDto) {
    return this.bloqueioService.update(id, updateBloqueioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloqueioService.remove(id);
  }
}
