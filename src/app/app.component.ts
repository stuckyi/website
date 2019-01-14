import { WindowRef } from './utils/window.ref';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { pageLoader } from './router.transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ pageLoader ]
})
export class AppComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  constructor(
    private windowRef: WindowRef
  ) { }

  ngOnInit() {
    this.windowRef.nativeWindow.scrollTo(0, 0);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}