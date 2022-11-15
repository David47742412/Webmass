import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";

export interface MensajeInterface {
    
    mensaje_id: number;

    mensaje_contenido: string;

    mensaje_create: string;

    mensaje_update: string;

    mensaje_detalle: MensajeDetalle[];
}