import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FrontpageRoutingModule } from './frontpage-routing.module';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { FrontpageChartComponent } from './components/frontpage-chart/frontpage-chart.component';
import { FrontpageChartDirective } from './directives/frontpage-chart.directive';
import { FrontpageDirective } from './directives/frontpage.directive';

@NgModule({
  declarations: [
    FrontpageComponent,
    FrontpageChartComponent,
    FrontpageChartDirective,
    FrontpageDirective,
  ],
  imports: [CommonModule, FrontpageRoutingModule, NgApexchartsModule],
})
export class FrontpageModule {}
