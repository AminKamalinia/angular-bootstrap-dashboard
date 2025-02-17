import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BootstrapCarouselComponent } from './bootstrap-carousel.component';

describe('BootstrapCarouselComponent', () => {
  let component: BootstrapCarouselComponent;
  let fixture: ComponentFixture<BootstrapCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
