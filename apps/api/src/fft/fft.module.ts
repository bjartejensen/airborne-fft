import { Module } from '@nestjs/common';
import { FftController } from './fft/fft.controller';
import { FftService } from './fft/fft.service';

@Module({
  controllers: [FftController],
  providers: [FftService],
})
export class FftModule {}
