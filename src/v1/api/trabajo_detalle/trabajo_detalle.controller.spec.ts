import { Test, TestingModule } from '@nestjs/testing';
import { TrabajoDetalleController } from './trabajo_detalle.controller';
import { TrabajoDetalleService } from './trabajo_detalle.service';

describe('TrabajoDetalleController', () => {
  let controller: TrabajoDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabajoDetalleController],
      providers: [TrabajoDetalleService],
    }).compile();

    controller = module.get<TrabajoDetalleController>(TrabajoDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
