import { HttpException, HttpStatus } from '@nestjs/common';
import { tiposmensajes } from '../emuns/TipoUser';

export class IdinvalidoExpeption extends HttpException {
  constructor() {
    super(
      {
        tipo: tiposmensajes.ERROR,
        mensaje: ['Valores Duplicados'],
        statuscode: 403,
      },
      HttpStatus.FOUND,
    );
  }
}
