
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioInterface } from "./usuario.interface";
import { CategoriaDetalle } from "../../categoria_detalle/entities/categoria_detalle.entity";
import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";
import { Pais } from "../../pais/entities/pais.entity";
import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";


@Entity()
export class Usuario implements UsuarioInterface {


  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  usuario_id: number;

  @Column({ type: "varchar", length: 50 })
  usuario_foto: string;

  @Column({ type: "varchar", length: 8, unique: true })
  usuario_dni: string;

  @Column({ type: "varchar", length: 50 })
  usuario_nombre: string;

  @Column({ type: "varchar", length: 50 })
  usuario_apellido: string;

  @Column({ type: "varchar", length: 9 })
  usuario_numero_telefono: string;

  @Column({ type: "varchar", length: 50, unique: true })
  usuario_email: string;

  @Column({ type: "varchar", length: 50 })
  usuario_password: string;

  @Column({ type: "datetime" })
  usuario_create: string;

  @Column({ type: "datetime" })
  usuario_update: string;

  @Column({ type: "float" })
  usuario_latitud: number;

  @Column({ type: "float" })
  usuario_longitud: number;

  @Column({ type: "varchar", length: 500 })
  usuario_token: string;

  @OneToMany(() => CategoriaDetalle, (categoriadetalle) => categoriadetalle.categoria,{
    cascade: true,
  })
  categoriadetalle: CategoriaDetalle[];

  @OneToMany(() => TrabajoDetalle, (trabajo_detalle) => trabajo_detalle.trabajo,{
    cascade: true,
  })
  trabajo_detalle_id: TrabajoDetalle[];

  @OneToOne(() => Pais, (pais) => pais.usuario, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  pais: Pais[];

  @OneToMany(() => MensajeDetalle, (mensajedetalle) => mensajedetalle.usuario)
  mensaje_detalle: MensajeDetalle[];

}
