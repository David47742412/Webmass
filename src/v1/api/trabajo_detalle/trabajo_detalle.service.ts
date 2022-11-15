import { Injectable } from '@nestjs/common';
import { trabajo_detalleModel } from './model/trabajo_detalle.model';
import { CreateTrabajoDetalleDto } from './dto/create-trabajo_detalle.dto';
import { UpdateTrabajoDetalleDto } from './dto/update-trabajo_detalle.dto';


@Injectable()
export class TrabajoDetalleService {

  constructor(private model: trabajo_detalleModel) {}

  create(createTrabajoDetalleDto: CreateTrabajoDetalleDto) {
    return this.model.insert(createTrabajoDetalleDto)
  }

  findAll() {
    return this.model.findAll()
  }

  findOne(id: number) {
    return this.model.findOne(id)
  }

  update(id: number, updateTrabajoDetalleDto: UpdateTrabajoDetalleDto) {
    return this.model.update(id, updateTrabajoDetalleDto)
  }

  remove(id: number) {
    return this.model.remove(id)
  }
}
