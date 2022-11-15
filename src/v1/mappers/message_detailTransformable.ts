import { MapperTransformer } from "./tramsformable";
import { CreateMensajeDetalleDto } from "../api/mensaje_detalle/dto/create-mensaje_detalle.dto";
import { MensajeDetalleInterface } from "../api/mensaje_detalle/entities/mensaje_detalle.interface";

export class Message_detailTransformable implements MapperTransformer <CreateMensajeDetalleDto, MensajeDetalleInterface> {
    transform(mensaje_detalle: CreateMensajeDetalleDto): MensajeDetalleInterface {
        return {
            mensaje_detalle_id: mensaje_detalle.mensaje_detalle_id,
            mensajeMensajeId: mensaje_detalle.mensajeMensajeId,
            usuarioUsuarioId: mensaje_detalle.usuarioUsuarioId,
            usuario: mensaje_detalle.usuario,
            mensaje: mensaje_detalle.mensaje
        }
    }
}