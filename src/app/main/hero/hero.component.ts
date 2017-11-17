import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';

import { getMap } from '../../utils/util';





@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @ViewChild('evtMouse') evtMouse: ElementRef;

  isAbout: boolean = false;
  styleConf = { opacity: 1 };
  

  constructor(private router: Router) { }

  ngOnInit() { 
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.isAbout = (this.router.url === '/about') ? true : false;
      }
    });
  }


  ngAfterViewInit() {
    let elementSize = { w: this.evtMouse.nativeElement.offsetWidth };
    let mouseStrem$ = Observable.fromEvent<MouseEvent>(this.evtMouse.nativeElement, 'mousemove')
      .subscribe((res: any) => {
        this.styleConf.opacity = +getMap(res.offsetX, 0, elementSize.w, 0, 1).toFixed(1);
      }); 
  }


  openUrl(){
    window.open('https://www.instagram.com/stuckyistudio/');
  }

}

