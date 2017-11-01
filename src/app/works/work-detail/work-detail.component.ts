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
  sliderImgUrl: string = '';
  sliderGifs;

  isImgSlider: boolean;
  isGifSlider: boolean;





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
    

        
    this.mainImgUrl = this.content.baseUrl;      // 메인 상단 이미지
    // this.mainImgUrl = this.content.baseUrl + 'main.png';      // 메인 상단 이미지
    this.sliderGifs = this.content.sliderGifs;                // 모달 상세 이미지
    this.sliderImgUrl = this.content.baseUrl + 'slider.png';  // 슬라이더 스프라이트 이미지


    // 이미지 슬라이더 표시여부
    this.isImgSlider = (this.content.modalImgs.length > 0) ? true : false;
    this.isGifSlider = (this.content.sliderGifs.length > 0) ? true : false;
    
    // 초기화시 화면 최상단
    window.scrollTo(0, 0);
  }

}
