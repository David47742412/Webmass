import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UseGuards } from "@nestjs/common";
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiGuard } from "../../Guard/api.guard";



@ApiBearerAuth()
@ApiTags('Usuario')
@UseGuards(ApiGuard)
@Controller('api/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}



  @Get()

  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateUsuarioDto,
  })

  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto): any {
    return this.usuarioService.update(id, updateUsuarioDto);
  }


  @ApiBody({ type: [UpdateUsuarioDto] })
  delete(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
