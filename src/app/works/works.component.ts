import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AppService } from './../app.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  contents;


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
    window.scrollTo(0,0);
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

  onLoad(){
    console.log("로딩 완료!!!!!!!!!!!!!");
    this.isLoad = true;
  }

  gotoDetail(id: number) {
    let link = ['/detail', id];
    this.router.navigate(link);
  }
  


}