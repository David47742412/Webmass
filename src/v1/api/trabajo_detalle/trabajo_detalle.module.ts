import { Module } from '@nestjs/common';
import { TrabajoDetalleController } from './trabajo_detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [TrabajoDetalleController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]
})
export class TrabajoDetalleModule {}
