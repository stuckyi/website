import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, trigger, style, keyframes, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('logoState', [
      state('init', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.4)' })),
      transition('init => hover',
        animate('.4s ease-in-out',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.8)', offset: 1 })
          ]))),
      transition('hover => init', animate('.4s ease-in-out',
        keyframes([
          style({ transform: 'scale(0.8)', offset: 0 }),
          style({ transform: 'scale(1)', offset: 1})
      ])))
    ])
  ]
})
export class NavComponent implements OnInit {
  logoState: string = 'init';


  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy, navComp');
  }

  setLogoState(state: string) {
    if (state === 'in') { 
      this.logoState = 'hover';
    } else if (state === 'out') {
      this.logoState = 'init';
    } else {
      console.log("logo have another state name");
    }
  }

}
