import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMensajeDto } from './create-mensaje.dto';

export class UpdateMensajeDto extends PartialType(OmitType(CreateMensajeDto, ['mensaje_id'] as const)) {
    mensaje_contenido: string;
}
