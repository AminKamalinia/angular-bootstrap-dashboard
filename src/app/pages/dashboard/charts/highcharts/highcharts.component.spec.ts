import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HighchartsComponent } from './highcharts.component';

describe('HighchartsComponent', () => {
  let component: HighchartsComponent;
  let fixture: ComponentFixture<HighchartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
