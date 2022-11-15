import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { TrabajoDetalleService } from './trabajo_detalle.service';
import { CreateTrabajoDetalleDto } from './dto/create-trabajo_detalle.dto';
import { UpdateTrabajoDetalleDto } from './dto/update-trabajo_detalle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from "../../Guard/api.guard";

@ApiBearerAuth()
@ApiTags('Trabajo Detalle')
@UseGuards(ApiGuard)
@Controller('api/trabajo-detalle')
export class TrabajoDetalleController {
  constructor(private readonly trabajoDetalleService: TrabajoDetalleService) {}

  @Post()
  create(@Body() createTrabajoDetalleDto: CreateTrabajoDetalleDto) {
    return this.trabajoDetalleService.create(createTrabajoDetalleDto);
  }

  @Get()
  findAll() {
    return this.trabajoDetalleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trabajoDetalleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrabajoDetalleDto: UpdateTrabajoDetalleDto) {
    return this.trabajoDetalleService.update(+id, updateTrabajoDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trabajoDetalleService.remove(+id);
  }
}
