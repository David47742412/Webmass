import { Usuario } from "../../usuario/entities/usuario.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";

export interface Categoria_DetalleInterface {

  categoria_detalle_id: number;
  usuario: Usuario;
  categoria: Categoria;
  usuario_id: number;
  categoria_id: number;
}
