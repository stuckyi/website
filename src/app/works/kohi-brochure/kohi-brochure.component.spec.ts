import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KohiBrochureComponent } from './kohi-brochure.component';

describe('KohiBrochureComponent', () => {
  let component: KohiBrochureComponent;
  let fixture: ComponentFixture<KohiBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KohiBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KohiBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
