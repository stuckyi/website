import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppService } from './../../app.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  content;
  mainImgUrl: string = '';

  // assets/images/works/collection/main.png  
  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let contentId: number;

    
    this.activatedRoute.params.forEach((urlParameters) => {
      contentId = parseInt(urlParameters['id']);
    });
    this.content = this.appService.getContent(contentId);
    this.mainImgUrl = this.content.baseUrl + 'main.png';
  }

}
