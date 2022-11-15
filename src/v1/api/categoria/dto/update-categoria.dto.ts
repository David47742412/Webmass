import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(OmitType(CreateCategoriaDto, ['categoria_id'] as const)) {
    categoria_nombre: string;

    categoria_tipo: string;
}
