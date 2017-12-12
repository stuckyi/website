import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit{
  @Input('processSpriteImg') processSpriteImg;
  @Input('processSliderItems') processSliderItems;
  baseUrl: string = 'url(/assets/images/works/default/slider.png)';


  @ViewChild('slider') slider;
  sliderSize = { w: 0, h: 0 };

  // 슬라이더 이동 버튼 표시 여부  
  isLeft: boolean = false;
  isRight: boolean = true;


  // dynamicPos
  dynamicOffset = 'translateX(0)'; // init

  //
  offsetX: number = 0;      // move by this value.
  offsetLev: number = 1;    // how many skips
  currentPos: number = 0;

  curLev: number = 0; // Current Cup Move Level. (-8 ~ +8, start 0.)
  maxLev: number; // Maximum number of moves allowed. (count)
  maxPos: number; // Maximum moveable area (px)
    
  //
  cupWidth: number = 0;
  cupCount: number = 4;




  // modal
  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  



  constructor() { }

  ngOnInit() {
    this.getElementSize();
    this.dynamicOffset = 'translateX(' + this.currentPos + 'px)';
    this.maxLev = Math.floor(((this.processSliderItems.length / 2) - 1) / this.offsetLev);
    this.baseUrl = 'url(' + this.processSpriteImg + ')';
  }


  ngAfterViewInit() {
    this.sliderSize.w = this.slider.nativeElement.offsetWidth;
  }


  getElementSize() {
    this.sliderSize.w = this.slider.nativeElement.offsetWidth;
    this.sliderSize.h = this.slider.nativeElement.offsetHeight;
    this.cupWidth = this.sliderSize.w / this.cupCount;
    this.offsetX = this.cupWidth * this.offsetLev;
  }


  

  getXpos(id: number) {
    let pos: string = "" + -(id*230) + "px 0";
    return pos;
  }

  // .slider-item element position update.
  updatePos(dir: string) {
    // 이동 관련 설정
    if (dir === 'right') {
      this.curLev++;
      this.currentPos = this.currentPos - this.offsetX;
    } else if (dir === 'left') {
      this.curLev--;
      this.currentPos = this.currentPos + this.offsetX;
    }

    // 이동 버튼 표시 여부 검증
    this.isLeft = (this.curLev <= 0) ? false : true;
    this.isRight = (this.curLev >= this.maxLev) ? false : true;

    // 계산 된 값을 입력.
    this.dynamicOffset = 'translateX(' + this.currentPos + 'px)';
  }


  gotoSlideDetail(selectedItem: any) {
    this.modalComponent.openModal(selectedItem, this.processSliderItems);
  }

  

}
