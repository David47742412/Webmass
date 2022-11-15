import { MapperTransformer } from './tramsformable';
import { CreateCategoriaDetalleDto } from '../api/categoria_detalle/dto/create-categoria_detalle.dto';
import { CategoriaDetalle } from '../api/categoria_detalle/entities/categoria_detalle.entity';

export class category_DetalleTransformable
  implements MapperTransformer<CreateCategoriaDetalleDto, CategoriaDetalle>
{
  transform(categoriadDtelle: CreateCategoriaDetalleDto): CategoriaDetalle {
    return {
      categoria_detalle_id: categoriadDtelle.categoria_detalle_id,
      usuario_id: categoriadDtelle.usuario_id,
      categoria_id: categoriadDtelle.categoria_id,
      usuario: categoriadDtelle.usuario,
      categoria: categoriadDtelle.categoria,
    };
  }
}
