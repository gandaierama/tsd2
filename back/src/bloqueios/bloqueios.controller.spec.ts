import { Test, TestingModule } from '@nestjs/testing';
import { BloqueiosController } from './bloqueios.controller';
import { BloqueiosService } from './bloqueios.service';

describe('BloqueiosController', () => {
  let controller: BloqueiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloqueiosController],
      providers: [BloqueiosService],
    }).compile();

    controller = module.get<BloqueiosController>(BloqueiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
