import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UserTrasnformable } from "../../../mappers/UserTrasnformable";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";
import { IdinvalidoExpeption } from "../../../Errors/Idinvalido.expeption";
import { UtilityService } from "../../../Servicios/utility.service";
import { hash } from "bcrypt";


@Injectable({ scope: Scope.REQUEST })
export class UsuarioModel {
  private transform = new UserTrasnformable();

  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
    private utility:UtilityService
  ) {
  }



  public async insert(usuario: CreateUsuarioDto) {
    try {
      await  this.validarcamposinsert(usuario);
      const user = this.transform.transform(usuario);
      user.categoriadetalle = undefined;
      user.trabajo_detalle_id = undefined;
      user.pais = undefined;
      user.mensaje_detalle = undefined;
      const respuesta = await this.usersRepository.insert(user);
      return await this.usersRepository.findOne({
        where: { usuario_id: respuesta.identifiers[0].usuario_id }
      });
    } catch (e) {
      throw  new IdinvalidoExpeption();
    }
  }

  public async validarcamposinsert(usuario: CreateUsuarioDto){
    usuario.usuario_id=undefined;
    usuario.usuario_create=this.utility.obtenerfechaactual();
    usuario.usuario_update=this.utility.obtenerfechaactual();
    usuario.usuario_password= await hash(usuario.usuario_password,10);
    usuario.usuario_token=await this.utility.obtenertoken({
      usuario_email: usuario.usuario_email,
      usuario_password: usuario.usuario_password
    });
  }


  public async update(id: number, usuario: UpdateUsuarioDto) {
    const user = this.transform.transform(usuario as CreateUsuarioDto);
    return await this.usersRepository.update({ usuario_id: id }, user);
  }

  public async findAll() {
    return this.usersRepository.find();
  }

  public async findOne(id: number) {
    return this.usersRepository.findOne({ where: { usuario_id: id } });
  }

  remove(id: number) {
    return this.usersRepository.delete({ usuario_id: id });
  }
}
