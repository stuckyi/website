type SliderImg = {
    index: number;
    title: string;
    desc: string;
    imgUrl: string;
}

type SliderGif = {
    index: number;
    imgUrl: string;
    desc: string;
}
type Link = {
    info: string;
    url: string;
}
export class Content {
    id: number;
    title: string;
    baseUrl: string;
    summary: string;

    year: string;
    type: string;
    tags: string[];

    descriptions: string[];

    sliderImgs?: SliderImg[];
    sliderGifs?: SliderGif[];
    links?: Link[];
}

export const CONTENTS = [
    { 
        id: 0,
        title: '모여라 월경컵',
        summary: '생리컵 제품 정보를 수집하는 기준을 만들고, 그 기준에 맞춰 정보를 모으는 사이트를 제작하였습니다.',
        baseUrl: 'assets/images/works/collection/',
        year: '2016 ~ 현재',
        type: '자체 프로젝트',
        tags: ['#데이터 수집', '#데이터 정제', '#데이터 시각화', '#웹사이트 제작'],
        descriptions: [
            '<모여라 월경컵>은 여러 월경컵 제품정보들을 일관된 기준으로 정리, 제공하는 웹사이트 입니다.',
            '여성의 몸은 같은 듯 모두 달라서, 각자 편하게 느끼는 월경컵이 다를 수 있습니다. 월경컵은 시착해보고 살 수 있는 제품이 아니기 때문에, 자신에게 맞는 제품을 찾기 위해서는 길이, 용량, 소재 특성 등 정보가 정확히 제공되는 것이 중요합니다.',
            '하지만, 생리컵 회사마다 각각의 정보를 측정하는 기준이 조금씩 다릅니다. 컵의 길이가 34mm인 생리컵이 너무 길어서 컵의 길이가 25mm로 표기된 생리컵을 샀는데 실제로는 두 컵의 길이가 같은 경우가 있을 수 있습니다. 이렇게 정보를 측정하는 기준 자체가 달라 실제로는 정보가 없는 것과 마찬가지인게 현 실정입니다.',
            '따라서 우리는 <모여라 월경컵> 콘텐츠를 제작하기 위해 14개 제품군, 총 32개 제품에 대한 데이터를 직접 수집했습니다. 사용자 후기 등 주관적인 정보는 제외하고 길이, 용량과 같은 객관적인 정보만을 수집하고 있으며, 데이터는 지속적으로 업데이트되고 있습니다.',
            '월경컵에 대해 할 이야기가 많습니다. <모여라 월경컵>은 앞으로 이어질 많은 작업의 시작입니다.'
        ],
        links: [
            { info: '<모여라 월경컵> 사이트 : cups.kr', url: 'https://cups.kr' },
            { info: '<모여라 월경컵> 제품 정보 원본 데이터', url: 'https://cups.kr' }
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '규섭 창작자와 손으로 다양한 표현을 적용해보는 과정', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '머리속에 그려지는 이미지를 하나씩 코드로 만들어가는 과정', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 1,
        title: '보는 이와 상호작용하는 폰트 <CODED FONT>',
        summary: '새로운 매체 환경에서 글자가 어떤 가능성을 가지는지 실험해보았던 작업으로, 웹페이지 상에서 계속 변화하거나 보는 사람과 상호작용하는 레터링과 폰트를 제작하였습니다.',
        baseUrl: 'assets/images/works/codedfont/',
        year: '2016',
        type: '인터랙티브 웹 콘텐츠',
        tags: ['#워크숍', '#전시', '#p5.js'],
        descriptions: [
            '종이에 출력된 글자들은 출력되는 순간에 형태가 고정되고 모든 사람에게 동일한 형태로 전달이 됩니다. 이와 달리 웹페이지에서 보이는 글꼴들은 보는 사람의 웹브라우저나 디스플레이 환경 설정 등에 따라 조금씩 다른 형태를 띄게 됩니다.',
            '때론 제작자가 의도한 형태대로 예쁘게 보이지 않을 수 있다는 점이 한계점으로 느껴지기도 합니다만, 우리는 이번 프로젝트를 통해 이런 한계를 역으로 활용하는 실험을 해보았습니다. 글꼴이 환경에 적극적으로 반응하여 계속적으로 형태가 변하게 하는 실험입니다.',
            '한글의 구성원리, 디지털 의사소통의 문제점, 그리고 가독성이 떨어지는 웹폰트라는 작업의 방향에 대해 끝없이 되물으며 다양한 형태에 대한 실험도 병행하였습니다. 특정 단어에 대한 형태 변화를 실험한 것도 있고, 글자를 직접 입력하고 해당 글자에 대한 변화를 볼 수 있도록 폰트 형태로 제작해보기도 했습니다. 그 중 <틸트체>는 초,중,종성이 각각 독자적으로 상호작용할 수 있도록 만든 조합형 폰트입니다.',
            '우리가 제작한 폰트와 같이 환경에 반응하여 형태가 변하는 웹폰트는 기존의 웹폰트의 범주와는 목적과 접근 방식이 달라야 함을 느꼈습니다. 그래서 이 상호작용하는 웹폰트를 CODED FONT라 명명함으로서 새롭게 분류하였습니다.'
        ],
        links: [
           { info: 'CODED FONT를 정의한 발표 자료', url: '#'},
            { info: '과정에 대한 기록을 해둔 트렐로(Trello) 보드', url: '#'},
            { info: '몇몇 실험을 캡쳐하여 모아둔 텀블러 페이지', url: '#'},
            { info: '스마트폰의 기울기에 반응하는 폰트 (모바일 전용)', url: '#'} 
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 2,
        title: '응급처치 및 심폐소생술 브로슈어',
        summary: '심폐소생술 및 응급처치 매뉴얼에 대한 브로슈어를 제작했습니다.',
        baseUrl: 'assets/images/works/kohi-brochure/',
        year: '2017',
        type: 'client',
        tags: ['#인쇄', '#브로슈어'],
        descriptions: [
            '한국보건복지인력개발원의 아동안전사고예방사업의 일환으로 <심폐소생술 및 응급처치> 매뉴얼을 디자인하는 작업을 진행하였습니다.',
            '심폐소생술과 응급처치 과정에 대해 이해하기 쉽도록 삽화를 그려 넣고, 순서를 알아보기 쉽도록 배치하였습니다.',
            '최종 인쇄는 한 면당 18*20cm의 크기인 10페이지의 일자 병풍 접지 형태로 2만부 정도 진행되었습니다.'
        ],
        links: [
           { info: '	<멘넴X스투키 장애물 점프>링크를 클릭하면 장애물 점프를 직접 해볼 수 있습니다.', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 3,
        title: '장애물 점프',
        summary: '멘넴의 캐릭터가 주인공인 간단한 게임을 만들어보았습니다.',
        baseUrl: 'assets/images/works/artlink/jumpgame/',
        year: '2017',
        type: '인터랙티브 웹 콘텐츠',
        tags: ['#아트링크', '#협업', '#p5.js'],
        descriptions: [
            '지난 2회의 <코드스터디>에 이어, 이번에는 스투키와 멘넴이 장기적으로 협업을 하게 되었습니다.', 
            '<코드스터디>에서는 스투키가 멘넴에게 코드를 활용법을 알려주는 것이 주 목적이었던 반면에, 이번부터는 콜라보레이션으로서 서로가 영향을 주고받으며 공동 창작을 해나가기로 했습니다.',
            '우리는 각자 어떤 작업에 흥미를 느끼고 있는지, 무엇을 할 수 있는지, 서로의 작업을 보면서 어떤 것이 떠오르고 무엇을 같이 해보고 싶은지 이야기 나눴습니다. 그리고 첫 번째로 함께 만들어본 것이 <장애물 점프>입니다.',
            '<장애물 점프>는 누구나 쉽게 할 수 있는 간단한 점프 게임입니다. 멘넴의 캐릭터 세상에 자주 등장하는 주인공 캐릭터들이 꽃가루공꽃을 피해 15명의 친구들을 만나는 게임입니다. 주인공이 15명의 친구들과 모두 만나서 인사를 나누게 되면 손 흔들어 게임이 끝나게 됩니다.',
            '우리는 우리가 만난 자리에서 함께 <장애물 점프>의 대부분을 기획하고 만들어나갔습니다. 같이 게임을 기획하고, 음원과 이미지를 만들면서, 각자가 어떤 방식으로 사고를 하고 작업을 해 나가는지 볼 수 있었습니다.'
        ],
        links: [
           { info: '	<멘넴X스투키 장애물 점프>링크를 클릭하면 장애물 점프를 직접 해볼 수 있습니다.', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 4,
        title: '멘넴X스투키 랜덤 캐릭터 생성기',
        summary: '특징이 뚜렷한 맨넴의 캐릭터들을 모듈화하여 자동으로 생성해서 새로운 조합의 형태를 보았습니다.',
        baseUrl: 'assets/images/works/artlink/randomcharacter/',
        year: '2017',
        type: '인터랙티브 웹 콘텐츠',
        tags: ['#아트링크', '#협업', '#p5.js'],
        descriptions: [
            '맨넴은 거의 매일 그림을 그립니다. 그림의 대부분은 캐릭터 그림인데, 그 캐릭터들에게서 자주 보이는 형태적인 특징들이 있습니다. 정면을 보고 팔다리를 쭉 뻗고 있거나, 허리 벨트를 하고 있거나, 남녀의 생김새 차이가 뚜렷하다는 점 등입니다.',
            '또한 캐릭터의 이름을 짓는 방식이나, 채색을 하는 방식에 있어도 규칙적이고 반복적이고 정해진 틀이 있다는 특징이 있습니다.',
            '우리는 이 규칙성과 반복성, 정형성에 주목하였고, 프로그래밍을 통해 멘넴의 규칙을 따르되 기존의 캐릭터와 다른, 낯선 캐릭터들을 자동으로 만들어내는 작업을 해보았습니다.',
            '멘넴의 규칙성 안에서 자동으로 만들어진 캐릭터들은 기존의 멘넴 캐릭터들과는 다른 낯선 모습을 가지고 있었지만, 각각의 새로운 캐릭터들에게 함께 이름을 지어주고, 사는 곳을 정해주고, 각자의 성격과 개성을 부여하면서 멘넴의 캐릭터 세상 속으로 받아들였습니다.'
        ],
        links: [
           { info: '	<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '(ex)이런식으로 잡고 했다.0', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '(ex)이런식으로 잡고 했다.1', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '(ex)이런식으로 잡고 했다.2', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '(ex)이런식으로 잡고 했다.3', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '(ex)이런식으로 잡고 했다.4', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/6.png' },
            { index: 7, title: '(ex)처음 구조를 잡는 사진7', desc: '(ex)이런식으로 잡고 했다.7', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/7.png' },
            { index: 8, title: '(ex)처음 구조를 잡는 사진8', desc: '(ex)이런식으로 잡고 했다.8', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/8.png' },
            { index: 9, title: '(ex)처음 구조를 잡는 사진9', desc: '(ex)이런식으로 잡고 했다.9', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/9.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 5,
        title: '멘넴X스투키 랜덤 캐릭터 생성기',
        summary: '특징이 뚜렷한 맨넴의 캐릭터들을 모듈화하여 자동으로 생성해서 새로운 조합의 형태를 보았습니다.',
        baseUrl: 'assets/images/works/artlink/randomcharacter/',
        year: '2017',
        type: '인터랙티브 웹 콘텐츠',
        tags: ['#아트링크', '#협업', '#p5.js'],
        descriptions: [
            '맨넴은 거의 매일 그림을 그립니다. 그림의 대부분은 캐릭터 그림인데, 그 캐릭터들에게서 자주 보이는 형태적인 특징들이 있습니다. 정면을 보고 팔다리를 쭉 뻗고 있거나, 허리 벨트를 하고 있거나, 남녀의 생김새 차이가 뚜렷하다는 점 등입니다.',
            '또한 캐릭터의 이름을 짓는 방식이나, 채색을 하는 방식에 있어도 규칙적이고 반복적이고 정해진 틀이 있다는 특징이 있습니다.',
            '우리는 이 규칙성과 반복성, 정형성에 주목하였고, 프로그래밍을 통해 멘넴의 규칙을 따르되 기존의 캐릭터와 다른, 낯선 캐릭터들을 자동으로 만들어내는 작업을 해보았습니다.',
            '멘넴의 규칙성 안에서 자동으로 만들어진 캐릭터들은 기존의 멘넴 캐릭터들과는 다른 낯선 모습을 가지고 있었지만, 각각의 새로운 캐릭터들에게 함께 이름을 지어주고, 사는 곳을 정해주고, 각자의 성격과 개성을 부여하면서 멘넴의 캐릭터 세상 속으로 받아들였습니다.'
        ],
        links: [
           { info: '	<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '(ex)이런식으로 잡고 했다.0', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '(ex)이런식으로 잡고 했다.1', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '(ex)이런식으로 잡고 했다.2', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '(ex)이런식으로 잡고 했다.3', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '(ex)이런식으로 잡고 했다.4', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '(ex)이런식으로 잡고 했다.5', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '(ex)이런식으로 잡고 했다.6', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/6.png' },
            { index: 7, title: '(ex)처음 구조를 잡는 사진7', desc: '(ex)이런식으로 잡고 했다.7', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/7.png' },
            { index: 8, title: '(ex)처음 구조를 잡는 사진8', desc: '(ex)이런식으로 잡고 했다.8', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/8.png' },
            { index: 9, title: '(ex)처음 구조를 잡는 사진9', desc: '(ex)이런식으로 잡고 했다.9', imgUrl: '/assets/images/works/artlink/randomcharacter/modal/9.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 6,
        title: '멘넴과의 코드스터디',
        summary: '새로운 매체 환경에서 글자가 어떤 가능성을 가지는지 실험해보았던 작업으로, 웹페이지 상에서 계속 변화하거나 보는 사람과 상호작용하는 레터링과 폰트를 제작하였습니다.',
        baseUrl: 'assets/images/works/codedfont/',
        year: '2016',
        type: '인터랙티브 웹 콘텐츠',
        tags: ['#아트링크', '#협업', '#p5.js'],
        descriptions: [
            '종이에 출력된 글자들은 출력되는 순간에 형태가 고정되고 모든 사람에게 동일한 형태로 전달이 됩니다. 이와 달리 웹페이지에서 보이는 글꼴들은 보는 사람의 웹브라우저나 디스플레이 환경 설정 등에 따라 조금씩 다른 형태를 띄게 됩니다.',
            '때론 제작자가 의도한 형태대로 예쁘게 보이지 않을 수 있다는 점이 한계점으로 느껴지기도 합니다만, 우리는 이번 프로젝트를 통해 이런 한계를 역으로 활용하는 실험을 해보았습니다. 글꼴이 환경에 적극적으로 반응하여 계속적으로 형태가 변하게 하는 실험입니다.',
            '한글의 구성원리, 디지털 의사소통의 문제점, 그리고 가독성이 떨어지는 웹폰트라는 작업의 방향에 대해 끝없이 되물으며 다양한 형태에 대한 실험도 병행하였습니다. 특정 단어에 대한 형태 변화를 실험한 것도 있고, 글자를 직접 입력하고 해당 글자에 대한 변화를 볼 수 있도록 폰트 형태로 제작해보기도 했습니다. 그 중 <틸트체>는 초,중,종성이 각각 독자적으로 상호작용할 수 있도록 만든 조합형 폰트입니다.',
            '우리가 제작한 폰트와 같이 환경에 반응하여 형태가 변하는 웹폰트는 기존의 웹폰트의 범주와는 목적과 접근 방식이 달라야 함을 느꼈습니다. 그래서 이 상호작용하는 웹폰트를 CODED FONT라 명명함으로서 새롭게 분류하였습니다.'
        ],
        links: [
           { info: '	<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '규섭 창작자와 손으로 다양한 표현을 적용해보는 과정', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '머리속에 그려지는 이미지를 하나씩 코드로 만들어가는 과정', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
    { 
        id: 7,
        title: 'TED 강연 평가 시각화',
        summary: '강연에 대한 평가를 한눈에 파악할 수 있으면 어떨까? TED Talks의 각 강연에 대해 시청자들이 느낀 감정 데이터를 반영하여 캐릭터를 만들어보았습니다.',
        baseUrl: 'assets/images/works/ted/',
        year: '2016',
        type: '자체 연구 프로젝트',
        tags: ['#데이터 크롤링', '#데이터 시각화', '#실험', '#d3.js', '#svg'],
        descriptions: [
            '우리는 스튜디오에서 하는 첫 실험으로 평소에 자주보던 TED Talks 사이트의 데이터를 시각화를 하기로 했습니다.',
            'TED Talks에 올라오는 강연들과 관련해서 시각화할 수 있는 다양한 데이터가 있었지만, 우리는 시청자들의 강연 평가 데이터에 관심을 가졌습니다. ',
            '강연 평가 데이터는 강연을 본 사람들이 감정에 대한 Inspiring(영감을 주는), Unconvincing(설득력이 없는) 등 13가지 항목 중 최대 3개 항목에 체크를 한 후 제출하는 방식으로 수집됩니다.',
            '우리의 최종 목적은 이 감정 데이터를 반영하여 사람 얼굴이나 캐릭터 같이 구체적인 형상을 지닌 다양한 이미지를 만들어보는 것이었습니다.',
            '시작은 가볍게 했지만, 실제 수집된 데이터를 바탕으로 그래프를 만들어가다보니 예상하지 못한 많은 어려움들이 있었습니다. 데이터의 분포가 한 쪽으로 치우쳐 있어서 생각했던만큼 다양한 모양이 나오지 않았고, 형태적으로 아름답기 위해서는 엄청나게 많은 조건식을 만들어야 했습니다. ',
            '데이터의 분포가 다양하지 않아 원하는 시각적 형태가 나오지 않게 되자, “다양하지 않은 데이터의 상태를 그대로 보여줘야 된다” 는 관점과 “원래 데이터와는 조금 다를 수 있지만 시각적 흥미를 위해서 데이터를 가공하는 게 좋다”는 관점 사이에서 고민을 하게 되었습니다. 프로젝트의 목적에 따라 어떤 관점을 취하느냐가 달라지겠지만요.',
            ' 이 프로젝트를 하며 무수한 삽질을 통해 데이터의 특성을 공부하고 체르노프 그래프를 활용해보고, SVG도 세밀하게 다뤄보는 볼 수 있어 즐거웠습니다.'
        ],
        links: [
           { info: '링크 설명', url: '#'}
        ],
        sliderImgs: [
            { index: 0, title: '(ex)처음 구조를 잡는 사진0', desc: '로사이드에서 함께 작업하는 모습', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)처음 구조를 잡는 사진1', desc: '코드를 한줄 한줄 함께 읽어보는 시간', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)처음 구조를 잡는 사진2', desc: '규섭창작자가 그려왔던 캐릭터들', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)처음 구조를 잡는 사진3', desc: '규섭창작자가 실제 캐릭터가 되어 영상을 촬영하는 모습(로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)처음 구조를 잡는 사진4', desc: '작업 과정에서 행복한 웃음을 짓는 규섭 창작자', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)처음 구조를 잡는 사진5', desc: '규섭 창작자와 손으로 다양한 표현을 적용해보는 과정', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)처음 구조를 잡는 사진6', desc: '머리속에 그려지는 이미지를 하나씩 코드로 만들어가는 과정', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ],
        sliderGifs: [
            { index: 0, imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
        ]
    },
];