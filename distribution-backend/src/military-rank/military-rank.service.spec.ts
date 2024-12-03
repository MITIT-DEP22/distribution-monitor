import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryRankService } from './military-rank.service';

describe('MilitaryRankService', () => {
  let service: MilitaryRankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilitaryRankService],
    }).compile();

    service = module.get<MilitaryRankService>(MilitaryRankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
