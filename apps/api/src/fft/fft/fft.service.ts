import { TFFTResult, TTimeseriesRaw } from '@airborne/airborne-types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class FftService {
  constructor(private configService: ConfigService) {}

  public async fftDecompose(): Promise<TFFTResult> {
    const pythonAPIPath = this.configService.get<string>('FLASK_API_PATH');
    const url = `${pythonAPIPath}/fftdecompose`;

    const fftDecompose = await (
      await axios({
        method: 'get',
        url: url,
      })
    ).data;

    let orginal: TTimeseriesRaw = {
      name: 'Original',
      data: fftDecompose['original'],
    };

    let periodicity: TTimeseriesRaw = {
      name: 'Periodicity',
      data: fftDecompose['periodicity'],
    };

    let noise: TTimeseriesRaw = {
      name: 'Noise',
      data: fftDecompose['noise'],
    };

    let psd: TTimeseriesRaw = {
      name: 'Power Spectrum Density',
      data: fftDecompose['psd'],
    };

    return {
      original: orginal,
      periodicity: periodicity,
      noise: noise,
      psd: psd,
    };
  }
}
