import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtlinkJumpgameComponent } from './artlink-jumpgame.component';

describe('ArtlinkJumpgameComponent', () => {
  let component: ArtlinkJumpgameComponent;
  let fixture: ComponentFixture<ArtlinkJumpgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtlinkJumpgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtlinkJumpgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
