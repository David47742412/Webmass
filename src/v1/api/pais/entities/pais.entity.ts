import {paisInterface} from "./pais.interface";
import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Moneda } from "../../moneda/entities/moneda.entity";

@Entity()
export class Pais implements paisInterface {
    
    @PrimaryGeneratedColumn({type: 'int', unsigned: true})
    pais_id: number;

    @Column({type: 'varchar', length: 50})
    pais_nombre: string;
    
    @Column({type: 'varchar', length: 50, unique: true})
    pais_code: string;

    @Column({type: 'int', unsigned: true})
    usuarioUsuarioId: number;

    @ManyToOne(() => Usuario, usuario => usuario.pais)
    usuario: Usuario;

    @OneToOne(() => Moneda, moneda => moneda.pais)
    moneda: Moneda;

}
