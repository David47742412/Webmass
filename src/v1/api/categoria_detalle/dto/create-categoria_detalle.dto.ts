import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Categoria_DetalleInterface } from "src/v1/api/categoria_detalle/entities/categoria_detalle.interface";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { CreateCategoriaDto } from "../../categoria/dto/create-categoria.dto";
import { CreateUsuarioDto } from "../../usuario/dto/create-usuario.dto";

export class CreateCategoriaDetalleDto implements Categoria_DetalleInterface {

  @ApiProperty()

  categoria_detalle_id: number;

  @ApiProperty({ type: CreateCategoriaDto})
  categoria: Categoria;

  @ApiProperty({ type: CreateUsuarioDto})
  usuario: Usuario;

  @ApiProperty()
  usuario_id: number;
  
  @ApiProperty()
  categoria_id: number;

}
