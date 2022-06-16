import {
  ColorPaletteItem,
  TApexAreaChartConfig,
  TVHHeight,
  TVWWidth,
} from '@airborne/airborne-types';
import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { COLOR_INDEX_PALETTTE_TOKEN } from '../../shared/tokens';

@Directive({
  selector: '[airborneFrontpageChartDir]',
})
export class FrontpageChartDirective implements OnInit {
  //#region @Input()

  @Input() chartTitle?: string;
  @Input() chartWidth!: TVWWidth;
  @Input() chartHeight!: TVHHeight;
  @Input() colorIndex?: number;

  //#endregion

  //#region @Output()

  @Output() chartOptionsEmitter: EventEmitter<Partial<TApexAreaChartConfig>> =
    new EventEmitter();

  //#endregion

  //#region Initialisers/Life Cycle Hooks

  constructor(
    @Inject(COLOR_INDEX_PALETTTE_TOKEN) private colorPalette: ColorPaletteItem[]
  ) {}

  ngOnInit(): void {
    this.configAndEmitChartOptions();
  }

  //#endregion

  //#region Private Method

  private getColorFromColorIndex(): string {
    const clr = this.colorPalette.find(
      (x) => x.index === (this.colorIndex ?? 1)
    )?.backgroundColorCode!;
    return clr;
  }

  /**Simple transform from viewport height to px */
  private calculateNumericHeightFromVH(viewPortHeight: TVHHeight) {
    return Math.round(
      window.innerHeight * +viewPortHeight.replace('vh', '') * 0.01
    );
  }

  /**Simple transform from viewport width to px */
  private calculateNumericWidthFromVW(viewPortWidth: TVWWidth) {
    return Math.round(
      window.innerWidth * +viewPortWidth.replace('vw', '') * 0.01
    );
  }

  /***
   * @private Setting the configuration for the chart and emitting
   * config back to component
   */
  private configAndEmitChartOptions(): void {
    let chartConfig: Partial<TApexAreaChartConfig> = {
      stroke: {
        show: true,
        colors: [this.getColorFromColorIndex()],
      },
      title: { style: { fontSize: '12px' }, text: this.chartTitle! ?? '' },

      xaxis: {
        type: 'numeric',
        categories: [],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      chart: {
        toolbar: { show: false },
        animations: { enabled: false },
        //foreColor: 'red',
        redrawOnWindowResize: true,
        fontFamily: '"Poppins", sans-serif',
        type: 'line',
        stacked: false,
        dropShadow: {
          enabled: true,
          color: this.getColorFromColorIndex(),
          enabledOnSeries: [0],
        },
        height: this.calculateNumericHeightFromVH(this.chartHeight),
        width: this.calculateNumericWidthFromVW(this.chartWidth),
        background: '',
      },
      dataLabels: { enabled: false },
      yaxis: {
        tooltip: { enabled: false },
        showAlways: false,
        labels: {
          show: false,
          style: { colors: this.getColorFromColorIndex() },
        },
      },
      legend: {
        show: false,
      },
    };

    this.chartOptionsEmitter.emit(chartConfig);
  }

  //#endregion
}
