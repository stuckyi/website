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

  /**
   * previewSliderItems:  화면 미리보기 (슬라이더 O)
   * previewContentItems: 화면 미리보기 (슬라이더 X)
   * processSliderItems:  프로세스 이미지 슬라이더 > 상세 모달 이미지
   * linkItems:           관련 링크 (리스트 형태) 
   */
  previewSliderItems;
  previewContentItems;
  processSliderItems;
  processSpriteImg: string = '';
  linkItems;

  isPreviewSlider: boolean;
  isPreviewContent: boolean;
  isProcessSlider: boolean;
  isLinkItem: boolean;



  // 기존 Value
  mainImgUrl: string = '';
  

  sliderImgUrl: string = ''; // 임시로 계속 사용한다.


  sliderGifs;
  previewGifs;


  // 슬라이더 요소 표시 여부
  isImgSlider: boolean;
  isGifSlider: boolean;

  // 모바일용 gif list 표시 여부
  isPreviewGifs: boolean;

  isBgImg: boolean = false;


  styleInfo = {
    background: '#000'
  };

  
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
    

    // 메인 상단 설정
    this.styleInfo.background = this.setBgCol(this.content.title_en);  // 메인 상단 배경색
    
    this.mainImgUrl = this.content.baseUrl;                           // 메인 상단 이미지
    // this.mainImgUrl = this.content.baseUrl + 'main.png';           // 메인 상단 이미지
    // this.sliderGifs = this.content.sliderGifs;                        // 화면미리보기 (슬O)
    this.previewSliderItems = this.content.previewSliderItems;        // 화면미리보기 (슬O)

    // this.sliderImgUrl = this.content.baseUrl + 'slider.png';          // 슬라이더 스프라이트 이미지
    this.processSpriteImg = this.content.baseUrl + 'slider.png';
    this.processSliderItems = this.content.processSliderItems;

    this.linkItems = this.content.linkItems;

    // 데이터 셋 안에, 해당하는 값이 있을 경우만 렌더링 시작.
    this.isPreviewSlider = (this.previewSliderItems.length > 0) ? true : false;
    this.isPreviewContent = (this.previewContentItems.length > 0) ? true : false;
    this.isProcessSlider = (this.processSliderItems.length > 0) ? true : false;
    this.isLinkItem = (this.linkItems > 0) ? true : false;



    


    // 이미지 슬라이더 표시여부
    // this.isImgSlider = (this.content.modalImgs.length > 0) ? true : false;
    // this.isGifSlider = (this.content.sliderGifs.length > 0) ? true : false;
    // this.isPreviewGifs = (this.content.previewGifs.length > 0) ? true : false;
    

    // 초기화시 화면 최상단
    window.scrollTo(0, 0);
  }

  setBgCol(name_en: string) {
    let result = '';
    if (name_en === 'randomcharacter') {
      this.isBgImg = false;
      result = '#FAB8D5';
    } else if (name_en === "codestudy") {
      this.isBgImg = false;
      result = '#F7F7F7';
    } else if (name_en === "jumpgame") {
      this.isBgImg = true;
      result = "url('assets/images/works/jumpgame/main_bg.png')";
    } else if (name_en === "collection") {
      this.isBgImg = false;
      result = "#1DC4A2";
    } else {
      this.isBgImg = false;
      result  = '#E9E9E9';
    }
    return result;
  }

  

}
