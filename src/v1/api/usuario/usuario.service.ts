
import { Injectable } from "@nestjs/common";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { UsuarioModel } from "./model/usuario.model";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";

@Injectable()
export class UsuarioService {


  constructor(
    private model: UsuarioModel
  ) {
  }

  create(createUsuarioDto: CreateUsuarioDto) {

    return this.model.insert(createUsuarioDto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.model.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.model.remove(id);
  }
}
