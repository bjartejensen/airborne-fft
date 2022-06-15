import { TTimeseries } from '@airborne/airborne-types';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'airborne-fft-chart',
  templateUrl: './fft-chart.component.html',
  styleUrls: ['./fft-chart.component.scss'],
})
export class FftChartComponent implements OnInit, OnChanges {
  @Input() ts?: TTimeseries[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ts']) {
      console.log('Changed...');
    }
  }

  ngOnInit(): void {}
}
