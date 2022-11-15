import { AuthGuard } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiGuard extends AuthGuard('jwt'){

  constructor() {
    super();
  }

}