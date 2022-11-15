import { Injectable } from '@nestjs/common';
import { CreateMensajeDetalleDto } from './dto/create-mensaje_detalle.dto';
import { UpdateMensajeDetalleDto } from './dto/update-mensaje_detalle.dto';
import { mensaje_detalleModel } from './model/mensaje_detalle.model';

@Injectable()
export class MensajeDetalleService {

  constructor(private model: mensaje_detalleModel) {}

  create(createMensajeDetalleDto: CreateMensajeDetalleDto) {
    return this.model.insert(createMensajeDetalleDto)
  }

  findAll() {
    return this.model.findAll()
  }

  findOne(id: number) {
    return this.model.findOne(id)
  }

  update(id: number, updateMensajeDetalleDto: UpdateMensajeDetalleDto) {
    return this.model.update(id, updateMensajeDetalleDto)
  }

  remove(id: number) {
    return this.model.remove(id)
  }
}
