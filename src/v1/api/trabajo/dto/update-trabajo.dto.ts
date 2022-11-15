import { PartialType } from '@nestjs/swagger';
import { CreateTrabajoDto } from './create-trabajo.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateTrabajoDto extends PartialType(OmitType( CreateTrabajoDto, ['trabajo_id'] as const )) {
    trabajo_nombre: string;

    trabajo_tipo: string

    trabajo_fecha_encuentro: string;

    trabajo_hora_encuentro: string;

    trabajo_direccion: string;

    trabajo_descripcion: string;

    trabajo_precio: number

    trabajo_horario: string;

    trabajo_estado: string;
}

