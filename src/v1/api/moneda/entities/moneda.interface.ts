import { Pais } from "../../pais/entities/pais.entity";


export interface MonedaInterface {
    moneda_id: number;

    moneda_nombre: string;

    moneda_valor: number;

    paisPaisId: number;

    pais: Pais;

}