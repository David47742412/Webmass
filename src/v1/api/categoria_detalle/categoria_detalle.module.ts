import {Module} from '@nestjs/common';
import {CategoriaDetalleController} from './categoria_detalle.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
    controllers: [CategoriaDetalleController],
    providers: [globalService].flat(),
    imports: [TypeOrmModule.forFeature(entities)],
})
export class CategoriaDetalleModule {
}
