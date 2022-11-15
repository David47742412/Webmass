import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";


export interface trabajoInterface {
    
    trabajo_id: number;

    trabajo_nombre: string;

    trabajo_tipo: string;

    trabajo_fecha_encuentro: string;

    trabajo_hora_encuentro: string;

    trabajo_direccion: string;

    trabajo_descripcion: string;

    trabajo_precio: number

    trabajo_horario: string;

    trabajo_estado: string;

    trabajo_detalle_id: TrabajoDetalle;
}