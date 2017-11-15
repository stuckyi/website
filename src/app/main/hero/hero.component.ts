import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, trigger, animate, state, style, keyframes } from '@angular/animations'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';




@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('dynamicHeight', [
      state('works', style({ height: '80vh' })),
      state('about', style({ height: '100vh' })),
      transition('works => about', animate('1s ease')),
      transition('about => works', animate('1s ease'))
    ])
  ]
})
export class HeroComponent implements OnInit {
  @ViewChild('evtMouse') evtMouse: ElementRef;

  isHero: boolean = true;
  isAbout: boolean = false;


  styleConf = { opacity: 1 };
  
  dynamicHeight = 'works';
  

  



  

  constructor(private router: Router) { }

  ngOnInit() { 
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        const url = this.router.url;
        if (url === '/about') {
          this.isHero = true;
          this.isAbout = true;
          this.dynamicHeight = 'about';
        }
        else if (url === '/works') {
          this.isHero = true;
          this.isAbout = false;
          this.dynamicHeight = 'works';
        }
        else {
          console.log("router urlname: ", url);
          this.isHero = false;
          this.isAbout = false;
        }
      }
    });
  }


  ngAfterViewInit() {
    let elementSize = { w: this.evtMouse.nativeElement.offsetWidth };
    let mouseStrem$ = Observable.fromEvent<MouseEvent>(this.evtMouse.nativeElement, 'mousemove')
      .subscribe((res: any) => {
        this.styleConf.opacity = +this.getMax(res.offsetX, 0, elementSize.w, 0, 1).toFixed(1);
      }); 
  }



  // p5js의 map()기능과 동일하다.
  getMax(val, start1, stop1, start2, stop2) {
    let newVal = ((val - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (start2 < stop2) { 
      return this.getConstrain(newVal, start2, stop2);
    } else {
      return this.getConstrain(newVal, stop2, start2);
    }    
  }
  // 값의 범위를 제한한다.
  getConstrain(n, low, high) {
    let result = Math.max(Math.min(n, high), low);
    return result;
  }


  openUrl(){
    window.open('https://www.instagram.com/stuckyistudio/');
  }

}

