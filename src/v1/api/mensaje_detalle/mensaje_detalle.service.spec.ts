import { Test, TestingModule } from '@nestjs/testing';
import { MensajeDetalleService } from './mensaje_detalle.service';

describe('MensajeDetalleService', () => {
  let service: MensajeDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajeDetalleService],
    }).compile();

    service = module.get<MensajeDetalleService>(MensajeDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
