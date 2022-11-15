import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateTrabajoDetalleDto } from './create-trabajo_detalle.dto';

export class UpdateTrabajoDetalleDto extends PartialType(OmitType(CreateTrabajoDetalleDto, ['trabajo_detalle_id'] as const)) {
}
