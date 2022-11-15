import { Injectable } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';
import { MensajeModel } from './model/mensaje.model';

@Injectable()
export class MensajeService {

  constructor(
    private model: MensajeModel
  ) {
  }

  create(createMensajeDto: CreateMensajeDto) {
    return this.model.insert(createMensajeDto)
  }

  findAll() {
    return this.model.findAll()
  }

  findOne(id: number) {
    return this.model.findOne(id)
  }

  update(id: number, updateMensajeDto: UpdateMensajeDto) {
    return this.model.update(id, updateMensajeDto)
  }

  remove(id: number) {
    return this.model.remove(id)
  }


}
