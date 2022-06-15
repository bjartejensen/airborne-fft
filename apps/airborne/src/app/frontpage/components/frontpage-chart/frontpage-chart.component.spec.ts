import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageChartComponent } from './frontpage-chart.component';

describe('FrontpageChartComponent', () => {
  let component: FrontpageChartComponent;
  let fixture: ComponentFixture<FrontpageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontpageChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
