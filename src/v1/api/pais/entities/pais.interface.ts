import { Usuario } from "../../usuario/entities/usuario.entity";
import {Moneda} from "../../moneda/entities/moneda.entity";


export interface paisInterface {
    
    pais_id: number;

    pais_nombre: string;

    pais_code: string;

    usuarioUsuarioId: number;
    
    usuario: Usuario;

    moneda: Moneda;
}