import { TFFTResult } from '@airborne/airborne-types';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { FftService } from './fft.service';

@Controller('fft')
export class FftController {
  constructor(private fftService: FftService) {}

  @Get('decompose')
  async fftDecompose(@Res() response): Promise<TFFTResult> {
    try {
      const fftDecomposition = await this.fftService.fftDecompose();

      return await response.status(HttpStatus.OK).send(fftDecomposition);
    } catch (error) {
      return await response
        .status(HttpStatus.BAD_REQUEST)
        .send(`[FFT DECOMPOSE] ${error.message}`);
    }
  }
}
