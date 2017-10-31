import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  content;


  constructor(private appService: AppService) { }

  ngOnInit() {
    //나중에 url param이나 식별가능한 변수를 dataset에 추가해서 사용해야함.
    this.content = this.appService.getContent(0); 
  }

}
