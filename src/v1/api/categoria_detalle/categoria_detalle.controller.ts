import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CategoriaDetalleService } from './categoria_detalle.service';
import { CreateCategoriaDetalleDto } from './dto/create-categoria_detalle.dto';
import { UpdateCategoriaDetalleDto } from './dto/update-categoria_detalle.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from 'src/v1/Guard/api.guard';

@ApiBearerAuth()
@UseGuards(ApiGuard)
@ApiTags('Categoria Detalle')
@Controller('api/categoria-detalle')
export class CategoriaDetalleController {

  constructor(
    private readonly categoriaDetalleService: CategoriaDetalleService,
  ) {}

  @Post()
  create(@Body() createCategoriaDetalleDto: CreateCategoriaDetalleDto) {
    return this.categoriaDetalleService.create(createCategoriaDetalleDto);
  }

  @Get()
  findAll() {
    return this.categoriaDetalleService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return this.categoriaDetalleService.findOne(+id);
  }

  @Patch(':id')
    update(@Param('id') id: number, @Body() updateCategoriaDetalleDto: UpdateCategoriaDetalleDto) {
      return this.categoriaDetalleService.update(id, updateCategoriaDetalleDto);
    }
  
  @ApiBody({ type: [UpdateCategoriaDetalleDto] })
  delete(@Param('id') id: string, @Body() updateCategoriaDetalleDto: UpdateCategoriaDetalleDto) {
    return this.categoriaDetalleService.update(+id, updateCategoriaDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaDetalleService.remove(+id);
  }
}
