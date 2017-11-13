import { Observable } from 'rxjs/Rx';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('dynamicNavClass', [
      state('init', style({ display: 'none' })),
      state('nav-on', style({ display: 'block' })),
      state('nav-off', style({ display: 'none' })),
      transition('nav-on => nav-off',
        animate('0.4s cubic-bezier(1,.015,.295,1.225)', keyframes([
          style({ transform: 'translate(0, 0)', opaicty: 1, offset: 0 }),
          style({ transform: 'translate(0, -100%)', opacity: 0, offset: 1 })
        ]))
      ),
      transition('nav-off => nav-on',
        animate('0.48s cubic-bezier(1,.015,.295,1.225)', keyframes([
          style({ transform: 'translate(0, -100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translate(0, 0)', opacity: 1, offset: 1 })
        ])),
      )
  ])]
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app works!';

  isAbout: boolean = false;

  isNav: boolean = true;
  scrollY = { prev: 0 };
  dynamicNavClass: string = 'init';

  constructor(private router: Router) {
    
  }

  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        const url = this.router.url;
        this.isAbout = (url === '/about') ? true : false;
      }
    });

    window.scrollTo(0, 0);

  }
  ngAfterViewInit(){
    this.registerScrollEvent();
  }


  registerScrollEvent() {

    const scrollTop$ = Observable.fromEvent(window, "scroll");
    const scrollFn$ = scrollTop$
      .map((ev: any) => {
        let currentY = ev.target.scrollingElement.scrollTop;
        if (this.scrollY.prev > currentY) {
          this.scrollY.prev = currentY;
          return true;
        } 
        this.scrollY.prev = currentY;
        return false;
      });
    

    // pc nav controll
    const distinctUntilChangedScrollTop$ = scrollFn$.distinctUntilChanged();
    distinctUntilChangedScrollTop$.subscribe(val => {
        this.isNav = val;
        this.dynamicNavClass = (val === true) ? 'nav-on' : 'nav-off';
    });
  }


  gotoTop() {
    window.scrollTo(0, 0);
    this.dynamicNavClass = 'init';
  }


}