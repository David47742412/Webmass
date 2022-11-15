import { Injectable } from '@nestjs/common';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { MonedaModel } from './model/moneda.model';

@Injectable()
export class MonedaService {

  constructor(
    private model: MonedaModel
  ) {
  }

  create(createMonedaDto: CreateMonedaDto) {
    return this.model.insert(createMonedaDto)
  }

  findAll() {
    return this.model.findAll()
  }

  findOne(id: number) {
    return this.model.findOne(id)
  }

  update(id: number, updateMonedaDto: UpdateMonedaDto) {
    return this.model.update(id, updateMonedaDto)
  }

  remove(id: number) {
    return this.model.remove(id)
  }
}
