import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';




@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input('isContactInfo') isContactInfo;
  @ViewChild('evtMouse') evtMouse: ElementRef;
  

  styleConf = {
    opacity: 1
  };
  

  



  // isContactInfo: boolean = false;

  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() {
    // 브라우저 사이즈 구하기
    // let browserSize = {
    //   width: window.innerWidth || document.body.clientWidth,
    //   height: window.innerHeight || document.body.clientHeight
    // };

    let elementSize = { w: this.evtMouse.nativeElement.offsetWidth };

    
    let mouseStrem$ = Observable.fromEvent<MouseEvent>(this.evtMouse.nativeElement, 'mousemove')
      .subscribe(res => {
        this.styleConf.opacity = this.getMax(res.offsetX, 0, elementSize.w, 0, 1);
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

