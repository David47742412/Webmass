import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MonedaService } from './moneda.service';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from 'src/v1/Guard/api.guard';

@ApiBearerAuth()
@UseGuards(ApiGuard)
@ApiTags('Moneda')
@Controller('api/moneda')
export class MonedaController {
  constructor(private readonly monedaService: MonedaService) {}

  @Post()
  create(@Body() createMonedaDto: CreateMonedaDto) {
    return this.monedaService.create(createMonedaDto);
  }

  @Get()
  findAll() {
    return this.monedaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monedaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonedaDto: UpdateMonedaDto) {
    return this.monedaService.update(+id, updateMonedaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monedaService.remove(+id);
  }
}
