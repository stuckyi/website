import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss']
})
export class TouchSliderComponent implements OnInit {
  contents;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contents = this.appService.getContents();
  }

  
  gotoDetail(id: number) {
    let link = ['/detail', id];
    this.router.navigate(link);
  }

}
