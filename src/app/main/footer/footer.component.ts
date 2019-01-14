import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailUrl: string = 'hello@stuckyi.studio';

  constructor() { }
  ngOnInit() {}


  openUrl(){
    window.open('https://www.instagram.com/stuckyistudio/');
  }

}
