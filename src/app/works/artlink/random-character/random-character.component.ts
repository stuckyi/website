import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.css']
})
export class RandomCharacterComponent implements OnInit {
  title: string = '멘넴X스투키 랜덤 캐릭터 생성기';
  baseUrl: string = 'assets/images/works/artlink/randomcharacter/';
  summary: string = '특징이 뚜렷한 맨넴의 캐릭터들을 모듈화하여 자동으로 생성해서 새로운 조합의 형태를 보았습니다.';
  year: number = 2017;
  type: string = '인터랙티브 웹 콘텐츠';

  tags = ['#아트링크', '#협업', '#p5.js'];

  descriptions = [
    '맨넴은 거의 매일 그림을 그립니다. 그림의 대부분은 캐릭터 그림인데, 그 캐릭터들에게서 자주 보이는 형태적인 특징들이 있습니다. 정면을 보고 팔다리를 쭉 뻗고 있거나, 허리 벨트를 하고 있거나, 남녀의 생김새 차이가 뚜렷하다는 점 등입니다.',
    '또한 캐릭터의 이름을 짓는 방식이나, 채색을 하는 방식에 있어도 규칙적이고 반복적이고 정해진 틀이 있다는 특징이 있습니다.',
    '우리는 이 규칙성과 반복성, 정형성에 주목하였고, 프로그래밍을 통해 멘넴의 규칙을 따르되 기존의 캐릭터와 다른, 낯선 캐릭터들을 자동으로 만들어내는 작업을 해보았습니다.',
    '멘넴의 규칙성 안에서 자동으로 만들어진 캐릭터들은 기존의 멘넴 캐릭터들과는 다른 낯선 모습을 가지고 있었지만, 각각의 새로운 캐릭터들에게 함께 이름을 지어주고, 사는 곳을 정해주고, 각자의 성격과 개성을 부여하면서 멘넴의 캐릭터 세상 속으로 받아들였습니다.'
  ];

  links = [ 
    { info: '	<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'}
  ];
  // 사진은 10장으로 일단 시작.
  sliderArr = [
    { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '(ex)이런식으로 잡고 했다.0' },
    { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '(ex)이런식으로 잡고 했다.1' },
    { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '(ex)이런식으로 잡고 했다.2' },
    { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '(ex)이런식으로 잡고 했다.3' },
    { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '(ex)이런식으로 잡고 했다.4' },
    { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5' },
    { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6' },
    { index: 7, title: '(ex)처음 구조를 잡는 사진7', desc: '(ex)이런식으로 잡고 했다.7' },
    { index: 8, title: '(ex)처음 구조를 잡는 사진8', desc: '(ex)이런식으로 잡고 했다.8' },
    { index: 9, title: '(ex)처음 구조를 잡는 사진9', desc: '(ex)이런식으로 잡고 했다.9' }
  ];
  constructor() { }

  ngOnInit() {
  }

  openUrl(url:string){
    console.log('openUrl:'+url);
  }

}
