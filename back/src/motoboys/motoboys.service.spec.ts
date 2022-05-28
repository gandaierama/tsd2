import { Test, TestingModule } from '@nestjs/testing';
import { MotoboysService } from './motoboys.service';

describe('MotoboysService', () => {
  let service: MotoboysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotoboysService],
    }).compile();

    service = module.get<MotoboysService>(MotoboysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
