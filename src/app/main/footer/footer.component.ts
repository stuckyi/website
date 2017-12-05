import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailUrl: string = 'hello@stuckyi.studio';
  isFooter: boolean = false;

  constructor() { }

  ngOnInit() {

  }


  openUrl(){
    window.open('https://www.instagram.com/stuckyistudio/');
  }

}
