import { ApiProperty } from "@nestjs/swagger";
import { CategoriaInterface } from "../entities/categoria.interface";
import { IsNotEmpty } from "class-validator";
import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";

export class CreateCategoriaDto implements CategoriaInterface {

  @ApiProperty()
  categoria_id: number;

  @ApiProperty()
  categoria_nombre: string;

  @ApiProperty()
  categoria_tipo: string;

  @ApiProperty()
  categoriadetalle: CategoriaDetalle;

  @ApiProperty({ type: "datetime" ,default:"CURRENT_TIMESTAMP" })
  categoria_create: string;
  
  @ApiProperty({ type: "datetime" ,default:"CURRENT_TIMESTAMP" })
  categoria_update: string;

}
