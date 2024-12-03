import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryBaseService } from './military-base.service';

describe('MilitaryBaseService', () => {
  let service: MilitaryBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilitaryBaseService],
    }).compile();

    service = module.get<MilitaryBaseService>(MilitaryBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
