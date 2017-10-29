import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artlink-jumpgame',
  templateUrl: './jumpgame.component.html',
  styleUrls: ['./jumpgame.component.css']
})
export class JumpgameComponent implements OnInit {
  title: string = '장애물 점프';
  baseUrl: string = 'assets/images/works/artlink/jumpgame/';
  summary: string = '멘넴의 캐릭터가 주인공인 간단한 게임을 만들어보았습니다.';
  year: number = 2017;
  type: string = '인터랙티브 웹 콘텐츠';

  tags = ['#아트링크', '#협업', '#p5.js'];

  descriptions = [
    '지난 2회의 <코드스터디>에 이어, 이번에는 스투키와 멘넴이 장기적으로 협업을 하게 되었습니다.', 
    '<코드스터디>에서는 스투키가 멘넴에게 코드를 활용법을 알려주는 것이 주 목적이었던 반면에, 이번부터는 콜라보레이션으로서 서로가 영향을 주고받으며 공동 창작을 해나가기로 했습니다.',
    '우리는 각자 어떤 작업에 흥미를 느끼고 있는지, 무엇을 할 수 있는지, 서로의 작업을 보면서 어떤 것이 떠오르고 무엇을 같이 해보고 싶은지 이야기 나눴습니다. 그리고 첫 번째로 함께 만들어본 것이 <장애물 점프>입니다.',
    '<장애물 점프>는 누구나 쉽게 할 수 있는 간단한 점프 게임입니다. 멘넴의 캐릭터 세상에 자주 등장하는 주인공 캐릭터들이 꽃가루공꽃을 피해 15명의 친구들을 만나는 게임입니다. 주인공이 15명의 친구들과 모두 만나서 인사를 나누게 되면 손 흔들어 게임이 끝나게 됩니다.',
    '우리는 우리가 만난 자리에서 함께 <장애물 점프>의 대부분을 기획하고 만들어나갔습니다. 같이 게임을 기획하고, 음원과 이미지를 만들면서, 각자가 어떤 방식으로 사고를 하고 작업을 해 나가는지 볼 수 있었습니다.'
  ];

  links = [ 
    { info: '	<멘넴X스투키 장애물 점프>링크를 클릭하면 장애물 점프를 직접 해볼 수 있습니다.', url: '#'}
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
