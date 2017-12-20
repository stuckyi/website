import { WindowRef } from './../utils/window.ref';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { trigger, state, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';

import { AppService } from './../app.service';

import { DOCUMENT } from '@angular/platform-browser';


const query = (s, a, o = { optional: true }) => q(s, a, o);

// const customAnimation: string = '1s cubic-bezier(1,.015,.295,1.225)';
const customAnimation: string = '1s ease';

export const worksTransition = trigger('worksTransition', [
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
  styleUrls: ['./works.component.css']
  // animations: [worksTransition]
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChild('worksTitle') worksTitle: ElementRef;
  isAnimationView: boolean;

  worksTransition: string = 'list-off';
  onAnimationView$: Subscription;

  

  


  contents;
  content_about;

  isLoad: boolean = false;
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
    private appService: AppService,
    private windowRef: WindowRef,
    @Inject(DOCUMENT) private document: Document
  ) { }


  ngOnInit() {
    this.contents = this.appService.getContents();
    this.content_about = this.appService.getContentAbout();
    this.isAnimationView = false;
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.registerScrollEvent();
    console.log("works component!");
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
    let link = ['/detail', id];
    this.router.navigate(link);
  }


  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    
    const windowEl = this.windowRef.nativeWindow;


    const size = {
      width: windowEl.innerWidth || this.document.body.clientWidth,
      height: windowEl.innerHeight || this.document.body.clientHeight
    };
    
    const startY = size.height; //기준점 브라우저 높이
    const scrollTop$ = Observable.fromEvent(window, "scroll")
      .map((ev: any) => {
        let currentY = this.windowRef.nativeWindow.pageYOffset;
        return (currentY >= startY) ? 'list-on' : 'list-off';
      }).distinctUntilChanged();
    
      console.log(scrollTop$);
    
    this.onAnimationView$ = scrollTop$.subscribe((val: string) => {
      this.worksTransition = val;
    });
  }
  

  listAnimationUnsub(e: any) {
    if (e.toState === 'list-on') {
      this.onAnimationView$.unsubscribe();
    }
  }


  


}