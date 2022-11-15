import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MensajeDetalleService } from './mensaje_detalle.service';
import { CreateMensajeDetalleDto } from './dto/create-mensaje_detalle.dto';
import { UpdateMensajeDetalleDto } from './dto/update-mensaje_detalle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from 'src/v1/Guard/api.guard';

@ApiBearerAuth()
@ApiTags('Mensaje Detalle')
@UseGuards(ApiGuard)
@Controller('api/mensaje-detalle')
export class MensajeDetalleController {
  constructor(private readonly mensajeDetalleService: MensajeDetalleService) {}

  @Post()
  create(@Body() createMensajeDetalleDto: CreateMensajeDetalleDto) {
    return this.mensajeDetalleService.create(createMensajeDetalleDto);
  }

  @Get()
  findAll() {
    return this.mensajeDetalleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensajeDetalleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensajeDetalleDto: UpdateMensajeDetalleDto) {
    return this.mensajeDetalleService.update(+id, updateMensajeDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensajeDetalleService.remove(+id);
  }
}
