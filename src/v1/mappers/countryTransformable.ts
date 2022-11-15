import { MapperTransformer } from "./tramsformable";
import { CreatePaisDto } from "../api/pais/dto/create-pais.dto";
import { Pais } from "../api/pais/entities/pais.entity";
import { Usuario } from "../api/usuario/entities/usuario.entity";
import { Moneda } from "../api/moneda/entities/moneda.entity";

export class CountryTransformable implements MapperTransformer <CreatePaisDto, Pais> {
    transform(pais: CreatePaisDto): Pais {
        return {
            pais_id: pais.pais_id,
            pais_nombre: pais.pais_nombre,
            pais_code: pais.pais_code,
            usuario: pais.usuario,
            usuarioUsuarioId: pais.usuarioUsuarioId,
            moneda: pais.moneda
        }
    }
}