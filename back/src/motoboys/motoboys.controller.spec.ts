import { Test, TestingModule } from '@nestjs/testing';
import { MotoboysController } from './motoboys.controller';
import { MotoboysService } from './motoboys.service';

describe('MotoboysController', () => {
  let controller: MotoboysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotoboysController],
      providers: [MotoboysService],
    }).compile();

    controller = module.get<MotoboysController>(MotoboysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
