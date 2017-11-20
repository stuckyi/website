import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchSliderComponent } from './touch-slider.component';

describe('TouchSliderComponent', () => {
  let component: TouchSliderComponent;
  let fixture: ComponentFixture<TouchSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
