import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaDetalleController } from './categoria_detalle.controller';
import { CategoriaDetalleService } from './categoria_detalle.service';

describe('CategoriaDetalleController', () => {
  let controller: CategoriaDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaDetalleController],
      providers: [CategoriaDetalleService],
    }).compile();

    controller = module.get<CategoriaDetalleController>(
      CategoriaDetalleController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
