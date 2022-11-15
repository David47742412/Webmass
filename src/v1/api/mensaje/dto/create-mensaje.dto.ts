import { ApiProperty } from "@nestjs/swagger";
import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";
import { MensajeInterface } from "../entities/mensaje.interface";

export class CreateMensajeDto implements MensajeInterface {
    
    @ApiProperty()
    mensaje_id: number;

    @ApiProperty()
    mensaje_contenido: string;

    @ApiProperty()
    mensaje_create: string;

    @ApiProperty()
    mensaje_update: string;

    @ApiProperty()
    mensaje_detalle: MensajeDetalle[];
}
