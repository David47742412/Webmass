import { MensajeDetalleInterface } from "./mensaje_detalle.interface";
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Mensaje } from "../../mensaje/entities/mensaje.entity";

@Entity()
export class MensajeDetalle implements MensajeDetalleInterface {

    @PrimaryGeneratedColumn({type: 'int', unsigned: true})
    mensaje_detalle_id: number;

    @Column({type: 'int', unsigned: true})
    mensajeMensajeId: number;

    @Column({type: 'int', unsigned: true})
    usuarioUsuarioId: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.mensaje_detalle)
    usuario: Usuario[];

    @ManyToOne(() => Mensaje, (mensaje) => mensaje.mensaje_detalle)
    mensaje: Mensaje[];
}
