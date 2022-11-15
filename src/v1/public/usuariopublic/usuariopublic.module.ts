import { Module } from '@nestjs/common';
import { UsuariopublicController } from './usuariopublic.controller';
import { UsuarioService } from '../../api/usuario/usuario.service';
import { UsuarioModel } from '../../api/usuario/model/usuario.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../../api/usuario/entities/usuario.entity';

@Module({
  controllers: [UsuariopublicController],
  providers: [UsuarioService, UsuarioModel],
  imports: [TypeOrmModule.forFeature([Usuario])],
})
export class UsuariopublicModule {}
