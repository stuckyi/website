import { NavComponent } from './../../main/nav/nav.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { getMap } from '../../utils/util';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('imgEl') imgEl: ElementRef;
  @ViewChild('imgElMobile') imgElMobile: ElementRef;


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


  
  customStyle = {
    // .mainImg's bacgkround
    mainImg: { opacity: 1 }, 
    transparent: { opacity: 1 } ,
    // .detail-mainImg
    img: {
      transform: 'translateX(0)'
    }           
  };





  constructor(
    private elementRef: ElementRef,
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setContent();
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    setTimeout(() => { this.customStyle.img.transform = this.getOffsetX(); }, 100); 
    this.registerScrollEvent();
  }

  getFromResizeEvent() {
    setTimeout(() => { this.customStyle.img.transform = this.getOffsetX(); }, 0);
  }

  getOffsetX() {
    let sizes = {
      main: this.main.nativeElement.offsetWidth,
      imgEl: this.imgEl.nativeElement.offsetWidth,
      imgElMobile: this.imgElMobile.nativeElement.offsetWidth
    };
    let offsetX = 0;
    let device = (sizes.imgEl === 0) ? 'm' : 'pc';

    if (device === 'pc') {
      offsetX = (sizes.imgEl / 2) - (sizes.main / 2);
    } else {
      offsetX = (sizes.imgElMobile / 2) - (sizes.main / 2);
    }
    return 'translateX(-' + offsetX + 'px)';
  }

  setContent() {
    let contentId: number;
    this.activatedRoute.params.forEach((urlParameters) => {
      contentId = parseInt(urlParameters['id']);
    });
    this.content = this.appService.getContent(contentId);
    

    // 메인 상단 설정
    this.customStyle.mainImg = this.setBgCol(this.content.title_en);  // 메인 상단 배경색
    
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
    const obj = {
      backgroundColor: 'none',
      backgroundImage: 'none',
      opacity: 1
    };

    if (name_en === 'randomcharacter') {
      obj.backgroundImage = 'none';
      obj.backgroundColor = '#FAB8D5';

      this.isBgImg = false;
      
    } else if (name_en === "codestudy") {
      obj.backgroundImage = 'none';
      obj.backgroundColor = '#F7F7F7';

      this.isBgImg = false;
      
    } else if (name_en === "jumpgame") {
      obj.backgroundImage = "url('assets/images/works/jumpgame/main_bg.png')";
      obj.backgroundColor = '#E7FF67';

      this.isBgImg = true;
      
    } else if (name_en === "collection") {
      obj.backgroundImage = 'none';
      obj.backgroundColor = '#1DC4A2';
      this.isBgImg = false;

    } else if (name_en === "codedfont") {
      obj.backgroundImage = "url('assets/images/works/codedfont/main_bg.png')";
      obj.backgroundColor = '#B000FF';
      
      this.isBgImg = true;
    } else {
      obj.backgroundImage = 'none';
      obj.backgroundColor = '#e9e9e9';

      this.isBgImg = false;
    }

    return obj;
  }

  // main image에 적용할 스크롤 이벤트
  registerScrollEvent() {
    
    const imgHeight = { pc: 480, m: 375 };
    const marginWithContent = 100;          // pc only.

    const scrollRule = {
      pc: { startY: 0, endY: (imgHeight.pc + marginWithContent) },
      m: { startY: 0, endY: imgHeight.m }
    };
    const scrollTop$ = Observable.fromEvent(window, "scroll")
      .map((val: any) => {
        let currentY = val.target.scrollingElement.scrollTop;
        
        if (currentY >= scrollRule.pc.startY && currentY <= scrollRule.pc.endY) {
          let result = getMap(
            val.target.scrollingElement.scrollTop,
            scrollRule.pc.startY, scrollRule.pc.endY,
            1.0, 0.1);
          
          return result.toFixed(1);
        } else {
          return 1;
        }
      }).distinctUntilChanged();
    
    // opacity effect 
    const checkScroll$ = scrollTop$.subscribe((val:any) => {
      this.customStyle.mainImg.opacity = val;
    });
    
    
  }


  openUrl(url: string) {
    window.open(url);
  }
}
