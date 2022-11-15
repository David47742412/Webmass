
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsuarioService } from "../../api/usuario/usuario.service";
import { CreateUsuarioDto } from "../../api/usuario/dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../../api/usuario/dto/update-usuario.dto";
import { Usuario } from "../../api/usuario/entities/usuario.entity";


@ApiTags('Usuario Public')
@Controller('public/usuario')
export class UsuariopublicController {
  constructor(private readonly usuariopublicService: UsuarioService) {
  }

  @Post("valide")
  validepasseordandemali(){
    return []
  }

  @Post()
  @ApiBody({
    type:Usuario
  })
  @ApiResponse({type:Usuario,description:"Para la creacionde Usuario"})
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariopublicService.create(createUsuarioDto);
  }


  @Get()
  findAll() {
    return this.usuariopublicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariopublicService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuariopublicDto: UpdateUsuarioDto,
  ) {
    return this.usuariopublicService.update(+id, updateUsuariopublicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariopublicService.remove(+id);
  }

}
