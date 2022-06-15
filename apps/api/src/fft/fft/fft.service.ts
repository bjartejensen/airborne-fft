import {
  IFFTTsResponse,
  TFFTResult,
  TTimeseries,
  TTimeseriesRaw,
} from '@airborne/airborne-types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class FftService {
  constructor(private configService: ConfigService) {}

  public async initialTest(): Promise<TFFTResult> {
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

    let trend: TTimeseriesRaw = {
      name: 'trend',
      data: fftDecompose['trend'],
    };

    let psd: TTimeseriesRaw = {
      name: 'Power Spectrum Density',
      data: fftDecompose['psd'],
    };

    return {
      original: orginal,
      periodicity: periodicity,
      trend: trend,
      noise: noise,
      psd: psd,
    };
  }

  public async decomposeTimeseries(ts: TTimeseries): Promise<IFFTTsResponse> {
    return undefined;
  }

  public async fftPhases(ts: TTimeseries) {}

  public async fetchMockedBruntonTs(): Promise<TTimeseries> {
    return undefined;
  }
}
