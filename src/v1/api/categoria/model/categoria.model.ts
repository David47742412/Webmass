import {Injectable, Scope} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Categoria} from '../entities/categoria.entity';
import {Repository} from 'typeorm';
import {CreateCategoriaDto} from '../dto/create-categoria.dto';
import {categoryTransformable} from 'src/v1/mappers/CategoryTransformable';
import {UpdateCategoriaDto} from '../dto/update-categoria.dto';
import {IdinvalidoExpeption} from '../../../Errors/Idinvalido.expeption';
import {CategoriaDetalle} from "../../categoria_detalle/entities/categoria_detalle.entity";
import {Usuario} from "../../usuario/entities/usuario.entity";

@Injectable({scope: Scope.REQUEST})
export class CategoriaModel {

    private transform = new categoryTransformable();

    constructor(
        @InjectRepository(Categoria)
        private categoryRepository: Repository<Categoria>,
        @InjectRepository(CategoriaDetalle)
        private detalleRepository: Repository<CategoriaDetalle>,
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) {
    }

    public async insert(categoria: CreateCategoriaDto) {
        try {
            const category = this.transform.transform(categoria);
            const respuesta = await this.categoryRepository.insert(category);
            return await this.categoryRepository.findOne({
                where: {categoria_id: respuesta.identifiers[0].categoria_id},
            });
        } catch (e) {
            throw new IdinvalidoExpeption();
        }
    }

    public async update(id: number, categoria: UpdateCategoriaDto) {
        const category = this.transform.transform(categoria as CreateCategoriaDto);
        return await this.categoryRepository.update({categoria_id: id}, category);
    }

    public async findAll() {
        return this.categoryRepository.find();
    }

    public async findOne(id: number) {
        return this.categoryRepository.findOne({where: {categoria_id: id}});
    }

    remove(id: number) {
        return this.categoryRepository.delete({categoria_id: id});
    }

    async createusuarioid(createCategoriaDto: CreateCategoriaDto, usuario_id: number) {
        try {
            const category = this.transform.transform(createCategoriaDto);
            const insert = await this.categoryRepository.insert(category);
            const idcategoria = insert.identifiers[0].categoria_id;
            const detalleinsert = await this.detalleRepository.insert({
                categoria_id: idcategoria,
                usuario_id: usuario_id
            });

            const detallecategoria = await this.detalleRepository.find({
                where: {
                    usuario_id: usuario_id,
                }
            })

            detallecategoria.map(async detalle => {
                const categoria = await this.categoryRepository.findOne({where: {categoria_id: detalle.categoria_id}})
                detalle.categoria = categoria;
                return detalle;
            })
            const user = await this.usersRepository.findOne({where: {usuario_id: usuario_id}});

            user.categoriadetalle = detallecategoria;
            return user;
        } catch (e) {
            return e;
        }
    }
}
