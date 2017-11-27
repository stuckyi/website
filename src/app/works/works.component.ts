import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';

import { AppService } from './../app.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChild('worksTitle') worksTitle: ElementRef;
  isAnimationView: boolean = false;

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
    private appService: AppService
  ) { }


  ngOnInit() {
    this.contents = this.appService.getContents();
    this.content_about = this.appService.getContentAbout();
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
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
    let link = ['/detail', id];
    this.router.navigate(link);
  }



  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    };
    
    const startY = size.height; //기준점 브라우저 높이
    const scrollTop$ = Observable.fromEvent(window, "scroll")
      .map((val: any) => {
        return (val.target.scrollingElement.scrollTop >= startY) ? true : false; // 브라우저 스크롤의 
      }).distinctUntilChanged();
    
    const onAnimationView$ = scrollTop$.subscribe((val: boolean) => {
      console.log("onAnimationView", val);
      this.isAnimationView = val;
    });
    /*
    const scrollTop$ = Observable.fromEvent(window, "scroll")
      .map((val: any) => {
        let currentY = val.target.scrollingElement.scrollTop;
        
        if
        } else {
          return false;
        }
      }).distinctUntilChanged();
    
    // opacity effect 
    const checkScroll$ = scrollTop$.subscribe((val:any) => {
      this.styleConf.opacity = val.opacity; // hello text opacity
      this.styleByScroll.scale = val.scale; // stuckyi image scale

    });
    */
    
  }


  


}