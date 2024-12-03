import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryRankController } from './military-rank.controller';
import { MilitaryRankService } from './military-rank.service';

describe('MilitaryRankController', () => {
  let controller: MilitaryRankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilitaryRankController],
      providers: [MilitaryRankService],
    }).compile();

    controller = module.get<MilitaryRankController>(MilitaryRankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
