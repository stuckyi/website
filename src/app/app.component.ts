import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { pageLoader } from './router.transition';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ pageLoader ]
})
export class AppComponent implements OnInit {
  @ViewChild('main') main: ElementRef;



  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }



  checkBrowserProperty() {
    console.log("check browser property!");

    const parent = this.renderer2.parentNode(this.main.nativeElement);
    // console.log('app-root', parent);
    // console.log("body", parent.parentNode);
    // console.log("html", parent.parentNode.parentNode);
    // console.log("document", parent.parentNode.parentNode.parentNode);
    // console.log("window", parent.parentNode.parentNode.parentNode.parentNode);


    const documentEl = parent.parentNode.parentNode.parentNode;
    


    if (documentEl.documentElement.scrollTop !== null) {
      console.log('documentEl.documentElement.scrollTop', documentEl.documentElement.scrollTop);  
    } else {
      console.log('documentEl.documentElement.scrollTop not work.');
    }
    

    if (documentEl.scrollingElement  !== null) {
      console.log('documentEl.scrollingElement', documentEl.scrollingElement);  
    } else {
      console.log('documentEl.scrollingElement is not work');
    }
    

    if (documentEl.body.scrollTop !== null) {
      console.log('documentEl.body.scrollTop', documentEl.body.scrollTop);  
    } else {
      console.log('documentEl.body.scrollTop is not work');
    }
    if (window.pageYOffset !== null) {
      console.log('window.pageYOffset', window.pageYOffset);  
    } else {
      console.log('window.pageYOffset is not work');
    }
    
  }

  
}