import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartJsComponent } from './chart-js.component';

describe('ChartJsComponent', () => {
  let component: ChartJsComponent;
  let fixture: ComponentFixture<ChartJsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
