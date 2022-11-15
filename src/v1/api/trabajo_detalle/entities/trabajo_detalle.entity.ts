import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trabajo } from "../../trabajo/entities/trabajo.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { trabajo_DetalleInterface } from "./trabajo_detalle.interface";

@Entity()
export class TrabajoDetalle implements trabajo_DetalleInterface {
    
    @PrimaryGeneratedColumn({type: 'int', unsigned: true})
    trabajo_detalle_id: number;

    @Column({type: 'int', unsigned: true})
    trabajoTrabajoId: number;

    @Column({type: 'int', unsigned: true})
    usuarioUsuarioId: number;

    @ManyToOne(() => Trabajo, trabajo => trabajo.trabajo_detalle_id)
    trabajo: Trabajo;

    @ManyToOne(() => Usuario, usuario => usuario.trabajo_detalle_id)
    usuario: Usuario;
}
