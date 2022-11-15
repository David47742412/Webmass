import { Test, TestingModule } from '@nestjs/testing';
import { TrabajoDetalleService } from './trabajo_detalle.service';

describe('TrabajoDetalleService', () => {
  let service: TrabajoDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrabajoDetalleService],
    }).compile();

    service = module.get<TrabajoDetalleService>(TrabajoDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
