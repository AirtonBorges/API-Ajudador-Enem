import { Controller, Get } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import cheerio from 'cheerio';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  obterQConcursos(): string {
    return this.appService.getHello();
  }

  public async ObterPergunta(url: string): Promise<string> {
    let resultado: AxiosResponse;
    await axios(url)
      .then((result: AxiosResponse) => {
        resultado = result;
      })
      .catch((err) => {
        console.log(`Erro: ${err}`);
        throw new Error(err.message);
      });

    const titulo = this.obterTitulo(resultado);
    return titulo;
  }

  private obterTitulo(resultado: AxiosResponse<any>): string {
    const html = cheerio.load(resultado.data);
    const titulo = html('.q-question-enunciation');
    const tituloElementos = titulo.html();

    return tituloElementos;
  }
}
