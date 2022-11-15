import { ApiProperty } from "@nestjs/swagger";
import { Mensaje } from "../../mensaje/entities/mensaje.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { MensajeDetalleInterface } from "../entities/mensaje_detalle.interface";


export class CreateMensajeDetalleDto implements MensajeDetalleInterface {
    @ApiProperty()
    mensaje_detalle_id: number;

    @ApiProperty()
    mensajeMensajeId: number;

    @ApiProperty()
    usuarioUsuarioId: number;

    @ApiProperty()
    usuario: Usuario[];

    @ApiProperty()
    mensaje: Mensaje[];
}
