import { Injectable } from "@nestjs/common";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtConfigService implements JwtOptionsFactory {

  constructor(private configService: ConfigService) {
  }

  createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    return {
      secret: this.configService.get("semilla")
    };
  }

}