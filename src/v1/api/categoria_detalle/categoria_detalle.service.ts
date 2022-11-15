import { Injectable } from '@nestjs/common';
import { Categoria_DetalleModel } from 'src/v1/api/categoria_detalle/model/categoria_detalle.model';
import { CreateCategoriaDetalleDto } from './dto/create-categoria_detalle.dto';
import { UpdateCategoriaDetalleDto } from './dto/update-categoria_detalle.dto';

@Injectable()
export class CategoriaDetalleService {
  constructor(private model: Categoria_DetalleModel) {}

  create(createCategoriaDetalleDto: CreateCategoriaDetalleDto) {
    return this.model.insert(createCategoriaDetalleDto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updateCategoriaDetalleDto: UpdateCategoriaDetalleDto) {
    return this.model.update(id, updateCategoriaDetalleDto);
  }

  remove(id: number) {
    return this.model.remove(id);
  }
}
