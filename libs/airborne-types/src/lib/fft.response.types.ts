import { TTimeseriesRaw } from './airborne.types';

export type TFFTResult = {
  original: TTimeseriesRaw;
  periodicity: TTimeseriesRaw;
  noise: TTimeseriesRaw;
  trend: TTimeseriesRaw;
  psd: TTimeseriesRaw;
};
