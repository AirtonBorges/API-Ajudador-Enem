import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const URL = 'https://www.qconcursos.com/questoes-de-concursos/questoes/fabb3438-0c';
const ENUNCIADO = '\nAssinale a opção que apresenta a API (<span style="font-style: italic;">application programming\ninterface</span>) disponível para o desenvolvedor programar a interface de\nusuário de um aplicativo. ';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Deve retornar não nulo ao dar scrape no QConcursos', async () => {
      const resposta = await appController.ObterPergunta(URL);

      expect(resposta).toBeTruthy();
    });

    it('Deve retornar o enunciado da pergunta', async () => {
      const resposta = await appController.ObterPergunta(URL);

      expect(resposta).toBe(ENUNCIADO);
    });
  });
});
