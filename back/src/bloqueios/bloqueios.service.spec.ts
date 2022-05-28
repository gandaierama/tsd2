import { Test, TestingModule } from '@nestjs/testing';
import { BloqueiosService } from './bloqueios.service';

describe('BloqueiosService', () => {
  let service: BloqueiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloqueiosService],
    }).compile();

    service = module.get<BloqueiosService>(BloqueiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
