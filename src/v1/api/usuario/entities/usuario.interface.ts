
import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";
import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";
import { Pais } from "../../pais/entities/pais.entity";
import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";


export interface UsuarioInterface {
  
  usuario_id: number;

  usuario_foto: string;

  usuario_dni: string;

  usuario_nombre: string;

  usuario_apellido: string;

  usuario_numero_telefono: string;

  usuario_email: string;
  
  usuario_password: string;

  usuario_latitud: number;

  usuario_longitud: number;


  usuario_create: string;

  usuario_update: string;

  usuario_token: string

  categoriadetalle:CategoriaDetalle[];

  trabajo_detalle_id: TrabajoDetalle[];

  pais: Pais[];

  mensaje_detalle: MensajeDetalle[];

}

