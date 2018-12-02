import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, distinctUntilChanged } from 'rxjs/operators';
const animationRule = '.4s ease-in-out';

const gototopAnimation = trigger('gototopAnimation',[
  state('init',   style({ display: 'none' })),
  state('on',     style({ display: 'block' })),
  state('off',    style({ display: 'none' })),
  transition('on => off',
    animate(animationRule,
      keyframes([
        style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
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
  gototopAnimation = 'init';
  scrollY = { prev: 0 };
  constructor() { }

  ngOnInit() {
    this.registerScrollEvent();
  }


  registerScrollEvent() {
    const scrollTop$ = fromEvent(window, 'scroll');
    const scrollFn$ = scrollTop$.pipe(
      map((ev: any) => {
        const currentY = ev.target.scrollingElement.scrollTop;
        if (this.scrollY.prev > currentY) {
          this.scrollY.prev = currentY;
          return true;
        }
        this.scrollY.prev = currentY;
        return false;
      }),
      distinctUntilChanged()
    );


    // pc nav controll
    // const distinctUntilChangedScrollTop$ = scrollFn$.distinctUntilChanged();
    scrollFn$.subscribe(val => {
        this.gototopAnimation = (val === true) ? 'on' : 'off';
    });
  }


  gotoTop() {
    window.scrollTo(0, 0);
    this.gototopAnimation = 'init';
  }

}
