import { Test, TestingModule } from '@nestjs/testing';
import { UsuariopublicController } from './usuariopublic.controller';
import { UsuarioService } from 'src/v1/api/usuario/usuario.service';

describe('UsuariopublicController', () => {
  let controller: UsuariopublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariopublicController],
      providers: [UsuarioService],
    }).compile();

    controller = module.get<UsuariopublicController>(UsuariopublicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
