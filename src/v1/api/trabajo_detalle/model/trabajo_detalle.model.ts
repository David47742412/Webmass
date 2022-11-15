import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrabajoDetalle } from '../entities/trabajo_detalle.entity';
import { Repository } from 'typeorm';
import { CreateTrabajoDetalleDto } from '../dto/create-trabajo_detalle.dto';
import { trabajo_detalleTransformable } from 'src/v1/mappers/job_DetailTransformable';
import { UpdateTrabajoDetalleDto } from '../dto/update-trabajo_detalle.dto';
import { IdinvalidoExpeption } from 'src/v1/Errors/Idinvalido.expeption';

@Injectable({ scope: Scope.REQUEST })
export class trabajo_detalleModel {
    
    private transform = new trabajo_detalleTransformable();

    constructor(@InjectRepository(TrabajoDetalle)
    private job_detailRepository: Repository<TrabajoDetalle>
    ){}

    public async insert(trabajo_detalle: CreateTrabajoDetalleDto) {
        try {
            const job_detail = this.transform.transform(trabajo_detalle)
            const respuesta = await this.job_detailRepository.insert(job_detail)
            return await this.job_detailRepository.findOne({
                where: {trabajo_detalle_id: respuesta.identifiers[0].trabajo_detalle_id}
            })
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, trabajo_detalle: UpdateTrabajoDetalleDto){
        const job_detail = this.transform.transform(trabajo_detalle as CreateTrabajoDetalleDto)
        return await this.job_detailRepository.update({trabajo_detalle_id: id}, job_detail)
    }

    public async findAll() {
        return this.job_detailRepository.find()
    }

    public async findOne(id: number) {
        return this.job_detailRepository.findOne({where: {trabajo_detalle_id: id}})
    }

    remove(id: number) {
        return this.job_detailRepository.delete({trabajo_detalle_id: id})
    }

}