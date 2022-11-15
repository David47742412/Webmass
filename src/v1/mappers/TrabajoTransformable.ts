import { MapperTransformer } from './tramsformable';
import { CreateTrabajoDto } from '../api/trabajo/dto/create-trabajo.dto';
import { Trabajo } from '../api/trabajo/entities/trabajo.entity';

export class trabajoTransformable implements MapperTransformer<CreateTrabajoDto, Trabajo> {
    transform(trabajo: CreateTrabajoDto): Trabajo {
        return {
            trabajo_id: trabajo.trabajo_id,
            trabajo_nombre: trabajo.trabajo_nombre,
            trabajo_tipo: trabajo.trabajo_tipo,
            trabajo_fecha_encuentro: trabajo.trabajo_fecha_encuentro,
            trabajo_hora_encuentro: trabajo.trabajo_hora_encuentro,
            trabajo_direccion: trabajo.trabajo_direccion,
            trabajo_descripcion: trabajo.trabajo_descripcion,
            trabajo_precio: trabajo.trabajo_precio,
            trabajo_horario: trabajo.trabajo_horario,
            trabajo_estado: trabajo.trabajo_estado,
            trabajo_detalle_id: trabajo.trabajo_detalle_id
        }
    }
}