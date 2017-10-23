import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeStudyComponent } from './code-study.component';

describe('CodeStudyComponent', () => {
  let component: CodeStudyComponent;
  let fixture: ComponentFixture<CodeStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
