import { MapperTransformer } from './tramsformable';
import { CreateCategoriaDto } from '../api/categoria/dto/create-categoria.dto';
import { Categoria } from '../api/categoria/entities/categoria.entity';

export class categoryTransformable
  implements MapperTransformer<CreateCategoriaDto, Categoria>
{
  transform(categoria: CreateCategoriaDto): Categoria {
    return {
      categoria_id: categoria.categoria_id,
      categoria_nombre: categoria.categoria_nombre,
      categoria_tipo: categoria.categoria_tipo,
      categoriadetalle:categoria.categoriadetalle,
      categoria_update: categoria.categoria_update,
      categoria_create: categoria.categoria_create,
    };
  }
}
