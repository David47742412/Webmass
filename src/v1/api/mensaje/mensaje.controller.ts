import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from 'src/v1/Guard/api.guard';

@ApiBearerAuth()
@ApiTags('Mensaje')
@UseGuards(ApiGuard)
@Controller('api/mensaje')
export class MensajeController {
  constructor(private readonly mensajeService: MensajeService) {}


  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto) {
    return this.mensajeService.create(createMensajeDto);
  }


  @Get()
  findAll() {
    return this.mensajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensajeDto: UpdateMensajeDto) {
    return this.mensajeService.update(+id, updateMensajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensajeService.remove(+id);
  }
}
