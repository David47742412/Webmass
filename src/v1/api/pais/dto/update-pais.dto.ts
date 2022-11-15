import { OmitType, PartialType } from '@nestjs/swagger';
import { CreatePaisDto } from './create-pais.dto';

export class UpdatePaisDto extends PartialType(OmitType(CreatePaisDto, ['pais_id'] as const)) {
    pais_nombre: string;
}
