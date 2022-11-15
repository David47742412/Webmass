import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdinvalidoExpeption } from 'src/v1/Errors/Idinvalido.expeption';
import { MensajeDetalle } from '../entities/mensaje_detalle.entity';
import { CreateMensajeDetalleDto } from '../dto/create-mensaje_detalle.dto';
import { Message_detailTransformable } from 'src/v1/mappers/message_detailTransformable';
import { UpdateMensajeDetalleDto } from '../dto/update-mensaje_detalle.dto';

@Injectable({scope: Scope.REQUEST})
export class mensaje_detalleModel {

    private transform = new Message_detailTransformable();

    constructor(
        @InjectRepository(MensajeDetalle)
        private message_detailRepository: Repository<MensajeDetalle>
    ) {
    }

    public async insert(mensaje_detalle: CreateMensajeDetalleDto) {
        try {
            const message_detail = this.transform.transform(mensaje_detalle)
            const respuesta = await this.message_detailRepository.insert(message_detail)
            return await this.message_detailRepository.findOne({
                where: {mensaje_detalle_id: respuesta.identifiers[0].mensaje_detalle_id}
            })
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, mensaje_detalle: UpdateMensajeDetalleDto){
        const message_detail = this.transform.transform(mensaje_detalle as CreateMensajeDetalleDto)
        return await this.message_detailRepository.update({mensaje_detalle_id: id}, message_detail)
    }

    public async findAll() {
        return this.message_detailRepository.find()
    }

    public async findOne(id: number) {
        return this.message_detailRepository.findOne({where: {mensaje_detalle_id: id}})
    }

    remove(id: number) {
        return this.message_detailRepository.delete({mensaje_detalle_id: id})
    }

}