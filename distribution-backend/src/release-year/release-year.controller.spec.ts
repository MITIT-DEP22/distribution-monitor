import { Test, TestingModule } from '@nestjs/testing';
import { ReleaseYearController } from './release-year.controller';
import { ReleaseYearService } from './release-year.service';

describe('ReleaseYearController', () => {
  let controller: ReleaseYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReleaseYearController],
      providers: [ReleaseYearService],
    }).compile();

    controller = module.get<ReleaseYearController>(ReleaseYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
