import { Test, TestingModule } from '@nestjs/testing';
import { ServicemanService } from './serviceman.service';

describe('ServicemanService', () => {
  let service: ServicemanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicemanService],
    }).compile();

    service = module.get<ServicemanService>(ServicemanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
