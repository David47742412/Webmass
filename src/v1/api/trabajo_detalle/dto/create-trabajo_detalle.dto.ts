import { ApiProperty } from "@nestjs/swagger";
import { Entity} from "typeorm";
import { CreateTrabajoDto } from "../../trabajo/dto/create-trabajo.dto";
import { Trabajo } from "../../trabajo/entities/trabajo.entity";
import { CreateUsuarioDto } from "../../usuario/dto/create-usuario.dto";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { trabajo_DetalleInterface } from "../entities/trabajo_detalle.interface";

@Entity()
export class CreateTrabajoDetalleDto implements trabajo_DetalleInterface {
    @ApiProperty()
    trabajo_detalle_id: number;
    
    @ApiProperty()
    trabajoTrabajoId: number;

    @ApiProperty()
    usuarioUsuarioId: number;

    @ApiProperty({type: CreateTrabajoDto})
    trabajo: Trabajo;

    @ApiProperty({type: CreateUsuarioDto})
    usuario: Usuario;
}

