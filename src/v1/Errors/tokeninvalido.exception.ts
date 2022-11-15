import { HttpException, HttpStatus } from '@nestjs/common';
import { tiposmensajes } from '../emuns/TipoUser';

export class TokeninvalidoException extends HttpException {
  constructor() {
    super(
      {
        tipo: tiposmensajes.WARNING,
        mensaje: ['Token invalid'],
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
