import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Rx';


const animationRule: string = '2s ease-in-out';
const gototopAnimation = trigger('gototopAnimation',[
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
]);


@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.css'],
  animations: [gototopAnimation]
})
export class GototopComponent implements OnInit {
  gototopAnimation: string = 'init';
  scrollY = { prev: 0 };
  constructor() { }

  ngOnInit() {
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
      console.log(val);
        this.gototopAnimation = (val === true) ? 'nav-on' : 'nav-off';
    });
  }


  gotoTop() {
    window.scrollTo(0, 0);
    this.gototopAnimation = 'init';
  }

}
