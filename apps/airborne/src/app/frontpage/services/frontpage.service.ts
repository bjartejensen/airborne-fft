import {
  TFFTResult,
  TTimeseries,
  TTimeseriesRaw,
} from '@airborne/airborne-types';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from 'apps/airborne/src/environments/environment';
import { catchError, Observable } from 'rxjs';

//#region Interface - BruntonRandTSFetch

interface IBruntonRandTSFetch {
  fetchBruntonRandTS(): Observable<TFFTResult>;
}

//#endregion

//#region Interface - Frontpage All

interface IFrontpageServiceAll extends IBruntonRandTSFetch {}

//#endregion

//#region Interface - Composite For

export interface IFrontpageServiceCompositeForFrontpageComponent
  extends IBruntonRandTSFetch {}

//#endregion

//#region Intjection Token

export const FRONTPAGE_SERVICE_TOKEN: InjectionToken<IFrontpageServiceAll> =
  new InjectionToken('FRONTPAGE_SERVICE_TOKEN', {
    factory() {
      return inject(FrontpageService);
    },
  });

//#endregion

@Injectable({
  providedIn: 'root',
})
export class FrontpageService implements IFrontpageServiceAll {
  //#region Initialisers

  constructor(private httpClient: HttpClient) {}

  //#endregion

  //#region Implementation - IBruntonRandTSFetch

  public fetchBruntonRandTS(): Observable<TFFTResult> {
    const path: string = '/fft/test-flask';

    return this.httpClient
      .get<TFFTResult>(`${environment.apiPath}${path}`)
      .pipe(
        catchError((error) => {
          throw new Error(`ERROR ${error}`);
        })
      );
  }

  //#endregion
}
