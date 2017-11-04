import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoState: string = 'init';



  constructor() { }

  ngOnInit() {
  }

  setLogoState(state: string) {
    if (state === 'in') { 
      this.logoState = 'hover';
    } else if (state === 'out') {
      this.logoState = 'init';
    } else {
      console.log("logo have another state name");
    }
  }

}
