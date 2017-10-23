import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedfontComponent } from './codedfont.component';

describe('CodedfontComponent', () => {
  let component: CodedfontComponent;
  let fixture: ComponentFixture<CodedfontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodedfontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodedfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
