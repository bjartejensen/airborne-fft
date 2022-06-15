import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@airborne/api-interfaces';
import { TTimeseriesDataPoint } from '@airborne/airborne-types';

@Component({
  selector: 'airborne-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  ts: TTimeseriesDataPoint = { time: 0.02, value: 42 };

  constructor(private http: HttpClient) {}
}
