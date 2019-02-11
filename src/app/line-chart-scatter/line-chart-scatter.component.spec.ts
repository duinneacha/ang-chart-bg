import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartScatterComponent } from './line-chart-scatter.component';

describe('LineChartScatterComponent', () => {
  let component: LineChartScatterComponent;
  let fixture: ComponentFixture<LineChartScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
