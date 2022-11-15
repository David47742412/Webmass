import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMonedaDto } from './create-moneda.dto';

export class UpdateMonedaDto extends PartialType(OmitType(CreateMonedaDto, ['moneda_id'] as const)) {
    
    moneda_nombre: string;

    moneda_valor: number;
}

