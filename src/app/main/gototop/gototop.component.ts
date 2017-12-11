import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Rx';


// const animationRule: string = '.4s cubic-bezier(1,.015,.295,1.225)';
const animationRule: string = '.4s ease-in-out';

const gototopAnimation = trigger('gototopAnimation',[
  state('init',   style({ display: 'none' })),
  state('on',     style({ display: 'block' })),
  state('off',    style({ display: 'none' })),
  transition('on => off',
    animate(animationRule,
      keyframes([
        style({ transform: 'scale(1)', opaicty: 1, offset: 0 }),
        style({ transform: 'scale(0)', opacity: 0, offset: 1 })
      ])
    )
  ),
  transition('off => on',
    animate(animationRule,
      keyframes([
        style({ transform: 'scale(0)', opacity: 0, offset: 0 }),
        style({ transform: 'scale(1)', opacity: 1, offset: 1 })
      ])
    ),
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
        this.gototopAnimation = (val === true) ? 'on' : 'off';
    });
  }


  gotoTop() {
    window.scrollTo(0, 0);
    this.gototopAnimation = 'init';
  }

}
