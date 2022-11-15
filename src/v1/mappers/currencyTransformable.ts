import { MapperTransformer } from "./tramsformable";
import { CreateMonedaDto } from "../api/moneda/dto/create-moneda.dto";
import { Moneda } from "../api/moneda/entities/moneda.entity";
import { Pais } from "../api/pais/entities/pais.entity";

export class MonedaTransformable implements MapperTransformer <CreateMonedaDto, Moneda> {
    transform(moneda: CreateMonedaDto): Moneda {
        return {
            moneda_id: moneda.moneda_id,
            moneda_nombre: moneda.moneda_nombre,
            moneda_valor: moneda.moneda_valor,
            pais: moneda.pais,
            paisPaisId: moneda.paisPaisId
        }
    }
}
