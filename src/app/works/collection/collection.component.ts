import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  title: string = '모여라 월경컵';
  baseUrl: string = 'assets/images/works/collection/';
  summary: string = '생리컵 제품 정보를 수집하는 기준을 만들고, 그 기준에 맞춰 정보를 모으는 사이트를 제작하였습니다.';
  year: string = '2017 ~ 진행중';
  type: string = '자체 프로젝트';

  tags = ['#데이터 수집', '#데이터 정제', '#데이터 시각화', '#웹사이트 제작'];

  descriptions = [
    '<모여라 월경컵>은 여러 월경컵 제품정보들을 일관된 기준으로 정리, 제공하는 웹사이트 입니다.',
    '여성의 몸은 같은 듯 모두 달라서, 각자 편하게 느끼는 월경컵이 다를 수 있습니다. 월경컵은 시착해보고 살 수 있는 제품이 아니기 때문에, 자신에게 맞는 제품을 찾기 위해서는 길이, 용량, 소재 특성 등 정보가 정확히 제공되는 것이 중요합니다.',
    '하지만, 생리컵 회사마다 각각의 정보를 측정하는 기준이 조금씩 다릅니다. 컵의 길이가 34mm인 생리컵이 너무 길어서 컵의 길이가 25mm로 표기된 생리컵을 샀는데 실제로는 두 컵의 길이가 같은 경우가 있을 수 있습니다. 이렇게 정보를 측정하는 기준 자체가 달라 실제로는 정보가 없는 것과 마찬가지인게 현 실정입니다.',
    '따라서 우리는 <모여라 월경컵> 콘텐츠를 제작하기 위해 14개 제품군, 총 32개 제품에 대한 데이터를 직접 수집했습니다. 사용자 후기 등 주관적인 정보는 제외하고 길이, 용량과 같은 객관적인 정보만을 수집하고 있으며, 데이터는 지속적으로 업데이트되고 있습니다.',
    '월경컵에 대해 할 이야기가 많습니다. <모여라 월경컵>은 앞으로 이어질 많은 작업의 시작입니다.'
  ];

  links = [ 
    { info: '<모여라 월경컵> 사이트 : cups.kr', url: 'https://cups.kr' },
    { info: '<모여라 월경컵> 제품 정보 원본 데이터', url: 'https://cups.kr' }
  ];
  
  sliderArr = [
    { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
    { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
    { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
    { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
    { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
    { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '규섭 창작자와 손으로 다양한 표현을 적용해보는 과정', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
    { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '머리속에 그려지는 이미지를 하나씩 코드로 만들어가는 과정', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
