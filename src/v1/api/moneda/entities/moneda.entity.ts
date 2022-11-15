import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Pais } from "../../pais/entities/pais.entity";
import { MonedaInterface } from "./moneda.interface";

@Entity()
export class Moneda implements MonedaInterface {

    @PrimaryGeneratedColumn({type: 'int', unsigned: true})
    moneda_id: number;

    @Column({type: 'varchar', length: 50})
    moneda_nombre: string;

    @Column({type: 'float'})
    moneda_valor: number;

    @Column({type: 'int', unsigned: true})
    paisPaisId: number;

    @ManyToOne(() => Pais, pais => pais.moneda)
    pais: Pais;

}
