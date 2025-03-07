import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TinymceComponent } from './tinymce.component';

describe('TinymceComponent', () => {
  let component: TinymceComponent;
  let fixture: ComponentFixture<TinymceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TinymceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
