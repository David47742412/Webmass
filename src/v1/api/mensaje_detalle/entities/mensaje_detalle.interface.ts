import { Mensaje } from "../../mensaje/entities/mensaje.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


export interface MensajeDetalleInterface {
    mensaje_detalle_id: number;

    mensajeMensajeId: number;

    usuarioUsuarioId: number;

    usuario: Usuario[];

    mensaje: Mensaje[];
}