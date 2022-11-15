
import { ApiProperty } from "@nestjs/swagger";
import { UsuarioInterface } from "../entities/usuario.interface";
import { IsNotEmpty } from "class-validator";
import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";
import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";
import { Pais } from "../../pais/entities/pais.entity";
import { CreateTrabajoDetalleDto } from "../../trabajo_detalle/dto/create-trabajo_detalle.dto";
import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";


export class CreateUsuarioDto implements UsuarioInterface {
  
  @ApiProperty()
  usuario_create: string;
  
  @ApiProperty()
  usuario_token: string;
  
  @ApiProperty()
  usuario_update: string;

  @ApiProperty()
  usuario_id: number;

  @ApiProperty()
  usuario_foto: string;

  @ApiProperty()
  usuario_dni: string;

  @ApiProperty()
  usuario_nombre: string;

  @ApiProperty()
  usuario_apellido: string;

  @ApiProperty()
  usuario_numero_telefono: string;

  @ApiProperty()
  @IsNotEmpty()
  usuario_email: string;

  @ApiProperty()
  @IsNotEmpty()
  usuario_password: string;

  @ApiProperty()
  usuario_latitud: number;

  @ApiProperty()
  usuario_longitud: number;

  @ApiProperty({type: CategoriaDetalle})
  categoriadetalle: CategoriaDetalle[];

  @ApiProperty({type: CreateTrabajoDetalleDto})
  trabajo_detalle_id: TrabajoDetalle[];

  @ApiProperty()
  pais: Pais[];

  @ApiProperty()
  mensaje_detalle: MensajeDetalle[];

}
