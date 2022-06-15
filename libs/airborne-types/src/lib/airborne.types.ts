export function airborneTypes(): string {
  return 'airborne-types';
}

export type TTimeseriesDataPoint = {
  time: number;
  value: number;
};

export type TTimeseriesRaw = {
  name: string;
  data: number[];
};

export type TTimeseries = {
  data: TTimeseriesDataPoint[];
  name: string;
};

export type TFFTPhase = {
  phase: number;
  amplitude: number;
};

export interface IFFTPhaseResponse {
  phases: TFFTPhase[];
}

export interface IFFTTsResponse {
  original: TTimeseries;
  trend: TTimeseries;
  periodicity: TTimeseries;
  noise: TTimeseries;
}
