import { HttpException, HttpStatus } from '@nestjs/common';
import { tiposmensajes } from '../emuns/TipoUser';

export class SetInvalidoExpception extends HttpException {
  constructor() {
    super(
      {
        tipo: tiposmensajes.ERROR,
        mensaje: ['Algun valor quizas no se ah seteado bien'],
        statuscode: 500,
      },
      HttpStatus.CONFLICT,
    );
  }
}
