import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallowScatterComponent } from './mallow-scatter.component';

describe('MallowScatterComponent', () => {
  let component: MallowScatterComponent;
  let fixture: ComponentFixture<MallowScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallowScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallowScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
