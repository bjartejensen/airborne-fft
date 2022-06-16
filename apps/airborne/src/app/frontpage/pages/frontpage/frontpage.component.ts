import { TFFTResult, TVHHeight, TVWWidth } from '@airborne/airborne-types';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  FRONTPAGE_SERVICE_TOKEN,
  IFrontpageServiceCompositeForFrontpageComponent,
} from '../../services/frontpage.service';

@Component({
  selector: 'airborne-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontpageComponent implements OnInit {
  //#region Observables

  fftDecompositionResult$!: Observable<TFFTResult>;

  //#endregion

  //#region Helpers

  mainChartRelativeWidth: number = 50;
  chartsRelativeHeight: number = 40;
  amplitudeFreqChartRelativeWidth: number = 40;
  amplitudeFreqChartRelativeHeigth: number = 40;

  //#endregion

  //#region Initialisers/Life Cycle Hooks

  constructor(
    @Inject(FRONTPAGE_SERVICE_TOKEN)
    private frontPageService: IFrontpageServiceCompositeForFrontpageComponent
  ) {}

  ngOnInit(): void {
    this.fftDecompositionResult$ =
      this.frontPageService.fetchFFTDecomposition();
  }

  //#endregion

  //#region Getters

  get amplitudeFreqChartWidth(): TVWWidth {
    return `${Math.round(this.amplitudeFreqChartRelativeWidth)}vw`;
  }

  get amplitudeFreqChartHeight(): TVHHeight {
    return `${Math.round(this.amplitudeFreqChartRelativeHeigth)}vh`;
  }

  get chartsHeight(): TVHHeight {
    return `${Math.round(this.chartsRelativeHeight)}vh`;
  }

  get subChartsWidthVW(): TVWWidth {
    return `${this.mainChartRelativeWidth / 3}vw`;
  }

  get mainChartWidthVW(): TVWWidth {
    return ` ${this.mainChartRelativeWidth}vw`;
  }

  //#endregion
}
