import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGifComponent } from './slider-gif.component';

describe('SliderGifComponent', () => {
  let component: SliderGifComponent;
  let fixture: ComponentFixture<SliderGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
