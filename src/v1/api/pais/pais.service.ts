import { Injectable } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaisModel } from './model/pais.model';

@Injectable()
export class PaisService {

  constructor(
    private model: PaisModel
  ){
  }

  create(createPaisDto: CreatePaisDto) {
    return this.model.insert(createPaisDto)
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updatePaisDto: UpdatePaisDto) {
    return this.model.update(id, updatePaisDto)
  }

  remove(id: number) {
    return this.model.remove(id)
  }
}
