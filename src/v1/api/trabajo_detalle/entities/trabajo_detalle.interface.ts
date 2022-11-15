import { Trabajo } from "../../trabajo/entities/trabajo.entity"; 
import { Usuario } from "../../usuario/entities/usuario.entity";


export class trabajo_DetalleInterface {
    
    trabajo_detalle_id: number;

    trabajoTrabajoId: number;
    
    usuarioUsuarioId: number;

    trabajo: Trabajo;

    usuario: Usuario;

}
