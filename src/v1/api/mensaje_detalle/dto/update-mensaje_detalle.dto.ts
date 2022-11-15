import { PartialType } from '@nestjs/swagger';
import { CreateMensajeDetalleDto } from './create-mensaje_detalle.dto';

export class UpdateMensajeDetalleDto extends PartialType(CreateMensajeDetalleDto) {}
