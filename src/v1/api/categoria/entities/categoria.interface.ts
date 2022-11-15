import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";

export interface CategoriaInterface {
  categoria_id: number;

  categoria_nombre: string;

  categoria_tipo: string;

  categoriadetalle:CategoriaDetalle;

  categoria_create:string;

  categoria_update:string;

}
