type tagInfo = {
    title: string;
    items: string[];
}

type previewSliderItem = {
    index: number;
    title: string;
    desc: string;
    imgUrl: string;
}

type previewContent = {
    index?: number;
    title: string;
    desc: string;
    imgUrl: string;
}

type processSliderItem = {
    index: number;
    title: string;
    desc: string;
    imgUrl: string;
}

type linkItem = {
    index?: number;
    title: string;
    desc?: string;
    url: string;
}


export class Content {
    id: number;
    title: string[];
    title_en: string;
    baseUrl: string;
    summary: string;

    year: string;
    tagInfo: tagInfo;

    descriptions: string[];

    previewSliderItems?: previewSliderItem[];
    previewContentItems?: previewContent[];
    processSliderItems?: previewSliderItem[];
    linkItems?: linkItem[];
}
// export const CONTENTS: Content[] = [
export const CONTENTS = [
    { 
        id: 0,
        title: ['모여라 월경컵'],
        title_en: 'collection',
        summary: '생리컵 제품 정보를 수집하는 기준을 만들고, 그 기준에 맞춰 정보를 모으는 사이트를 제작하였습니다.',
        baseUrl: 'assets/images/works/collection/',
        year: '2016 ~ 현재',
        tagInfo: {
            title: '자체 프로젝트',
            items: ['#데이터 수집', '#데이터 정제', '#데이터 시각화', '#웹사이트 제작']
        },
        descriptions: [
            '<모여라 월경컵>은 여러 월경컵 제품정보들을 일관된 기준으로 정리, 제공하는 웹사이트 입니다.',
            '여성의 몸은 같은 듯 모두 달라서, 각자 편하게 느끼는 월경컵이 다를 수 있습니다. 월경컵은 시착해보고 살 수 있는 제품이 아니기 때문에, 자신에게 맞는 제품을 찾기 위해서는 길이, 용량, 소재 특성 등 정보가 정확히 제공되는 것이 중요합니다.',
            '하지만, 생리컵 회사마다 각각의 정보를 측정하는 기준이 조금씩 다릅니다. 컵의 길이가 34mm인 생리컵이 너무 길어서 컵의 길이가 25mm로 표기된 생리컵을 샀는데 실제로는 두 컵의 길이가 같은 경우가 있을 수 있습니다. 이렇게 정보를 측정하는 기준 자체가 달라 실제로는 정보가 없는 것과 마찬가지인게 현 실정입니다.',
            '따라서 우리는 <모여라 월경컵> 콘텐츠를 제작하기 위해 14개 제품군, 총 32개 제품에 대한 데이터를 직접 수집했습니다. 사용자 후기 등 주관적인 정보는 제외하고 길이, 용량과 같은 객관적인 정보만을 수집하고 있으며, 데이터는 지속적으로 업데이트되고 있습니다.',
            '월경컵에 대해 할 이야기가 많습니다. <모여라 월경컵>은 앞으로 이어질 많은 작업의 시작입니다.'
        ],
        linkItems: [
            { title: '<모여라 월경컵> 사이트 : cups.kr', url: 'https://cups.kr' },
            { title: '<모여라 월경컵> 제품 정보 원본 데이터', url: 'https://cups.kr' }
        ],
        previewContentItems: [
            { index: 0, title: 'preview title7', desc: '설명7.', imgUrl: '/assets/images/works/collection/preview/m_0.gif' }
        ],
        previewSliderItems: [
            { index: 0, title:'preview title0', desc: '설명0', imgUrl: '/assets/images/works/collection/preview/0.png' },
            { index: 1, title: 'preview title1', desc: '설명1', imgUrl: '/assets/images/works/collection/preview/1.png' },
            { index: 2, title: 'preview title2', desc: '설명2', imgUrl: '/assets/images/works/collection/preview/2.png' },
            { index: 3, title: 'preview title3', desc: '설명3.', imgUrl: '/assets/images/works/collection/preview/3.png' },
            { index: 4, title: 'preview title4', desc: '설명4', imgUrl: '/assets/images/works/collection/preview/4.png' },
            { index: 5, title: 'preview title5', desc: '설명5', imgUrl: '/assets/images/works/collection/preview/5.png' },
            { index: 6, title: 'preview title6', desc: '설명6', imgUrl: '/assets/images/works/collection/preview/6.png' },
            { index: 7, title: 'preview title7', desc: '설명7.', imgUrl: '/assets/images/works/collection/preview/7.png' }
        ],
        processSliderItems: []
    },
    { 
        id: 1,
        title: ['보는 이와 상호작용하는 폰트', '<CODED FONT>'],
        title_en: 'codedfont',
        summary: '새로운 매체 환경에서 글자가 어떤 가능성을 가지는지 실험해보았던 작업으로, 웹페이지 상에서 계속 변화하거나 보는 사람과 상호작용하는 레터링과 폰트를 제작하였습니다.',
        baseUrl: 'assets/images/works/codedfont/',
        
        year: '2016',
        tagInfo: {
            title: '인터랙티브 웹 콘텐츠',
            items: ['#워크숍', '#전시', '#p5.js']
        },
        
        descriptions: [
            '종이에 출력된 글자들은 출력되는 순간에 형태가 고정되고 모든 사람에게 동일한 형태로 전달이 됩니다. 이와 달리 웹페이지에서 보이는 글꼴들은 보는 사람의 웹브라우저나 디스플레이 환경 설정 등에 따라 조금씩 다른 형태를 띄게 됩니다.',
            '때론 제작자가 의도한 형태대로 예쁘게 보이지 않을 수 있다는 점이 한계점으로 느껴지기도 합니다만, 우리는 이번 프로젝트를 통해 이런 한계를 역으로 활용하는 실험을 해보았습니다. 글꼴이 환경에 적극적으로 반응하여 계속적으로 형태가 변하게 하는 실험입니다.',
            '한글의 구성원리, 디지털 의사소통의 문제점, 그리고 가독성이 떨어지는 웹폰트라는 작업의 방향에 대해 끝없이 되물으며 다양한 형태에 대한 실험도 병행하였습니다. 특정 단어에 대한 형태 변화를 실험한 것도 있고, 글자를 직접 입력하고 해당 글자에 대한 변화를 볼 수 있도록 폰트 형태로 제작해보기도 했습니다. 그 중 <틸트체>는 초,중,종성이 각각 독자적으로 상호작용할 수 있도록 만든 조합형 폰트입니다.',
            '우리가 제작한 폰트와 같이 환경에 반응하여 형태가 변하는 웹폰트는 기존의 웹폰트의 범주와는 목적과 접근 방식이 달라야 함을 느꼈습니다. 그래서 이 상호작용하는 웹폰트를 CODED FONT라 명명함으로서 새롭게 분류하였습니다.'
        ],
        linkItems: [
            { title: 'CODED FONT를 정의한 발표 자료', url: '#'},
            { title: '과정에 대한 기록을 해둔 트렐로(Trello) 보드', url: '#'},
            { title: '몇몇 실험을 캡쳐하여 모아둔 텀블러 페이지', url: '#'},
            { title: '스마트폰의 기울기에 반응하는 폰트 (모바일 전용)', url: '#'} 
        ],
        previewSliderItems: [
            { index: 0, title: '안녕 1', desc: 'codedfont experiment', imgUrl: '/assets/images/works/codedfont/preview/0.gif' },
            { index: 1, title: '안녕 2', desc: 'codedfont experiment', imgUrl: '/assets/images/works/codedfont/preview/1.gif' },
            { index: 2, title: '움직이는 스포카한산스 ', desc: '새로운 글자 형태를 구성하는 것이 아니라, 기존 글꼴의 정보를 읽어 다양한 인터랙션을 적용한 형태', imgUrl: '/assets/images/works/codedfont/preview/2.gif' },
            { index: 3, title: '무늬', desc: '글자를 구성하는 정보를 바탕으로, 도형과 랜덤 개념을 이용하여 매 순간 무늬가 변하도록 구성', imgUrl: '/assets/images/works/codedfont/preview/3.gif' },
            { index: 4, title: '모여 1', desc: '코드로 만들어진 원소 캐릭터들은, 글자 정보에따라 조합되어 글자 형태를 이룬다.', imgUrl: '/assets/images/works/codedfont/preview/4.gif' },
            { index: 5, title: '모여 2', desc: '원소 캐릭터들은 글자를 구성한 후에도 각각의 객체로 존재하며, 사용자 동작에도 반응한다.', imgUrl: '/assets/images/works/codedfont/preview/5.gif' },
            { index: 6, title: '틸트체', desc: '스마트폰 기울기에 따라 다양한 형태로 변경된다. 사용자는 자신이 원하는 글자를 입력 해볼 수 있다.', imgUrl: '/assets/images/works/codedfont/preview/6.gif' },
            { index: 7, title: '-', desc: '-', imgUrl: '/assets/images/works/codedfont/preview/7.gif' }
            
         ],
        previewContentItems: [
            { index: 0, title:'-', desc: '-', imgUrl: '/assets/images/works/codedfont/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title:'-', desc: '인터랙션에 따라 글자를 구성하는 캐릭터들이 움직이는 기획', imgUrl: '/assets/images/works/codedfont/modal/0.png' },
            { index: 1, title: '-', desc: '포커싱에따라 형태가 변화하는 딴짓체. 형태가 구성 된 후, 포커싱이 되지않으면 글자를 구성하던 캐릭터들이 글자에서 분리되어 나오는 방식', imgUrl: '/assets/images/works/codedfont/modal/1.png' },
            { index: 2, title: '-', desc: '글자를 구성하는 원소 캐릭터. 이 역시 코드로 구성된다.', imgUrl: '/assets/images/works/codedfont/modal/2.png' },
            { index: 3, title: '-', desc: '한글 자소 단위에서 이루어지는 다양한 형태 변화', imgUrl: '/assets/images/works/codedfont/modal/3.png' },
            { index: 4, title: '-', desc: '정보 전달이 가능한 범위 내에서 형태 변형', imgUrl: '/assets/images/works/codedfont/modal/4.png' },
            { index: 5, title: '-', desc: '스마트폰 자이로센서 값에 따라 변화하는 폰트 기획', imgUrl: '/assets/images/works/codedfont/modal/5.png' },
            { index: 6, title: '스마트폰 자이로센서 탐구', desc: '스마트폰 자이로센서 원리 탐구', imgUrl: '/assets/images/works/codedfont/modal/6.png' }
         ]
    },
    {
        id: 2,
        title: ['응급처치 및 심폐소생술 브로슈어'],
        title_en: 'kohi',
        summary: '심폐소생술 및 응급처치 매뉴얼에 대한 브로슈어를 제작했습니다.',
        baseUrl: 'assets/images/works/kohi-brochure/',
        year: '2017',
        tagInfo: {
            title: 'client',
            items: ['#인쇄', '#브로슈어']
        },
        descriptions: [
            '이 작업은 한국보건복지인력개발원의 의뢰로 진행한 <심폐소생술 및 응급처치> 매뉴얼 디자인입니다. 평소 건강, 의학관련 정보시각화 작업에 관심이 많았기때문에, 기분 좋게 작업 할 수 있었습니다.',
            '아동안전사고예방사업의 일환으로 진행되었기 때문에, 실제 메뉴얼을 접할 상황과, 대상을 고려하여 다소 복잡할 수 있는 심폐소생술과 응급처치 과정에 대해 이해하기 쉽도록 풀어내려 노력했습니다. ',
            '각 동작을 이해할 수 있도록 삽화를 그렸고, 완성 된 삽화는 순서를 이해하기 쉽도록 배치했습니다.',
            '최종 인쇄물은 한 면당 18*20cm의 크기로 10페이지 분량의 일자 병풍 접지 형태로 나왔습니다.(2만부 이야기는 생략)'
        ],
        linkItems: [ ],
        previewSliderItems: [
            { index: 0, title:'-', desc: '-', imgUrl: '/assets/images/works/kohi-brochure/preview/0.png' },
            { index: 1, title: '-', desc: '-', imgUrl: '/assets/images/works/kohi-brochure/preview/1.png' },
            { index: 2, title: '-', desc: '-', imgUrl: '/assets/images/works/kohi-brochure/preview/2.png' },
            { index: 3, title: '-', desc: '-', imgUrl: '/assets/images/works/kohi-brochure/preview/3.png' }
        ],
        previewContentItems: [
            { index: 0, title:'-', desc: '-', imgUrl: '/assets/images/works/codedfont/preview/m_0.gif' }
        ],
        processSliderItems: []
    },
    { 
        id: 3,
        title: ['멘넴X스투키, 장애물 점프'],
        title_en: 'jumpgame',
        summary: '그동안 정적인 형태로 저장되어있는 창작물을 바탕으로, 인터랙티브 게임을 공동창작 했습니다',
        baseUrl: 'assets/images/works/jumpgame/',
        year: '2017',
        tagInfo: {
            title: '인터랙티브 웹 콘텐츠',
            items: ['#아트링크', '#협업', '#p5.js']
        },
        descriptions: [
            '지난 2회의 <코드스터디>에 이어, 이번에는 스투키와 멘넴이 장기적으로 협업을 하게 되었습니다.', 
            '<코드스터디>에서 스투키가 멘넴에게 코드를 활용법을 알려주는 시간이었다면, 이 <멘넴X스투키, 장애물 점프>는 멘넴과 스투키 서로가 영향을 주고받으며 만든 "공동 창작물"입니다.',
            '공동 창작인 만큼, 먼저 각자 어떤 작업에 흥미를 갖고 있는지, 주 관심사는 어떤 것인지 등 서로에 대해 이해하는 시간을 가졌습니다. 그런 과정을 통해 처음 만들게 된 것이 <멘넴X스투키, 장애물 점프>입니다.',
            '멘넴은 매일 그림을 그리는 창작자 입니다. 멘넴에게는 수 만장의 그림과 수 천개의 게시물이 있었고, 스투키는 멘넴이 구성한 세계관 안에서 멘넴의 창작물이 단순히 그려지고, 남겨지는 것이 아니라, 일정한 규칙 안에서 다양하게 보여지고, 활용될 수 있도록 하는데 초점을 맞췄습니다.',
            '이러한 관점으로 만들게 된 <장애물 점프>는 아주 간단한 점프 게임입니다. 꽃가루공꽃을 피해 열 다섯 명의 친구들을 모두 만나면 게임이 끝나게 됩니다.',
            '우리는 우리가 만난 자리에서 함께 <장애물 점프>의 대부분을 기획하고 만들어나갔습니다. 같이 게임을 기획하고, 음원과 이미지를 만들면서, 각자가 어떤 방식으로 사고를 하고 작업을 해 나가는지 볼 수 있었습니다.'
        ],
        linkItems: [ ],
        previewSliderItems: [
            { index: 0, title:'장애물 점프 타이틀 화면', desc: '멘넴이 작곡한 <장애물점프-여행의 시작> 음악이 흘러나오기 시작합니다.', imgUrl: '/assets/images/works/jumpgame/preview/0.png' },
            { index: 1, title: '캐릭터 선택 화면', desc: '멘넴이 고른 다섯 캐릭터 중에 하나를 고르면 게임이 시작됩니다.', imgUrl: '/assets/images/works/jumpgame/preview/1.png' },
            { index: 2, title: '게임 시작 화면', desc: '꽃가루공꽃을 피해 친구들을 만나 인사를 모두 하는 게 목표입니다.', imgUrl: '/assets/images/works/jumpgame/preview/2.png' },
            { index: 3, title: '게임 화면', desc: '첫 번째 친구 다롱이와 조우하자 다롱이가 자기 소개를 합니다.', imgUrl: '/assets/images/works/jumpgame/preview/3.png' },
            { index: 4, title: '골인 지점', desc: '모든 친구를 만나 인사를 하고 나면 게임이 끝나게 됩니다.', imgUrl: '/assets/images/works/jumpgame/preview/4.png' }
        ],
        previewContentItems: [
            { index: 0, title: '장애물 점프 타이틀 화면', desc: '멘넴이 작곡한 <장애물점프-여행의 시작> 음악이 흘러나오기 시작합니다.', imgUrl: '/assets/images/works/jumpgame/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '(ex)', desc: '게임 화면에 들어갈 이미지 소스를 함께 제작합니다.', imgUrl: '/assets/images/works/jumpgame/modal/0.png' },
            { index: 1, title: '(ex)', desc: '멘넴이 피날레 장면을 그리고 있습니다.', imgUrl: '/assets/images/works/jumpgame/modal/1.png' },
            { index: 2, title: '(ex)', desc: '게임에 맞는 음악을 만들어달라고 오선지를 건네자, 멘넴이 그 자리에서 작곡을 시작합니다.', imgUrl: '/assets/images/works/jumpgame/modal/2.png' },
            { index: 3, title: '(ex)', desc: '인터넷에서 찾은 피아노로 연주하여 녹음합니다. 운지가 어려워 키보드에 계이름을 적어두었습니다.', imgUrl: '/assets/images/works/jumpgame/modal/3.png' },
            { index: 4, title: '(ex)', desc: '완성된 게임 BGM 악보입니다.', imgUrl: '/assets/images/works/jumpgame/modal/4.png' },
            { index: 5, title: '(ex)', desc: '게임에 출연하는 캐릭터들을 되짚어보며 피날레를 그리는 모습입니다.', imgUrl: '/assets/images/works/jumpgame/modal/5.png' },
            { index: 6, title: '(ex)', desc: '게임 타이틀 화면을 그리고 있습니다.', imgUrl: '/assets/images/works/jumpgame/modal/6.png' },
            { index: 7, title: '(ex)', desc: '게임 타이틀 화면을 구상하고 있습니다.', imgUrl: '/assets/images/works/jumpgame/modal/7.png' },
            { index: 8, title: '(ex)', desc: '멘넴이 디자인 한 EXIT 이미지에 트레이싱지를 대고 선을 진하게 해서 다시 그립니다.', imgUrl: '/assets/images/works/jumpgame/modal/8.png' },
            { index: 9, title: '(ex)', desc: '게임에 출연하는 캐릭터들의 자기 소개 멘트도 녹음합니다.', imgUrl: '/assets/images/works/jumpgame/modal/9.png' },
            { index: 10, title: '(ex)', desc: '만들어진 게임을 직접 해봅니다.', imgUrl: '/assets/images/works/jumpgame/modal/10.png' },
            { index: 11, title: '(ex)', desc: '나름 재밌습니다 :)', imgUrl: '/assets/images/works/jumpgame/modal/11.png' }
        ]
    },
    { 
        id: 4,
        title: ['멘넴X스투키', '랜덤 캐릭터 생성기'],
        title_en: 'randomcharacter',
        summary: '특징이 뚜렷한 맨넴의 캐릭터들을 모듈화하여 자동으로 생성해서 새로운 조합의 형태를 보았습니다.',
        baseUrl: 'assets/images/works/randomcharacter/',
        year: '2017',
        tagInfo: {
            title: '인터랙티브 웹 콘텐츠',
            items: ['#아트링크', '#협업', '#p5.js']
        }, 
        descriptions: [
            '맨넴은 거의 매일 그림을 그립니다. 그림의 대부분은 캐릭터 그림인데, 그 캐릭터들에게서 자주 보이는 형태적인 특징들이 있습니다. 정면을 보고 팔다리를 쭉 뻗고 있거나, 허리 벨트를 하고 있거나, 남녀의 생김새 차이가 뚜렷하다는 점 등입니다.',
            '또한 캐릭터의 이름을 짓는 방식이나, 채색을 하는 방식에 있어도 규칙적이고 반복적이고 정해진 틀이 있다는 특징이 있습니다.',
            '우리는 이 규칙성과 반복성, 정형성에 주목하였고, 프로그래밍을 통해 멘넴의 규칙을 따르되 기존의 캐릭터와 다른, 낯선 캐릭터들을 자동으로 만들어내는 작업을 해보았습니다.',
            '멘넴의 규칙성 안에서 자동으로 만들어진 캐릭터들은 기존의 멘넴 캐릭터들과는 다른 낯선 모습을 가지고 있었지만, 각각의 새로운 캐릭터들에게 함께 이름을 지어주고, 사는 곳을 정해주고, 각자의 성격과 개성을 부여하면서 멘넴의 캐릭터 세상 속으로 받아들였습니다.'
        ],
        linkItems: [
            {
                title: '<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'
            }
        ],
        previewSliderItems: [
            { index: 0, title:'-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/0.png' },
            { index: 1, title: '-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/1.png' },
            { index: 2, title: '-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/2.png' },
            { index: 3, title: '-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/3.png' },
            { index: 4, title: '-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/4.png' }
        ],
        previewContentItems: [
            { index: 0, title: '-', desc: '-', imgUrl: '/assets/images/works/randomcharacter/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/0.png' },
            { index: 1, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/1.png' },
            { index: 2, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/2.png' },
            { index: 3, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/3.png' },
            { index: 4, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/4.png' },
            { index: 5, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/5.png' },
            { index: 6, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/6.png' },
            { index: 7, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/7.png' },
            { index: 8, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/8.png' },
            { index: 9, title: '(ex)', desc: '=', imgUrl: '/assets/images/works/randomcharacter/modal/9.png' }
         ],
    },
    { 
        id: 5,
        title: ['멘넴과의 코드스터디'],
        title_en: 'codestudy',
        summary: '새로운 매체 환경에서 글자가 어떤 가능성을 가지는지 실험해보았던 작업으로, 웹페이지 상에서 계속 변화하거나 보는 사람과 상호작용하는 레터링과 폰트를 제작하였습니다.',
        baseUrl: 'assets/images/works/codestudy/',
        year: '2016',
        tagInfo: {
            title: '인터랙티브 웹 콘텐츠',
            items: ['#아트링크', '#협업', '#p5.js'],
        },
        descriptions: [
            '스투키와 멘넴은 2016 SeMA 비엔날레의 <불확실한 학교>에서 참여 작가와 협력 작가의 관계로 처음 만났습니다. 우리는 그때 ‘상호의존’ 프로그램의 일환으로 코딩 수업을 잠시 진행했었고, 그 후 코딩에 흥미를 갖고 참여했던 멘넴에게 추가적으로 코딩을 알려드리게 되었습니다.',
            '<멘넴과의 코드스터디> 는 두 번의 짧은 스터디였지만, 이 기회를 통해 멘넴이 코딩을 통해 기존의 작업을 다양한 형태・상태로 재창작하거나, 새로운 창작에 대한 가능성을 최대한 볼 수 있도록 진행하였습니다.',
            '우선은 기존의 이미지를 활용한 재창작에 중심을 두고, 차곡차곡 기록되어있는 멘넴의 캐릭터들을 활용하여 간단한 상호작용이 가능한 형태의 웹 콘텐츠를 제작했습니다.',
            '그동안 멘넴이 창작해온 이미지들은 < 멘넴의 블로그> 에 고정된 게시물의 형태로 남아있었지만, 이번 코드스터디를 통해 각각의 이미지들이 상호 작용하는 형태로 변신하였습니다.'
        ],
        linkItems: [
           { title: '<멘넴X스투키 랜덤 캐릭터 생성기> 직접 랜덤 캐릭터를 생성 해볼 수 있습니다.', url: '#'}
        ],
        previewSliderItems: [
            { index: 0, title: '맨넴 캐릭터 생성기', desc:'화면을 클릭하면, 그동안 멘넴이 만들어온 캐릭터 중 하나가 랜덤으로 생성됩니다.', imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, title: '웰컴 투 멘넴 월드', desc:'멘넴이 캐릭터가 되어 자신이 그렸던 캐릭터 세상 속에 들어갑니다.', imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, title: '멘넴 마리오', desc: '멘넴이 친구들을 만나러 다닙니다. 키보드를 누르면, 멘넴이 인사를 하며 점프를 합니다.', imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
         ],
        previewContentItems: [ 
            { index: 0, title: '맨넴 캐릭터 생성기', desc:'화면을 클릭하면, 그동안 멘넴이 만들어온 캐릭터 중 하나가 랜덤으로 생성됩니다.', imgUrl: '/assets/images/works/codestudy/preview/m_0.gif' },
            { index: 1, title: '웰컴 투 멘넴 월드', desc:'멘넴이 캐릭터가 되어 자신이 그렸던 캐릭터 세상 속에 들어갑니다.', imgUrl: '/assets/images/works/codestudy/preview/m_1.gif' },
            { index: 2, title: '멘넴 마리오', desc: '멘넴이 친구들을 만나러 다닙니다. 키보드를 누르면, 멘넴이 인사를 하며 점프를 합니다.', imgUrl: '/assets/images/works/codestudy/preview/m_2.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '(ex)', desc: '과자를 먹으며 즐거운 수업', imgUrl: '/assets/images/works/codestudy/modal/0.png' },
            { index: 1, title: '(ex)', desc: '코드를 보면서 이것 저것 바꿔보고 있다.', imgUrl: '/assets/images/works/codestudy/modal/1.png' },
            { index: 2, title: '(ex)', desc: '멘넴의 노트에는 엄청난 양의 정겨운 캐릭터들이 있다', imgUrl: '/assets/images/works/codestudy/modal/2.png' },
            { index: 3, title: '(ex)', desc: '멘넴이 튤립이 되어 촬영한 사진들도 스프라이트 이미지를 만들기 위한 소스로 요긴하게 쓰였다 (사진출처: 로사이드)', imgUrl: '/assets/images/works/codestudy/modal/3.png' },
            { index: 4, title: '(ex)', desc: '버튼만 누르면 멘넴의 캐릭터들이 나오는 상황이 즐겁다', imgUrl: '/assets/images/works/codestudy/modal/4.png' },
            { index: 5, title: '(ex)', desc: '색깔이 바뀌는 신기한 펜을 써보기도 하고', imgUrl: '/assets/images/works/codestudy/modal/5.png' },
            { index: 6, title: '(ex)', desc: '코드에 대한 설명을 진지하게 경청 중인 멘넴', imgUrl: '/assets/images/works/codestudy/modal/6.png' }
        ]
    },
    { 
        id: 6,
        title: ['TED 강연 평가 시각화'],
        title_en: 'ted',
        summary: '강연에 대한 평가를 한눈에 파악할 수 있으면 어떨까? TED Talks의 각 강연에 대해 시청자들이 느낀 감정 데이터를 반영하여 캐릭터를 만들어보았습니다.',
        baseUrl: 'assets/images/works/ted/',
        year: '2016',
        tagInfo: {
            title: '자체 연구 프로젝트',
            items: ['#데이터 크롤링', '#데이터 시각화', '#실험', '#d3.js', '#svg'],
        },
        descriptions: [
            '우리는 스튜디오에서 하는 첫 실험으로 평소에 자주보던 TED Talks 사이트의 데이터를 시각화를 하기로 했습니다.',
            'TED Talks에 올라오는 강연들과 관련해서 시각화할 수 있는 다양한 데이터가 있었지만, 우리는 시청자들의 강연 평가 데이터에 관심을 가졌습니다. ',
            '강연 평가 데이터는 강연을 본 사람들이 감정에 대한 Inspiring(영감을 주는), Unconvincing(설득력이 없는) 등 13가지 항목 중 최대 3개 항목에 체크를 한 후 제출하는 방식으로 수집됩니다.',
            '우리의 최종 목적은 이 감정 데이터를 반영하여 사람 얼굴이나 캐릭터 같이 구체적인 형상을 지닌 다양한 이미지를 만들어보는 것이었습니다.',
            '시작은 가볍게 했지만, 실제 수집된 데이터를 바탕으로 그래프를 만들어가다보니 예상하지 못한 많은 어려움들이 있었습니다. 데이터의 분포가 한 쪽으로 치우쳐 있어서 생각했던만큼 다양한 모양이 나오지 않았고, 형태적으로 아름답기 위해서는 엄청나게 많은 조건식을 만들어야 했습니다. ',
            '데이터의 분포가 다양하지 않아 원하는 시각적 형태가 나오지 않게 되자, “다양하지 않은 데이터의 상태를 그대로 보여줘야 된다” 는 관점과 “원래 데이터와는 조금 다를 수 있지만 시각적 흥미를 위해서 데이터를 가공하는 게 좋다”는 관점 사이에서 고민을 하게 되었습니다. 프로젝트의 목적에 따라 어떤 관점을 취하느냐가 달라지겠지만요.',
            ' 이 프로젝트를 하며 무수한 삽질을 통해 데이터의 특성을 공부하고 체르노프 그래프를 활용해보고, SVG도 세밀하게 다뤄보는 볼 수 있어 즐거웠습니다.'
        ],
        linkItems: [ ],
        previewSliderItems: [
            { index: 0, title:'-', desc: '-', imgUrl: '/assets/images/works/ted/preview/0.png' },
            { index: 1, title: '-', desc: '-', imgUrl: '/assets/images/works/ted/preview/1.png' },
            { index: 2, title: '-', desc: '-', imgUrl: '/assets/images/works/ted/preview/2.png' },
            { index: 3, title: '-', desc: '-', imgUrl: '/assets/images/works/ted/preview/3.png' },
            { index: 4, title: '-', desc: '-', imgUrl: '/assets/images/works/ted/preview/4.png' }
        ],
        previewContentItems: [
            { index: 0, title: '-', desc: '-', imgUrl: '/assets/images/works/ted/preview/m_0.gif' }
        ],
        processSliderItems: []
    }
];