import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CountryTransformable } from "src/v1/mappers/countryTransformable";
import { Repository } from "typeorm";
import { IdinvalidoExpeption } from "../../../Errors/Idinvalido.expeption";
import { CreatePaisDto } from "../dto/create-pais.dto";
import { UpdatePaisDto } from "../dto/update-pais.dto";
import { Pais } from "../entities/pais.entity";

@Injectable({scope: Scope.REQUEST})
export class PaisModel {
    private tranform = new CountryTransformable();

    constructor(
    @InjectRepository(Pais)
    private countrysRepository: Repository<Pais>
    ) {
    }

    public async insert(pais: CreatePaisDto) {
        try {
            const country = this.tranform.transform(pais);
            const respuesta = await this.countrysRepository.insert(country);
            return await this.countrysRepository.findOne({
                where: {pais_id: respuesta.identifiers[0].pais_id}
            })
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, pais: UpdatePaisDto) {
        const country = this.tranform.transform(pais as CreatePaisDto);
        return await this.countrysRepository.update({pais_id: id}, country)
    }

    public async findAll() {
        return this.countrysRepository.find()
    }

    public async findOne(id: number) {
        return this.countrysRepository.findOne({where: {pais_id: id}});
    }

    remove(id: number) {
        return this.countrysRepository.delete({pais_id: id});
    }

}