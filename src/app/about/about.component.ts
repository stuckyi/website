import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  interests = [
    '월경컵', '접근성', '인권', '운동',
    '기면증', '장애', '복지', '도시',
    '알레르기', '의사소통', '건강', '지도'
  ];

  // 참여 프로젝트, 워크숍
  participationWorks = [
    { year: 2017, title: '<청계천, 동대문 젠트리피케이션 - 리슨투더시티>', host: '서울도시건축비엔날레', role: '워크숍 참여' },
    { year: 2017, title: '<읽고 쓰는 오프라인 매핑 - 댄 파이퍼>', host: '서울도시건축비엔날레', role: '워크숍 참여' },
    { year: 2016, title: '<뉴게임플레이 NEW GAME PLAY>', host: '백남준아트센터', role: '참여 작가' },
    { year: 2016, title: '<코딩, 0부터 1까지>', host: '다음학교', role: '강의' },
    { year: 2016, title: '<불확실한 학교 Uncertainty School>', host: 'SeMA 비엔날레', role: '협력 작가' },
    { year: 2016, title: '<반응형 웹폰트 만들기>', host: '헤럴드디자인', role: '워크숍 참여, 전시' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
