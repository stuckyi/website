import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-gif',
  templateUrl: './slider-gif.component.html',
  styleUrls: ['./slider-gif.component.css']
})
export class SliderGifComponent implements OnInit {
  @Input('sliderGifInfo') sliderGifInfo;
  selectedItem;
  curImgUrl: string = '';
  curLev: number = 0;
  curIndex: number = 0;
  maxIndex: number = 10;

  isLeft: boolean = false;
  isRight: boolean = true;

  constructor() { }

  ngOnInit() {
    this.selectedItem = this.sliderGifInfo[0];
    this.maxIndex = this.sliderGifInfo.length;
    this.curImgUrl = this.sliderGifInfo[0].imgUrl;
  }

  updateItem(dir: string) {
    if (dir === 'left' && this.curIndex !== 0) {
      this.curIndex--;
      this.selectedItem = this.sliderGifInfo[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
    } else if (dir === 'right' && this.curIndex !== (this.maxIndex - 1)) {
      this.curIndex++;
      this.selectedItem = this.sliderGifInfo[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
      console.log('right');
    }

    this.isLeft = (this.curIndex === 0) ? false : true;
    this.isRight = (this.curIndex === (this.maxIndex - 1)) ? false : true;



  }


}
