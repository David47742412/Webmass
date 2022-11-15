import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaDetalle } from '../entities/categoria_detalle.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDetalleDto } from '../dto/create-categoria_detalle.dto';
import { category_DetalleTransformable } from 'src/v1/mappers/Category_DetailTransformable';
import { IdinvalidoExpeption } from 'src/v1/Errors/Idinvalido.expeption';
import { UpdateCategoriaDetalleDto } from '../dto/update-categoria_detalle.dto';

@Injectable({ scope: Scope.REQUEST })
export class Categoria_DetalleModel {


  private transform = new category_DetalleTransformable();


  constructor(
    @InjectRepository(CategoriaDetalle)
    private category_DetailRepository: Repository<CategoriaDetalle>,
  ) {
  }

  public async insert(categoria_Detalle: CreateCategoriaDetalleDto) {
    try {
      const category_detail = this.transform.transform(categoria_Detalle);
      const respuesta = await this.category_DetailRepository.insert(category_detail);
      return await this.category_DetailRepository.findOne({
        where: { categoria_detalle_id: respuesta.identifiers[0].categoria_detalle_id },
      });
    } catch (e) {
      throw new IdinvalidoExpeption();
    }
  }




  public async update(id: number, categoria_Detalle: UpdateCategoriaDetalleDto) {
    const category_detail = this.transform.transform(categoria_Detalle as CreateCategoriaDetalleDto);
    return await this.category_DetailRepository.update({categoria_detalle_id: id }, category_detail);
  }

  public async findAll() {
    return this.category_DetailRepository.find();
  }

  public async find(id: number) {
    return this.category_DetailRepository.findOne({
      where: { categoria_detalle_id: id },
    });
  }

  public async findOne(id: number) {
    return this.category_DetailRepository.findOne({
      where: { categoria_detalle_id: id },
    });
  }

  remove(id: number) {
    return this.category_DetailRepository.delete({ categoria_detalle_id: id });
  }
}
