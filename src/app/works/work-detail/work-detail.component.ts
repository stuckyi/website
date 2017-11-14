import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppService } from './../../app.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('imgEl') imgEl: ElementRef;


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

  // 모바일용 gif list 표시 여부
  isPreviewGifs: boolean;
  isBgImg: boolean = false;


  styleInfo = { background: '#000', opacity: 1 }; 
  customStyle = {
    mainImg: { background: '#000', opacity: 1 },  // .mainImg's bacgkround
    img: { transform: 'translateX(0)' }           // .detail-mainImg
  };




  // scrollEvent 
  scrollOpacity = 1;
  




  constructor(
    private elementRef: ElementRef,
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.setContent();
    this.registerScrollEvent();

    // 초기화시 화면 최상단
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    setTimeout(() => { this.customStyle.img.transform = this.getOffsetX(); }, 0); 
  }

  getOffsetX() {
    let sizes = {
      main: this.main.nativeElement.offsetWidth,
      imgEl: this.imgEl.nativeElement.offsetWidth
    };
    let offsetX = (sizes.imgEl / 2) - (sizes.main / 2);
    // targetEl.style.transform = 'translateX(-' + offsetX + 'px)';
    return 'translateX(-' + offsetX + 'px)';
  }

  setContent() {
    let contentId: number;
    this.activatedRoute.params.forEach((urlParameters) => {
      contentId = parseInt(urlParameters['id']);
    });
    this.content = this.appService.getContent(contentId);
    

    // 메인 상단 설정
    this.customStyle.mainImg.background = this.setBgCol(this.content.title_en);  // 메인 상단 배경색
    
    this.mainImgUrl = this.content.baseUrl;                           // 메인 상단 이미지
    
    this.previewSliderItems = this.content.previewSliderItems;        // 화면미리보기 (슬O)
    this.previewContentItems = this.content.previewContentItems;      // 화면미리보기 (슬X)

    
    this.processSpriteImg = this.content.baseUrl + 'slider.png';
    this.processSliderItems = this.content.processSliderItems;

    this.linkItems = this.content.linkItems;

  
    // 데이터 셋 안에, 해당하는 값이 있을 경우만 렌더링 시작.
    this.isPreviewSlider = (this.previewSliderItems.length > 0) ? true : false;
    this.isPreviewContent = (this.previewContentItems.length > 0) ? true : false;
    this.isProcessSlider = (this.processSliderItems.length > 0) ? true : false;
    this.isLinkItem = (this.linkItems.length > 0) ? true : false;
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

  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    console.log("registerScrollEvent in work-detail");
    const scrollRule = {
      pc: { startY: 0, endY: (480+100) },
      m: { startY: 0, endY: 375 }
    };
    const scrollTop$ = Observable.fromEvent(window, "scroll")
      .map((val: any) => {
        let currentY = val.target.scrollingElement.scrollTop;
        
        if (currentY >= scrollRule.pc.startY && currentY <= scrollRule.pc.endY) {
          let result = this.getMap(
            val.target.scrollingElement.scrollTop,
            scrollRule.pc.startY, scrollRule.pc.endY,
            1.0, 0.1);
          
          return result.toFixed(1);
        } else {
          return 1;
        }
      }).distinctUntilChanged();
    const checkScroll$ = scrollTop$.subscribe((val:any) => {
      this.styleInfo.opacity = val;
    });
    
    
  }

  // p5js의 map()기능과 동일하다.
  getMap(val, start1, stop1, start2, stop2) {
    let newVal = ((val - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (start2 < stop2) { 
      return this.getConstrain(newVal, start2, stop2);
    } else {
      return this.getConstrain(newVal, stop2, start2);
    }    
  }
  // 값의 범위를 제한한다.
  getConstrain(n, low, high) {
    let result = Math.max(Math.min(n, high), low);
    return result;
  }

  

}
