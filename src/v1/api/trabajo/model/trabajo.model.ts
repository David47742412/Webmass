import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trabajo } from '../entities/trabajo.entity';
import { Repository } from 'typeorm';
import { CreateTrabajoDto } from '../dto/create-trabajo.dto';
import { trabajoTransformable } from 'src/v1/mappers/TrabajoTransformable';
import { UpdateTrabajoDto } from '../dto/update-trabajo.dto';
import { IdinvalidoExpeption } from '../../../Errors/Idinvalido.expeption';

@Injectable({ scope: Scope.REQUEST })
export class TrabajoModel {

    private transform = new trabajoTransformable();

    constructor(
        @InjectRepository(Trabajo)
        private jobrepository: Repository<Trabajo>
    ) {}

    public async insert(trabajo: CreateTrabajoDto) {
        try {
            trabajo.trabajo_detalle_id = undefined;
            const job = this.transform.transform(trabajo);
            const respuesta = await this.jobrepository.insert(job);
            return await this.jobrepository.findOne({
                where: {trabajo_id: respuesta.identifiers[0].trabajo_id}
            })
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, trabajo: UpdateTrabajoDto) {
        const job = this.transform.transform(trabajo as CreateTrabajoDto)
        return await this.jobrepository.update({trabajo_id: id}, job)
    }

    public async findAll() {
        return this.jobrepository.find({relations:{trabajo_detalle_id:true}})
    }

    public async findOne(id: number) {
        return this.jobrepository.findOne({where: {trabajo_id: id}})
    }
    
    remove(id: number) {
        return this.jobrepository.delete({trabajo_id: id})
    }
    
}