import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FftChartComponent } from './components/fft-charts/fft-chart/fft-chart.component';
import { FftChartDirective } from './directives/fft-chart.directive';

@NgModule({
  declarations: [FftChartComponent, FftChartDirective],
  imports: [CommonModule],
})
export class ChartModule {}
