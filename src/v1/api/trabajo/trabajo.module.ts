import { Module } from '@nestjs/common';
import { TrabajoController } from './trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [TrabajoController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]

})
export class TrabajoModule {}
