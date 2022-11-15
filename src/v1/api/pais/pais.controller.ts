import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiGuard } from 'src/v1/Guard/api.guard';

@ApiBearerAuth()
@UseGuards(ApiGuard)
@ApiTags('Pais')
@Controller('api/pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Post()
  create(@Body() createPaiDto: CreatePaisDto) {
    return this.paisService.create(createPaiDto);
  }

  @Get()
  findAll() {
    return this.paisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',
  new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}),
  ) id: string,
  ) {
    return this.paisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiDto: UpdatePaisDto) {
    return this.paisService.update(+id, updatePaiDto);
  }

  @ApiBody({ type: [UpdatePaisDto] })
  delete(@Param('id') id: string, @Body() updatepaisDto: UpdatePaisDto) {
    return this.paisService.update(+id, updatepaisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisService.remove(+id);
  }
}
