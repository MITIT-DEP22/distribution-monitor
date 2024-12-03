import { Test, TestingModule } from '@nestjs/testing';
import { ServicemanController } from './serviceman.controller';
import { ServicemanService } from './serviceman.service';

describe('ServicemanController', () => {
  let controller: ServicemanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicemanController],
      providers: [ServicemanService],
    }).compile();

    controller = module.get<ServicemanController>(ServicemanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
