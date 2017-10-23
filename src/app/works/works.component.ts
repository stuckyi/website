import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  hoverState = {
    collection: false,
    codedfont: false,
    kohi: false,
    jumpgame: false,
    randomcharacter: false,
    codestudy: false,
    ted: false
  };




  constructor(private router: Router) { 
    // if user move to some work page, set scroll value to 0,0
    this.router.events.subscribe(event => {
      if(event.constructor.name === 'NavigationStart'){
        console.log("works to some work! and i go to 0,0.");
        window.scrollTo(0,0);
      }
    });

  }


  ngOnInit() {
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


}