import { HttpException, HttpStatus } from '@nestjs/common';
import { tiposmensajes } from '../emuns/TipoUser';

export class ElementosNotfoundExpception extends HttpException {
  constructor() {
    const { ERROR } = tiposmensajes;
    super(
      {
        tipo: ERROR,
        mensaje: ['ERROR No Encontrado'],
        statuscode: 404,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
