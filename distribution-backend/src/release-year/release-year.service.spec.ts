import { Test, TestingModule } from '@nestjs/testing';
import { ReleaseYearService } from './release-year.service';

describe('ReleaseYearService', () => {
  let service: ReleaseYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReleaseYearService],
    }).compile();

    service = module.get<ReleaseYearService>(ReleaseYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
