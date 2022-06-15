import {
  IFFTTsResponse,
  TFFTResult,
  TTimeseries,
} from '@airborne/airborne-types';
import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { FFTFilterDTO } from '../dto/fft-filter.dto';
import { FftService } from './fft.service';

@Controller('fft')
export class FftController {
  constructor(private fftService: FftService) {}

  @Get('test-flask')
  async testFlask(@Res() response): Promise<TFFTResult> {
    try {
      const testVal = await this.fftService.initialTest();
      return await response.status(HttpStatus.OK).send(testVal);
    } catch (error) {
      return await response
        .status(HttpStatus.BAD_REQUEST)
        .send(`[FFT TEST FLASK] ${error.message}`);
    }
  }

  @Get('decompose')
  async decomposeTimeseries(
    @Req() req,
    @Query('fft-filter') fftFilter: FFTFilterDTO,
    @Res() response
  ): Promise<IFFTTsResponse> {
    try {
      const mockedBruntonTs = await this.fftService.fetchMockedBruntonTs();
      const fftResponse = await this.fftService.decomposeTimeseries(
        mockedBruntonTs
      );

      return await response.status(HttpStatus.OK).send(fftResponse);
    } catch (error) {
      return await response
        .status(HttpStatus.BAD_REQUEST)
        .send(`[FFT DECOMPOSE] ${error.message}`);
    }
  }
}
