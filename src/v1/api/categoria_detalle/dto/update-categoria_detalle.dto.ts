import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaDetalleDto } from './create-categoria_detalle.dto';

export class UpdateCategoriaDetalleDto extends PartialType(OmitType(CreateCategoriaDetalleDto, ['categoria_detalle_id'] as const)) {
}
