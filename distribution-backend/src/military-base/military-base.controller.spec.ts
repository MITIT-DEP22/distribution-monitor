import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryBaseController } from './military-base.controller';
import { MilitaryBaseService } from './military-base.service';

describe('MilitaryBaseController', () => {
  let controller: MilitaryBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilitaryBaseController],
      providers: [MilitaryBaseService],
    }).compile();

    controller = module.get<MilitaryBaseController>(MilitaryBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
