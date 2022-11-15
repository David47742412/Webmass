
import { Global, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./api/usuario/usuario.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration.";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./api/usuario/entities/usuario.entity";
import { CategoriaModule } from "./api/categoria/categoria.module";
import { TrabajoModule } from "./api/trabajo/trabajo.module";
import { enviroments } from "./enviroments";
import { TypeOrmConfigService } from "./TypeOrmConfigService";
import { CategoriaDetalleModule } from "./api/categoria_detalle/categoria_detalle.module";
import { TrabajoDetalleModule } from "./api/trabajo_detalle/trabajo_detalle.module";
import { PaisModule } from "./api/pais/pais.module";
import { MonedaModule } from "./api/moneda/moneda.module";
import { UtilityService } from "./Servicios/utility.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfigService } from "./JwtConfigService";
import { PassportModule } from "@nestjs/passport";
import {MensajeModule} from "./api/mensaje/mensaje.module";
import {MensajeDetalleModule} from "./api/mensaje_detalle/mensaje_detalle.module";


@Global()
@Module({
  imports: [UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: enviroments[process.env.NODE_ENV] || ".env"
    }),
    TypeOrmModule.forRootAsync(
      {
        useClass: TypeOrmConfigService
      }
    ),
    JwtModule.registerAsync({
     useClass: JwtConfigService
    }),
    CategoriaModule,
    TrabajoModule,
    PassportModule,
    CategoriaDetalleModule,
    Usuario,
    TrabajoDetalleModule,
    PaisModule,
    MonedaModule,
    MensajeModule,
    MensajeDetalleModule
  ],
  controllers: [AppController],

  providers: [AppService, TypeOrmConfigService, UtilityService].flat()

})
export class AppModule {
}
