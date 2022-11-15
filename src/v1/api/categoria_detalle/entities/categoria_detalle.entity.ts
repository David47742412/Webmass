import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria_DetalleInterface } from './categoria_detalle.interface';

@Entity()
export class  CategoriaDetalle implements Categoria_DetalleInterface {
  
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  categoria_detalle_id: number;

  @Column({ type: 'int', unsigned: true,name: 'usuarioUsuarioId'})
  usuario_id: number;

  @Column({ type: 'int', unsigned: true ,name: 'categoriaCategoriaId'})
  categoria_id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.categoriadetalle)
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.categoriadetalle)
  categoria: Categoria;
}
