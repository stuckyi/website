import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AppService } from './../app.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {trigger, state, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, distinctUntilChanged } from 'rxjs/operators';

import 'rxjs/add/observable/fromEvent';




const query = (s, a, o = { optional: true }) => q(s, a, o);

// const customAnimation: string = '1s cubic-bezier(1,.015,.295,1.225)';
const customAnimation = '1s ease';

export const worksTransition = trigger('dynamicClass', [
  state('list-on', style({ transform: 'translate(0, -100px)', opacity: 1 })),
  state('list-off', style({ transform: 'translate(0, 0)', opacity: 0 })),
  transition('list-off => list-on',
    animate(customAnimation, keyframes([
      style({ transform: 'translate(0, 0)', opacity: 0, offset: 0, }),
      style({ transform: 'translate(0, -100px)', opacity: 1,  offset: 1 })
    ])),
  )
]);


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [worksTransition]
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChild('worksTitle') worksTitle: ElementRef;
  isAnimationView: boolean;

  dynamicClass = 'list-off';
  onAnimationView$: Subscription;


  contents;
  content_about;

  isLoad = false;
  hoverState = {
    collection: false,
    codedfont: false,
    kohi: false,
    jumpgame: false,
    randomcharacter: false,
    codestudy: false,
    ted: false
  };



  constructor(
    private router: Router,
    private appService: AppService
  ) { }


  ngOnInit() {
    // console.log('ngOnInit');
    this.contents = this.appService.getContents();
    this.content_about = this.appService.getContentAbout();
    window.scrollTo(0, 0);
    this.isAnimationView = false;
  }

  ngAfterViewInit() {
    // console.log('ngOnAfterViewInit');
    this.registerScrollEvent();
  }

  setClass(name_en: string) {
    let result = '';

    if (name_en === 'collection' && this.hoverState.collection) {
      result = 'sp-' + name_en;
    } else if (name_en === 'codedfont' && this.hoverState.codedfont) {
      result = 'sp-' + name_en;
    } else if (name_en === 'kohi' && this.hoverState.kohi) {
      result = 'sp-' + name_en;
    } else if (name_en === 'jumpgame' && this.hoverState.jumpgame) {
      result = 'sp-' + name_en;
    } else if (name_en === 'randomcharacter' && this.hoverState.randomcharacter) {
      result = 'sp-' + name_en;
    } else if (name_en === 'codestudy' && this.hoverState.codestudy) {
      result = 'sp-' + name_en;
    } else if (name_en === 'ted' && this.hoverState.ted) {
      result = 'sp-' + name_en;
    }

    return result;
  }


  getHoverState(name) {
    switch (name) {
      case 'collection': return this.hoverState.collection;
      case 'codedfont': return this.hoverState.codedfont;
      case 'kohi': return this.hoverState.kohi;
      case 'jumpgame': return this.hoverState.jumpgame;
      case 'randomcharacter': return this.hoverState.randomcharacter;
      case 'codestudy': return this.hoverState.codestudy;
      case 'ted': return this.hoverState.ted;
      default:
        console.log('we dont use setHoverState Fn.');
        break;
    }
  }
  setHoverState(name){
    switch(name){
      case 'collection':
        this.hoverState.collection = !this.hoverState.collection;
        break;
      case 'codedfont':
        this.hoverState.codedfont = !this.hoverState.codedfont;
        break;
      case 'kohi':
        this.hoverState.kohi = !this.hoverState.kohi;
        break;
      case 'jumpgame':
        this.hoverState.jumpgame = !this.hoverState.jumpgame;
        break;
      case 'randomcharacter':
        this.hoverState.randomcharacter = !this.hoverState.randomcharacter;
        break;
      case 'codestudy':
        this.hoverState.codestudy = !this.hoverState.codestudy;
        break;
      case 'ted':
        this.hoverState.ted = !this.hoverState.ted;
        break;
      default:
        console.log('we dont use setHoverState fn!');
        break;
    }
  }


  gotoDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }



  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    };
    const startY = size.height; // 기준점 브라우저 높이
    const scrollTop$ = fromEvent(window, 'scroll')
      .pipe(
        map((val: any) => {
          return (val.target.scrollingElement.scrollTop >= startY) ? 'list-on' : 'list-off';
        }),
        distinctUntilChanged()
      );

    this.onAnimationView$ = scrollTop$.subscribe((val: string) => {
      this.dynamicClass = val;
    });
  }


  listAnimationUnsub(e: any) {
    if (e.toState === 'list-on') {
      this.onAnimationView$.unsubscribe();
    }
  }


  


}