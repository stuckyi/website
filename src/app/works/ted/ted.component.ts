import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ted',
  templateUrl: './ted.component.html',
  styleUrls: ['./ted.component.css']
})
export class TedComponent implements OnInit {

  title: string = 'TED 강연 평가 시각화';
  baseUrl: string = 'assets/images/works/ted/';
  summary: string = ' 강연에 대한 평가를 한눈에 파악할 수 있으면 어떨까? TED Talks의 각 강연에 대해 시청자들이 느낀 감정 데이터를 반영하여 캐릭터를 만들어보았습니다.';
  year: number = 2016;
  type: string = '자체 연구 프로젝트';

  tags = ['#데이터 크롤링', '#데이터 시각화', '#실험', '#d3.js', '#svg'];

  descriptions = [
    '우리는 스튜디오에서 하는 첫 실험으로 평소에 자주보던 TED Talks 사이트의 데이터를 시각화를 하기로 했습니다.',
    'TED Talks에 올라오는 강연들과 관련해서 시각화할 수 있는 다양한 데이터가 있었지만, 우리는 시청자들의 강연 평가 데이터에 관심을 가졌습니다. ',
    '강연 평가 데이터는 강연을 본 사람들이 감정에 대한 Inspiring(영감을 주는), Unconvincing(설득력이 없는) 등 13가지 항목 중 최대 3개 항목에 체크를 한 후 제출하는 방식으로 수집됩니다.',
    '우리의 최종 목적은 이 감정 데이터를 반영하여 사람 얼굴이나 캐릭터 같이 구체적인 형상을 지닌 다양한 이미지를 만들어보는 것이었습니다.',
    '시작은 가볍게 했지만, 실제 수집된 데이터를 바탕으로 그래프를 만들어가다보니 예상하지 못한 많은 어려움들이 있었습니다. 데이터의 분포가 한 쪽으로 치우쳐 있어서 생각했던만큼 다양한 모양이 나오지 않았고, 형태적으로 아름답기 위해서는 엄청나게 많은 조건식을 만들어야 했습니다. ',
    '데이터의 분포가 다양하지 않아 원하는 시각적 형태가 나오지 않게 되자, “다양하지 않은 데이터의 상태를 그대로 보여줘야 된다” 는 관점과 “원래 데이터와는 조금 다를 수 있지만 시각적 흥미를 위해서 데이터를 가공하는 게 좋다”는 관점 사이에서 고민을 하게 되었습니다. 프로젝트의 목적에 따라 어떤 관점을 취하느냐가 달라지겠지만요.',
    ' 이 프로젝트를 하며 무수한 삽질을 통해 데이터의 특성을 공부하고 체르노프 그래프를 활용해보고, SVG도 세밀하게 다뤄보는 볼 수 있어 즐거웠습니다.'
  ];

  links = [ 
    { info: '링크 설명', url: '#'}
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


  openUrl(url: string){
    console.log("openUrl: ", url);
  }


}
