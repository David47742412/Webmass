import { ApiProperty } from "@nestjs/swagger";
import { CreatePaisDto } from "../../pais/dto/create-pais.dto";
import { Pais } from "../../pais/entities/pais.entity";
import { MonedaInterface } from "../entities/moneda.interface";

export class CreateMonedaDto implements MonedaInterface {
    
    @ApiProperty()
    moneda_id: number;

    @ApiProperty()
    moneda_nombre: string;

    @ApiProperty()
    moneda_valor: number;

    @ApiProperty()
    paisPaisId: number;

    @ApiProperty({type: CreatePaisDto})
    pais: Pais;

}
