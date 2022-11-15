import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mensaje } from "../entities/mensaje.entity";
import { Repository } from "typeorm";
import { CreateMensajeDto } from "../dto/create-mensaje.dto";
import { MessageTransformable } from "src/v1/mappers/MessageTrasformeble";
import { UpdateMensajeDto } from "../dto/update-mensaje.dto";
import { IdinvalidoExpeption } from "src/v1/Errors/Idinvalido.expeption";
import { UtilityService } from "../../../Servicios/utility.service";


@Injectable()
export class MensajeModel {
    private transform = new MessageTransformable();

    constructor(
        @InjectRepository(Mensaje)
        private messageRepository: Repository<Mensaje>,
        private utility: UtilityService
    ) {
    }


    public async insert(mensaje: CreateMensajeDto) {
        try {
            await this.validarcamposinsert(mensaje);
            const message = this.transform.transform(mensaje);
            const respuesta = await this.messageRepository.insert(message);
            return await this.messageRepository.findOne({
                where: {mensaje_id: respuesta.identifiers[0].mensaje_id}
            })
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async validarcamposinsert(mensaje: CreateMensajeDto) {
        mensaje.mensaje_id = undefined;
        mensaje.mensaje_create = this.utility.obtenerfechaactual();
        mensaje.mensaje_update = this.utility.obtenerfechaactual();
    }

    public async update(id: number, mensaje: UpdateMensajeDto) {
        const message = this.transform.transform(mensaje as CreateMensajeDto);
        return await this.messageRepository.update({mensaje_id: id}, message);
    }

    public async findAll() {
        return this.messageRepository.find();
    }

    public async findOne(id: number) {
        return this.messageRepository.findOne({where: {mensaje_id: id}});
    }

    remove(id: number) {
        return this.messageRepository.delete({mensaje_id: id})
    }


}