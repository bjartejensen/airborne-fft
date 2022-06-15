import { Test, TestingModule } from '@nestjs/testing';
import { FftService } from './fft.service';

describe('FftService', () => {
  let service: FftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FftService],
    }).compile();

    service = module.get<FftService>(FftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
