import { WindowRef } from './utils/window.ref';
import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { pageLoader } from './router.transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ pageLoader ]
})
export class AppComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private windowRef: WindowRef
  ) { }

  ngOnInit() {
    this.windowRef.nativeWindow.scrollTo(0, 0);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}