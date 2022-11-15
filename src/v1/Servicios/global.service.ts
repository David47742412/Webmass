import {UtilityService} from "./utility.service";
import {UsuarioService} from "../api/usuario/usuario.service";
import {UsuarioModel} from "../api/usuario/model/usuario.model";
import {JwtStrategy} from "../Guard/jwtStrategy.guard";
import {ApiGuard} from "../Guard/api.guard";
import {CategoriaDetalleService} from "../api/categoria_detalle/categoria_detalle.service";
import {Categoria_DetalleModel} from "../api/categoria_detalle/model/categoria_detalle.model";
import {JwtService} from "@nestjs/jwt";
import {TypeOrmConfigService} from "../TypeOrmConfigService";
import {Usuario} from "../api/usuario/entities/usuario.entity";
import {Categoria} from "../api/categoria/entities/categoria.entity";
import {CategoriaDetalle} from "../api/categoria_detalle/entities/categoria_detalle.entity";
import {CategoriaService} from "../api/categoria/categoria.service";
import {CategoriaModel} from "../api/categoria/model/categoria.model";
import { Trabajo } from "../api/trabajo/entities/trabajo.entity";
import { TrabajoDetalle } from "../api/trabajo_detalle/entities/trabajo_detalle.entity";
import { Pais } from "../api/pais/entities/pais.entity";
import { Moneda } from "../api/moneda/entities/moneda.entity";
import { Mensaje } from "../api/mensaje/entities/mensaje.entity";
import { MensajeDetalle } from "../api/mensaje_detalle/entities/mensaje_detalle.entity";
import { MensajeService } from "../api/mensaje/mensaje.service";
import { MensajeModel } from "../api/mensaje/model/mensaje.model";
import { MonedaService } from "../api/moneda/moneda.service";
import { MonedaModel } from "../api/moneda/model/moneda.model";
import { PaisService } from "../api/pais/pais.service";
import { PaisModel } from "../api/pais/model/pais.model";
import { TrabajoService } from "../api/trabajo/trabajo.service";
import { TrabajoModel } from "../api/trabajo/model/trabajo.model";
import { TrabajoDetalleService } from "../api/trabajo_detalle/trabajo_detalle.service";
import { trabajo_detalleModel } from "../api/trabajo_detalle/model/trabajo_detalle.model";
import { MensajeDetalleService } from "../api/mensaje_detalle/mensaje_detalle.service";
import { mensaje_detalleModel } from "../api/mensaje_detalle/model/mensaje_detalle.model";


export const globalService = [
    UsuarioService,
    UsuarioModel,
    JwtStrategy,
    ApiGuard,
    CategoriaDetalleService,
    Categoria_DetalleModel,
    JwtService,
    UtilityService,
    CategoriaService,
    CategoriaModel,
    TypeOrmConfigService,
    MensajeService,
    MensajeModel,
    MonedaService,
    MonedaModel,
    PaisService,
    PaisModel,
    TrabajoService,
    TrabajoModel,
    TrabajoDetalleService,
    trabajo_detalleModel,
    MensajeDetalleService,
    mensaje_detalleModel
];

export const  entities =[
    Usuario,
    Categoria,
    CategoriaDetalle,
    Trabajo,
    TrabajoDetalle,
    Pais,
    Moneda,
    Mensaje,
    MensajeDetalle
];