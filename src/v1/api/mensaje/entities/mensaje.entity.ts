import { MensajeInterface } from "./mensaje.interface";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { MensajeDetalle } from "../../mensaje_detalle/entities/mensaje_detalle.entity";

@Entity()
export class Mensaje implements MensajeInterface {
    
    @PrimaryGeneratedColumn({type: 'int', unsigned: true})
    mensaje_id: number;

    @Column({type: 'varchar', length: 250})
    mensaje_contenido: string;

    @Column({type: 'datetime'})
    mensaje_create: string;

    @Column({type: 'datetime'})
    mensaje_update: string;

    @OneToMany(() => MensajeDetalle, (mensajedetalle) => mensajedetalle.mensaje)
    mensaje_detalle: MensajeDetalle[];
}
