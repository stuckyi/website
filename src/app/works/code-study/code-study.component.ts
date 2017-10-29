import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-study',
  templateUrl: './code-study.component.html',
  styleUrls: ['./code-study.component.css']
})
export class CodeStudyComponent implements OnInit {
  title: string = '멘넴과의 코드스터디';
  baseUrl: string = 'assets/images/works/codedfont/';
  summary: string = '새로운 매체 환경에서 글자가 어떤 가능성을 가지는지 실험해보았던 작업으로, 웹페이지 상에서 계속 변화하거나 보는 사람과 상호작용하는 레터링과 폰트를 제작하였습니다.';
  year: number = 2016;
  type: string = '인터랙티브 웹 콘텐츠';

  tags = ['#워크숍', '#전시', '#p5.js'];

  descriptions = [
    '종이에 출력된 글자들은 출력되는 순간에 형태가 고정되고 모든 사람에게 동일한 형태로 전달이 됩니다. 이와 달리 웹페이지에서 보이는 글꼴들은 보는 사람의 웹브라우저나 디스플레이 환경 설정 등에 따라 조금씩 다른 형태를 띄게 됩니다.',
    '때론 제작자가 의도한 형태대로 예쁘게 보이지 않을 수 있다는 점이 한계점으로 느껴지기도 합니다만, 우리는 이번 프로젝트를 통해 이런 한계를 역으로 활용하는 실험을 해보았습니다. 글꼴이 환경에 적극적으로 반응하여 계속적으로 형태가 변하게 하는 실험입니다.',
    '한글의 구성원리, 디지털 의사소통의 문제점, 그리고 가독성이 떨어지는 웹폰트라는 작업의 방향에 대해 끝없이 되물으며 다양한 형태에 대한 실험도 병행하였습니다. 특정 단어에 대한 형태 변화를 실험한 것도 있고, 글자를 직접 입력하고 해당 글자에 대한 변화를 볼 수 있도록 폰트 형태로 제작해보기도 했습니다. 그 중 <틸트체>는 초,중,종성이 각각 독자적으로 상호작용할 수 있도록 만든 조합형 폰트입니다.',
    '우리가 제작한 폰트와 같이 환경에 반응하여 형태가 변하는 웹폰트는 기존의 웹폰트의 범주와는 목적과 접근 방식이 달라야 함을 느꼈습니다. 그래서 이 상호작용하는 웹폰트를 CODED FONT라 명명함으로서 새롭게 분류하였습니다.'
  ];

  // 사진은 10장으로 일단 시작.
  
  
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
