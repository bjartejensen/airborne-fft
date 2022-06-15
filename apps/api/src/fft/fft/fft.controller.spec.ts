import { Test, TestingModule } from '@nestjs/testing';
import { FftController } from './fft.controller';

describe('FftController', () => {
  let controller: FftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FftController],
    }).compile();

    controller = module.get<FftController>(FftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
