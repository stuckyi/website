import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { getMap } from '../../utils/util';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('evtMouse') evtMouse: ElementRef;

  isAbout = false;
  isStuckyi = false;
  isHello = false;


  styleConf = {
    opacity: 1
  };

  styleByScroll = {
    scale: 'scale(1)',
    paddingTop: '2.5rem'
  };

  constructor(private router: Router) { }

  ngOnInit() { 
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.isAbout = (this.router.url === '/about') ? true : false;
      }
    });

    this.isStuckyi = true;
    this.isHello = true;
  }


  ngAfterViewInit() {
    this.registerScrollEvent();
  }


  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    const imgHeight = { pc: 480, m: 375 };
    const marginWithContent = 100;          // pc only.

    const rule = {
      pc: { startY: 0, endY: (imgHeight.pc + marginWithContent) },
      m: { startY: 0, endY: imgHeight.m }
    };
    const scrollTop$ = fromEvent(window, 'scroll')
      .pipe(
        map((val: any) => {
          const currentY = val.target.scrollingElement.scrollTop;
          if (currentY >= rule.pc.startY && currentY <= rule.pc.endY) {
            const resultObj = { opacity: 0, scale: 'scale(1)' };

            const result = getMap(
              currentY,
              rule.pc.startY,
              rule.pc.endY / 3,
              1.0, 0.01);
            resultObj.opacity = +result.toFixed(1);
            resultObj.scale = 'scale('
              + getMap(currentY, rule.pc.startY, rule.pc.endY / 3, 1, .9) + ')';
            return resultObj;

          } else {
            return false;
          }
        }),
        distinctUntilChanged()
      );
    // opacity effect 
    const checkScroll$ = scrollTop$.subscribe((val:any) => {
      this.styleConf.opacity = val.opacity; // hello text opacity
      this.styleByScroll.scale = val.scale; // stuckyi image scale

    });
    
    
  }


  openUrl(){
    window.open('https://www.instagram.com/stuckyistudio/');
  }

}

