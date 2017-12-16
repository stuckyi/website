import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-gif',
  templateUrl: './slider-gif.component.html',
  styleUrls: ['./slider-gif.component.css']
})
export class SliderGifComponent implements OnInit {
  @Input('previewSliderItems') previewSliderItems;
  selectedItem;
  curImgUrl: string = '';
  curLev: number = 0;
  curIndex: number = 0;
  maxIndex: number = 10;

  isLeft: boolean = false;
  isRight: boolean = true;

  constructor() { }

  ngOnInit() {
    this.selectedItem = this.previewSliderItems[0];
    this.maxIndex = this.previewSliderItems.length;
    this.curImgUrl = this.previewSliderItems[0].imgUrl;
  }

  updateItem(dir: string) {
    if (dir === 'left' && this.curIndex !== 0) {
      this.curIndex--;
      this.selectedItem = this.previewSliderItems[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
    } else if (dir === 'right' && this.curIndex !== (this.maxIndex - 1)) {
      this.curIndex++;
      this.selectedItem = this.previewSliderItems[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
    }

    this.isLeft = (this.curIndex === 0) ? false : true;
    this.isRight = (this.curIndex === (this.maxIndex - 1)) ? false : true;
  }


}
