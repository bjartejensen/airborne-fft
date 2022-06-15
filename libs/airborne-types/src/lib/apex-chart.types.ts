export function apexChartTypes(): string {
  return 'apex-chart-types';
}

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

type TApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

type TApexBasicChartConfig = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: TApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
};

export type TApexBarChartConfig = TApexBasicChartConfig & {
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type TApexAreaChartConfig = TApexBasicChartConfig & {
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};
