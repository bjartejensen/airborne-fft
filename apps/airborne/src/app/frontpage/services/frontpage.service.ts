import { TFFTResult } from '@airborne/airborne-types';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from 'apps/airborne/src/environments/environment';
import { catchError, Observable } from 'rxjs';

//#region Interface - FFTDecompositionFetch

interface IFFTDecompositionFetch {
  fetchFFTDecomposition(): Observable<TFFTResult>;
}

//#endregion

//#region Interface - Frontpage All

interface IFrontpageServiceAll extends IFFTDecompositionFetch {}

//#endregion

//#region Interface - CompositeFor

/**The "I" and the "D" in S.O.L.I.D for Angular
 * @I Interface Segregation Principle - Prevent classes from relying on things that they don’t need
 * @D Dependency Inversion Principle - Abstractions should not depend on details. Details should depend on abstractions
 */
export interface IFrontpageServiceCompositeForFrontpageComponent
  extends IFFTDecompositionFetch {}

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

  //#region Implementation - IFFTDecompositionFetch

  public fetchFFTDecomposition(): Observable<TFFTResult> {
    const path: string = '/fft/decompose';

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
