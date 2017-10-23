import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kohi-brochure',
  templateUrl: './kohi-brochure.component.html',
  styleUrls: ['./kohi-brochure.component.css']
})
export class KohiBrochureComponent implements OnInit {
  title: string = '응급처치 및 심폐소생술 브로슈어';
  baseUrl: string = 'assets/images/works/kohi-brochure/';
  summary: string = '심폐소생술 및 응급처치 매뉴얼에 대한 브로슈어를 제작했습니다.';
  year: number = 2017;
  type: string = 'client';

  tags = ['#인쇄', '#브로슈어'];

  descriptions = [
    '한국보건복지인력개발원의 아동안전사고예방사업의 일환으로 <심폐소생술 및 응급처치> 매뉴얼을 디자인하는 작업을 진행하였습니다.',
    '심폐소생술과 응급처치 과정에 대해 이해하기 쉽도록 삽화를 그려 넣고, 순서를 알아보기 쉽도록 배치하였습니다.',
    '최종 인쇄는 한 면당 18*20cm의 크기인 10페이지의 일자 병풍 접지 형태로 2만부 정도 진행되었습니다.'
  ];

  links = [ 
    { info: '	<멘넴X스투키 장애물 점프>링크를 클릭하면 장애물 점프를 직접 해볼 수 있습니다.', url: '#'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
