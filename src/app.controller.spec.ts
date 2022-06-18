import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const URL = 'https://www.qconcursos.com/questoes-de-concursos/questoes/fabb3438-0c';
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
      const resposta = await appController.ObterQConcursos<any>(URL);

      console.log(resposta);

      expect(resposta).toBeTruthy();
    });
  });
});
