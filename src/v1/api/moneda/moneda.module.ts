import { Module } from '@nestjs/common';
import { MonedaController } from './moneda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [MonedaController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]
})
export class MonedaModule {}
