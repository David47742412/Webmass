import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TrabajoDetalle } from "../../trabajo_detalle/entities/trabajo_detalle.entity";

@Entity()
export class Trabajo {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    trabajo_id: number;

    @Column({type: 'varchar', length: 50})
    trabajo_nombre: string;

    @Column({type:'varchar', length: 50})
    trabajo_tipo: string;

    @Column({type:'varchar', length: 50})
    trabajo_fecha_encuentro: string;

    @Column({type:'varchar', length: 50})
    trabajo_hora_encuentro: string;

    @Column({type:'varchar', length: 50})
    trabajo_direccion: string

    @Column({type:'varchar', length: 50})
    trabajo_descripcion: string;

    @Column({type: 'int'})
    trabajo_precio: number;

    @Column({type: 'varchar', length: 50})
    trabajo_horario: string;

    @Column({type: 'varchar', length: 1})
    trabajo_estado: string;

    @OneToMany(() => TrabajoDetalle, (trabajodetalle) => trabajodetalle.trabajo)
    trabajo_detalle_id: TrabajoDetalle;
}
