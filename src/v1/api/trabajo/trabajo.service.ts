import { Injectable } from '@nestjs/common';
import { CreateTrabajoDto } from './dto/create-trabajo.dto';
import { UpdateTrabajoDto } from './dto/update-trabajo.dto';
import { TrabajoModel } from './model/trabajo.model';

@Injectable()
export class TrabajoService {

  constructor(private model: TrabajoModel) {

  }

  create(createTrabajoDto: CreateTrabajoDto) {
    return this.model.insert(createTrabajoDto)
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updateTrabajoDto: UpdateTrabajoDto) {
    return this.model.update(id, updateTrabajoDto)
  }

  remove(id: number) {
    return this.model.remove(id);
  }
}
