import { Module } from '@nestjs/common';
import { PaisController } from './pais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [PaisController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]
})
export class PaisModule {}
