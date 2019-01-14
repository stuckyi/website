import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input('previewInfo') previewInfo;
  selectedItem;
  curImgUrl: string = '';
  curLev: number = 0;
  curIndex: number = 0;
  maxIndex: number = 10;

  isLeft: boolean = false;
  isRight: boolean = true;

  constructor() { }

  ngOnInit() {
    this.selectedItem = this.previewInfo[0];
    this.maxIndex = this.previewInfo.length;
    this.curImgUrl = this.previewInfo[0].imgUrl;
  }

  updateItem(dir: string) {
    if (dir === 'left' && this.curIndex !== 0) {
      this.curIndex--;
      this.selectedItem = this.previewInfo[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
    } else if (dir === 'right' && this.curIndex !== (this.maxIndex - 1)) {
      this.curIndex++;
      this.selectedItem = this.previewInfo[this.curIndex];
      this.curImgUrl = this.selectedItem.imgUrl;
      console.log('right');
    }

    this.isLeft = (this.curIndex === 0) ? false : true;
    this.isRight = (this.curIndex === (this.maxIndex - 1)) ? false : true;
  }
}
