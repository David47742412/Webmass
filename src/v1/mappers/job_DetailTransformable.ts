import { MapperTransformer } from "./tramsformable";
import { CreateTrabajoDetalleDto } from "../api/trabajo_detalle/dto/create-trabajo_detalle.dto";
import { TrabajoDetalle } from "../api/trabajo_detalle/entities/trabajo_detalle.entity";

export class trabajo_detalleTransformable implements MapperTransformer<CreateTrabajoDetalleDto, TrabajoDetalle> {
    transform(trabajo_detalle: CreateTrabajoDetalleDto): TrabajoDetalle {
        return {
            trabajo_detalle_id: trabajo_detalle.trabajo_detalle_id,
            trabajo: trabajo_detalle.trabajo,
            usuario: trabajo_detalle.usuario,
            trabajoTrabajoId: trabajo_detalle.trabajoTrabajoId,
            usuarioUsuarioId: trabajo_detalle.usuarioUsuarioId
        }
    }
}