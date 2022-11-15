import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { paisInterface } from "../entities/pais.interface";
import { Moneda } from "../../moneda/entities/moneda.entity";

export class CreatePaisDto implements paisInterface {
    @ApiProperty()
    pais_code: string;
    
    @ApiProperty()
    pais_id: number;

    @ApiProperty()
    pais_nombre: string;

    @ApiProperty()
    usuario: Usuario;

    @ApiProperty()
    usuarioUsuarioId: number;

    @ApiProperty()
    moneda: Moneda;

}
