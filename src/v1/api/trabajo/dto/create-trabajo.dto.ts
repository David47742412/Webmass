import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateTrabajoDetalleDto } from "../../trabajo_detalle/dto/create-trabajo_detalle.dto";
import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";
import { trabajoInterface } from "../entities/trabajo.interface";

export class CreateTrabajoDto implements trabajoInterface {

    @ApiProperty()
    @IsNotEmpty()
    trabajo_id: number;

    @ApiProperty()
    @IsNotEmpty()
    trabajo_nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    trabajo_tipo: string

    @ApiProperty()
    trabajo_fecha_encuentro: string;

    @ApiProperty()
    trabajo_hora_encuentro: string;

    @ApiProperty()
    trabajo_direccion: string;

    @ApiProperty()
    trabajo_descripcion: string;

    @ApiProperty()
    trabajo_precio: number

    @ApiProperty()
    trabajo_horario: string;

    @ApiProperty()
    trabajo_estado: string;
    
    @ApiProperty({type: CreateTrabajoDetalleDto})
    trabajo_detalle_id: TrabajoDetalle

}
