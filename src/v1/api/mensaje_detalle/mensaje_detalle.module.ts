import { Module } from '@nestjs/common';
import { MensajeDetalleController } from './mensaje_detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [MensajeDetalleController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]
})

export class MensajeDetalleModule {}
