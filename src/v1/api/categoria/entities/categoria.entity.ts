
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";
import { CategoriaInterface } from "./categoria.interface";

@Entity()
export class Categoria implements CategoriaInterface {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  categoria_id: number;

  @Column({ type: "varchar", length: 50 })
  categoria_nombre: string;

  @Column({ type: "varchar", length: 50 })
  categoria_tipo: string;

  @OneToMany(() => CategoriaDetalle, (categoriadetalle) => categoriadetalle.categoria)
  categoriadetalle: CategoriaDetalle;

  @Column({ type: "datetime"  })
  categoria_create!: string;

  @Column({ type: "datetime" })
  categoria_update!: string;




}
