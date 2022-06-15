import {
  TApexAreaChartConfig,
  TTimeseries,
  TTimeseriesRaw,
  TVHHeight,
  TVWWidth,
} from '@airborne/airborne-types';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import '@airborne/airborne-types';
import '@airborne/airborne-dates';

@Component({
  selector: 'airborne-frontpage-chart',
  templateUrl: './frontpage-chart.component.html',
  styleUrls: ['./frontpage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontpageChartComponent {
  //#region Input()

  @Input() data: TTimeseriesRaw[] = [];
  @Input() chartWidth: TVWWidth = '60vw';
  @Input() chartHeight: TVHHeight = '70vh';
  @Input() chartTitle?: string;
  @Input() colorIndex?: number;

  //#endregion

  //#region Helpers

  chartConfig!: TApexAreaChartConfig;

  //#endregion

  //#region Public Event handlers

  public handleChartOption(chartConfigEmitted: Partial<TApexAreaChartConfig>) {
    this.setRemainingApexChartCongfig(chartConfigEmitted);
  }

  //#endregion

  //#region Private Methods

  /**
   *
   * @param chartConfigEmitted - modifying the chartConfig instance from the directive
   * to supply the actual data
   */
  private setRemainingApexChartCongfig(
    chartConfigEmitted: Partial<TApexAreaChartConfig>
  ) {
    chartConfigEmitted.series = [
      {
        name: this.data[0].name,
        data: this.data[0].data,
      },
    ];

    this.chartConfig = chartConfigEmitted as TApexAreaChartConfig;
  }

  //#endregion
}
