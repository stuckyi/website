import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app works!';

  ngOnInit(){
    console.log("ngOnInit!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit!, 모든 콘텐츠 로딩 완료!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit!, 모든 콘텐츠 로딩 완료!");

  }
}