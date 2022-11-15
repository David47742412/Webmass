import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import {  CategoriaModel } from "./model/categoria.model";

@Injectable()
export class CategoriaService {


  constructor(private model:CategoriaModel) {
  }

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.model.insert(createCategoriaDto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.model.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.model.remove(id);
  }

    createusuarioid(createMensajeDto: CreateCategoriaDto, usuario_id: number) {

    return this.model.createusuarioid(createMensajeDto,usuario_id );
    }
}
