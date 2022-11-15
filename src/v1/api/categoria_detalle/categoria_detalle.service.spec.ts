import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaDetalleService } from './categoria_detalle.service';

describe('CategoriaDetalleService', () => {
  let service: CategoriaDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaDetalleService],
    }).compile();

    service = module.get<CategoriaDetalleService>(CategoriaDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
