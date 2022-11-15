import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TrabajoService } from './trabajo.service';
import { CreateTrabajoDto } from './dto/create-trabajo.dto';
import { UpdateTrabajoDto } from './dto/update-trabajo.dto';

import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { ApiGuard } from 'src/v1/Guard/api.guard';


@ApiBearerAuth()
@UseGuards(ApiGuard)
@ApiTags('Trabajo')
@Controller('api/trabajo')
export class TrabajoController {
  constructor(private readonly trabajoService: TrabajoService) {}

  @Post()
  create(@Body() createTrabajoDto: CreateTrabajoDto) {
    return this.trabajoService.create(createTrabajoDto);
  }

  @Get()
  findAll() {
    return this.trabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrabajoDto: UpdateTrabajoDto) {
    return this.trabajoService.update(+id, updateTrabajoDto);
  }

  @ApiBody({ type: [UpdateTrabajoDto] })
  delete(@Param('id') id: string, @Body() updatetrabajodto: UpdateTrabajoDto) {
    return this.trabajoService.update(+id, updatetrabajodto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trabajoService.remove(+id);
  }
}
