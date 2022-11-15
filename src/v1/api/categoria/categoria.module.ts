import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [CategoriaController],

  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)],

})
export class CategoriaModule {}
