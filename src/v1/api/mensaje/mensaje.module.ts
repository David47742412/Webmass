import { Module } from '@nestjs/common';
import { MensajeController } from './mensaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entities, globalService} from "../../Servicios/global.service";

@Module({
  controllers: [MensajeController],
  providers: [globalService].flat(),
  imports: [TypeOrmModule.forFeature(entities)]
})
export class MensajeModule {}
