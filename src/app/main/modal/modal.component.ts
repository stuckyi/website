import { Component, OnInit, Input } from '@angular/core';

type SliderItem = {
  index: number;
  title: string;
  desc: string;
  imgUrl: string;
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isModal: boolean = false;

  sliderItems: SliderItem[];
  selectedItem: SliderItem;

  maxIndex: number = 10; // init.
  imgIndex: number;
  imgUrl: string;  

  

  constructor() { }

  ngOnInit() {
    this.selectedItem = {
      index: 0,
      title: 'init title', desc: 'init desc',
      imgUrl: '/assets/images/works/artlink/randomcharacter/modal/0.png'
    }; // init
  }

  closeModal() {
    this.isModal = false;
  }

  openModal(selectedItem: SliderItem, sliderItems: SliderItem[]) {
    this.sliderItems = sliderItems;
    this.maxIndex = sliderItems.length - 1;
    this.imgIndex = selectedItem.index;
    this.isModal = true;
    this.selectedItem = selectedItem;
    this.imgUrl = selectedItem.imgUrl;
  }

  updateItem(dir: string) {
    if (dir === 'left' && this.imgIndex !== 0) {
      this.imgIndex--;
      this.selectedItem = this.sliderItems[this.imgIndex];
      this.imgUrl = this.selectedItem.imgUrl;
    } else if (dir === 'right' && this.imgIndex !== this.maxIndex) {
      this.imgIndex++;
      this.selectedItem = this.sliderItems[this.imgIndex];
      this.imgUrl = this.selectedItem.imgUrl;
    }
  }
}
