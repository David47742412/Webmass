import { Test, TestingModule } from '@nestjs/testing';
import { MensajeDetalleController } from './mensaje_detalle.controller';
import { MensajeDetalleService } from './mensaje_detalle.service';

describe('MensajeDetalleController', () => {
  let controller: MensajeDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajeDetalleController],
      providers: [MensajeDetalleService],
    }).compile();

    controller = module.get<MensajeDetalleController>(MensajeDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
