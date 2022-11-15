import { MapperTransformer } from "./tramsformable";
import { CreateMensajeDto } from "../api/mensaje/dto/create-mensaje.dto";
import { MensajeInterface } from "../api/mensaje/entities/mensaje.interface";

export class MessageTransformable implements MapperTransformer <CreateMensajeDto, MensajeInterface> {
    transform(mensaje: CreateMensajeDto): MensajeInterface {
        return {
            mensaje_id: mensaje.mensaje_id,
            mensaje_contenido: mensaje.mensaje_contenido,
            mensaje_create: mensaje.mensaje_create,
            mensaje_update: mensaje.mensaje_update,
            mensaje_detalle: mensaje.mensaje_detalle
        }
    }
}