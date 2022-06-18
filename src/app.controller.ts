import { Controller, Get } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  obterQConcursos(): string {
    return this.appService.getHello();
  }

  public async ObterQConcursos<T>(url: string): Promise<AxiosResponse<T>> {
    let resultado: AxiosResponse<T>;
    await axios(url)
      .then((result: AxiosResponse<T>) => {
        resultado = result;
      })
      .catch((err) => {
        console.log(`Erro: ${err}`);
        throw new Error(err.message);
      });

    return resultado;
  }
}
