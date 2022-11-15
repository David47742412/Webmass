import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Moneda } from "../entities/moneda.entity";
import { Repository } from "typeorm";
import { CreateMonedaDto } from "../dto/create-moneda.dto";
import { MonedaTransformable } from "src/v1/mappers/currencyTransformable";
import { UpdateMonedaDto } from "../dto/update-moneda.dto";
import { IdinvalidoExpeption } from "src/v1/Errors/Idinvalido.expeption";

@Injectable({scope: Scope.REQUEST})
export class MonedaModel {
    
    private transform = new MonedaTransformable();

    constructor(
        @InjectRepository(Moneda)
        private currencyRepository: Repository<Moneda>,
    ) {
    }

    public async insert(moneda: CreateMonedaDto) {
        try {
            const currency = this.transform.transform(moneda)
            const respuesta = await this.currencyRepository.insert(currency)
            return await this.currencyRepository.findOne({
                where: {moneda_id: respuesta.identifiers[0].moneda_id}
            })
        }  catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, moneda: UpdateMonedaDto) {
        const currency = this.transform.transform(moneda as CreateMonedaDto);
        return await this.currencyRepository.update({moneda_id: id}, currency)
    }

    public async findAll() {
        return this.currencyRepository.find();
    }

    public async findOne(id : number) {
        return this.currencyRepository.findOne({where: {moneda_id: id}});
    }

    remove(id: number) {
        return this.currencyRepository.delete({moneda_id: id})
    }

}