import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.css']
})
export class TouchSliderComponent implements OnInit {
  contents;
  @ViewChild('tsliders') tsliders;

  scrollEvent$: Observable<any>;
  scrollFn: Observable<any>;


  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contents = this.appService.getContents();
  }

  ngAfterViewInit() {
    let mouseStrem$ = Observable.fromEvent(this.tsliders.nativeElement, 'touchmove')
      .subscribe(val => {
        console.log(val);
        return val;
      });
    
    

  }

  
  gotoDetail(id: number) {
    let link = ['/detail', id];
    this.router.navigate(link);
  }

  onScroll(e: any) {
    console.log("event", e);
  }



}
