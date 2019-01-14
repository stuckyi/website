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


type participationWork = {
    year: number,
    title: string,
    host: string,
    role: string
}

export class About {
    interests: string[];
    praticipactionWokrs: participationWork[];
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


export const CONTENT_ABOUT = {
    interests: [
        '월경컵', '접근성', '인권', '운동',
        '기면증', '장애', '복지', '도시',
        '알레르기', '의사소통', '건강', '지도'
    ],
    participationWorks: [
        { year: 2017, title: '<청계천, 동대문 젠트리피케이션 - 리슨투더시티>', host: '서울도시건축비엔날레', role: '워크숍 참여' },
        { year: 2017, title: '<읽고 쓰는 오프라인 매핑 - 댄 파이퍼>', host: '서울도시건축비엔날레', role: '워크숍 참여' },
        { year: 2016, title: '<뉴게임플레이 NEW GAME PLAY>', host: '백남준아트센터', role: '참여 작가' },
        { year: 2016, title: '<코딩, 0부터 1까지>', host: '다음학교', role: '강의' },
        { year: 2016, title: '<불확실한 학교 Uncertainty School>', host: 'SeMA 비엔날레', role: '협력 작가' },
        { year: 2016, title: '<반응형 웹폰트 만들기>', host: '헤럴드디자인', role: '워크숍 참여, 전시' }
    ]
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
            { index: 0, title: '모여라 월경컵 메인화면', desc: '여러 월경컵들 중 정보를 보고 싶은 월경컵을 고를 수 있습니다.', imgUrl: '/assets/images/works/collection/preview/0.png' },
            { index: 1, title: '월경컵 별 상세페이지', desc: '루넷컵을 클릭하면 상세 정보를 볼 수 있는 페이지가 나옵니다.', imgUrl: '/assets/images/works/collection/preview/1.png' },
            { index: 2, title: '월경컵 부분 별 정보 제공', desc: '각각의 길이 정보에 마우스를 올리면 해당 부분의 길이만 표시가 됩니다.', imgUrl: '/assets/images/works/collection/preview/2.png' },
            { index: 3, title: '다른 월경컵 탐색', desc: '하단의 슬라이드를 통해 다른 월경컵의 정보도 볼 수 있습니다..', imgUrl: '/assets/images/works/collection/preview/3.png' },
            { index: 4, title: '데이터 수집, 정리, 기재 방법', desc: '모여라 월경컵에서 제공하는 정보에 대한 내용을 정리했습니다.', imgUrl: '/assets/images/works/collection/preview/4.png' },
            { index: 5, title: '월경컵 정보 분류 기준', desc: '저희가 월경컵의 각 부분에 대해 정보를 정리한 기준을 볼 수 있습니다.', imgUrl: '/assets/images/works/collection/preview/5.png' },
            { index: 6, title: '프로젝트 참여 안내', desc: '데이터 수집에 도움을 주시는 방법을 기록해두었습니다.', imgUrl: '/assets/images/works/collection/preview/6.png' },
            { index: 7, title: '길이 측정 방법 설명', desc: '길이를 측정하는 방법에 대한 설명입니다.', imgUrl: '/assets/images/works/collection/preview/7.png' }
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
            { title: 'CODED FONT를 정의한 발표 자료', url: 'https://www.slideshare.net/secret/so1lfatzsDllqG'},
            { title: '과정에 대한 기록을 해둔 트렐로(Trello) 보드', url: 'https://trello.com/b/X7FxBG8o/%EC%BD%94%EB%93%9C%EA%B8%80%EC%9E%90%EA%BC%B4-stuckyi-studio'},
            { title: '몇몇 실험을 캡쳐하여 모아둔 텀블러 페이지', url: 'http://stuckyi-codetype.tumblr.com/'}
        ],
        previewSliderItems: [ ],
        previewContentItems: [
            { index: 0, title:'틸트체', desc: '스마트폰 자이로센서 값에따라 글자 형태가 변하도록 했습니다.', imgUrl: '/assets/images/works/codedfont/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '특정 단어의 형태 변화 실험', desc: '각 글자의 위치에 있는 원의 크기의 변화 따라 글자의 형태가 보이기도하고, 보이지 않기도 합니다.', imgUrl: '/assets/images/works/codedfont/modal/0.gif' },
            { index: 1, title: '특정 단어의 형태 변화 실험', desc: '각 글자에 해당하는 좌표에 있는 직사각형의 회전 속도를 달리하면 일렁이는 글자처럼 보입니다.', imgUrl: '/assets/images/works/codedfont/modal/1.gif' },
            { index: 2, title: '특정 단어의 형태 변화 실험', desc: '기존에 있는 폰트를 리샘플링하여 형태에 대한 값을 추출한 뒤 변형시켜본 것입니다.', imgUrl: '/assets/images/works/codedfont/modal/2.gif' },
            { index: 3, title: '특정 단어의 형태 변화 실험', desc: '특정 키를 누르면 글자를 이루는 도형들의 배열이 랜덤으로 바뀝니다.', imgUrl: '/assets/images/works/codedfont/modal/3.gif' },
            { index: 4, title: '특정 단어의 형태 변화 실험', desc: '코드로 만든 벌레 캐릭터입니다. 특정 범위 내에서 생김새와 몸통의 색상, 다리의 각도 등이 랜덤으로 바뀝니다.', imgUrl: '/assets/images/works/codedfont/modal/4.png' },
            { index: 5, title: '특정 단어의 형태 변화 실험', desc: '랜덤으로 생성된 벌레 캐릭터들이 글자를 이루는 좌표로 둥실둥실 이동합니다. ', imgUrl: '/assets/images/works/codedfont/modal/5.gif' },
            { index: 6, title: '특정 단어의 형태 변화 실험', desc: '각 캐릭터들은 독립된 객체로 하나 하나 상호작용이 가능합니다.', imgUrl: '/assets/images/works/codedfont/modal/6.gif' },
            { index: 7, title: '모든 글자에 대한 형태 변화 실험', desc: '초,중,종성의 변화 규칙을 상상해봅니다.', imgUrl: '/assets/images/works/codedfont/modal/7.png' },
            { index: 8, title: '모든 글자에 대한 형태 변화 실험', desc: '코드를 짤 수 있게 구체적인 값으로 규칙을 만들어봅니다.', imgUrl: '/assets/images/works/codedfont/modal/8.png' },
            { index: 9, title: '모든 글자에 대한 형태 변화 실험', desc: '형태 변화를 하기 위한 인풋값은 기기의 기울기로 하기로 하고, 자이로스코프센서에 대한 값을 연구합니다.', imgUrl: '/assets/images/works/codedfont/modal/9.png' },
            { index: 10, title: '모든 글자에 대한 형태 변화 실험', desc: '각 축의 기울기 변화에 따라 어떤 형태변화를 줄지 정합니다.', imgUrl: '/assets/images/works/codedfont/modal/10.png' },
            { index: 11, title: '모든 글자에 대한 형태 변화 실험', desc: '코드를 짜고 스마트폰으로 실험해본 모습입니다.', imgUrl: '/assets/images/works/codedfont/modal/11.gif' },
            { index: 12, title: '모든 글자에 대한 형태 변화 실험', desc: '센서값을 이용해 다른 실험을 구상합니다. 글자를 이루는 영역 내 있던 생물들이 기울기에 영향을 받아 휩쓸려가는 것을 상상해봅니다. ', imgUrl: '/assets/images/works/codedfont/modal/12.png' },
            { index: 13, title: '모든 글자에 대한 형태 변화 실험', desc: '센서값에 따른 영향을 구체적으로 생각해봅니다.', imgUrl: '/assets/images/works/codedfont/modal/13.png' },
            { index: 14, title: '모든 글자에 대한 형태 변화 실험', desc: '캐릭터의 동작을 코드로 구현해보았습니다.', imgUrl: '/assets/images/works/codedfont/modal/14.gif' },
            { index: 15, title: '프로젝트 정리', desc: '했던 실험과, 실험하면서 들었던 생각과, 생각에 도움을 주었던 자료 등을 구분/정리하여 현재 어떤 생각을 하고 있는지 정리해보고 있습니다.', imgUrl: '/assets/images/works/codedfont/modal/15.jpeg' }
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
            '최종 인쇄물은 한 면당 18*20cm의 크기로 10페이지 분량의 일자 병풍 접지 형태로 나왔습니다.'
        ],
        linkItems: [ ],
        previewSliderItems: [ ],
        previewContentItems: [ 
            { index: 0, title:'-', desc: '', imgUrl: '/assets/images/works/codedfont/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '-', desc: '실제 인쇄물의 앞표지, 뒷표지입니다.', imgUrl: '/assets/images/works/kohi-brochure/modal/0.png' },
            { index: 1, title: '-', desc: '인쇄물을 모두 펼쳤을 때 앞면 / 뒷면입니다.', imgUrl: '/assets/images/works/kohi-brochure/modal/1.png' },
            { index: 2, title: '-', desc: '속지 클로즈업!', imgUrl: '/assets/images/works/kohi-brochure/modal/2.png' },
            { index: 3, title: '-', desc: '브로슈어에 들어간 일러스트 일부입니다.', imgUrl: '/assets/images/works/kohi-brochure/modal/3.png' },
            { index: 4, title: '-', desc: '최종적으로 인쇄하지는 않았지만 이렇게 십자모양으로 펼쳐지는 버전도 있습니다. ', imgUrl: '/assets/images/works/kohi-brochure/modal/4.gif' }   
        ]
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
        linkItems: [ ],
        previewSliderItems: [
            { index: 0, title:'랜덤 캐릭터 생성기 구현 모습', desc: '멘넴의 다양한 그림들이 조합되어 이제까지 없던 새로운 형태의 캐릭터가 만들어진다.', imgUrl: '/assets/images/works/randomcharacter/preview/0.gif' }
        ],
        previewContentItems: [
            { index: 0, title:'랜덤 캐릭터 생성기 구현 모습', desc: '멘넴의 다양한 그림들이 조합되어 이제까지 없던 새로운 형태의 캐릭터가 만들어진다.', imgUrl: '/assets/images/works/randomcharacter/preview/m_0.gif' }
        ],
        processSliderItems: [
            { index: 0, title: '(ex)', desc: '멘넴의 캐릭터에서 얼굴, 머리, 눈, 코, 입, 상의 등을 따로 모듈화해서 랜덤으로 뽑아서 다시 손으로 그려 조합하는 게임을 해보고 있습니다.', imgUrl: '/assets/images/works/randomcharacter/modal/0.png' },
            { index: 1, title: '(ex)', desc: '새로운 모듈을 만들고 다음에 만날 때까지 일러스트레이터로 벡터이미지로 만들어오기로 합니다.', imgUrl: '/assets/images/works/randomcharacter/modal/1.png' },
            { index: 2, title: '(ex)', desc: '랜덤으로 조합해서 나온 캐릭터, 멘넴은 이름도 초중종성을 결합한 듯이 알 수 없는 이름인 “갓쇔본”토끼로 지었습니다. ', imgUrl: '/assets/images/works/randomcharacter/modal/2.png' },
            { index: 3, title: '(ex)', desc: '모듈을 조합하는 규칙을 고민합니다.', imgUrl: '/assets/images/works/randomcharacter/modal/3.png' },
            { index: 4, title: '(ex)', desc: '초중종성도 랜덤으로 조합해보기로 합니다.', imgUrl: '/assets/images/works/randomcharacter/modal/4.png' },
            { index: 5, title: '(ex)', desc: '초중종성을 랜덤으로 조합하자 이런 이름들이 나왔습니다.', imgUrl: '/assets/images/works/randomcharacter/modal/5.png' },
            { index: 6, title: '(ex)', desc: '디지털화 하는 작업을 합니다.', imgUrl: '/assets/images/works/randomcharacter/modal/6.png' },
            { index: 7, title: '(ex)', desc: '조합의 규칙과 기준선 등을 이해하보기 위해 직접 프린트해서 조합해봅니다.', imgUrl: '/assets/images/works/randomcharacter/modal/7.png' },
            { index: 8, title: '(ex)', desc: '모듈을 하나 하나씩 자르는 과정은 역시 노가다입니다.', imgUrl: '/assets/images/works/randomcharacter/modal/8.png' },
            { index: 9, title: '(ex)', desc: '로사이드에서 작업 중인 모습', imgUrl: '/assets/images/works/randomcharacter/modal/9.png' },
            { index: 10, title: '(ex)', desc: '규칙에 따라 손으로 조합해본 모듈입니다.', imgUrl: '/assets/images/works/randomcharacter/modal/10.png' },
            { index: 11, title: '(ex)', desc: '조합을 위한 가이드라인을 만든 후 진행한 것입니다.', imgUrl: '/assets/images/works/randomcharacter/modal/11.png' } 
         ],
    },
    { 
        id: 5,
        title: ['멘넴과의 코드스터디'],
        title_en: 'codestudy',
        summary: '멘넴의 기존 창작물을 다양한 형태로 공동창작하는 작업이었습니다',
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
           { title: '코드스터디에대한 자세한 내용을 볼 수 있는 Github 링크', url: 'https://github.com/stuckyi/codestudy'}
        ],
        previewSliderItems: [
            { index: 0, title: '맨넴 캐릭터 생성기', desc:'화면을 클릭하면 멘넴이 그동안 만들어온 캐릭터들이 랜덤으로 생성되는 인터랙티브 콘텐츠입니다.', imgUrl: '/assets/images/works/codestudy/preview/0.gif' },
            { index: 1, title: '웰컴 투 멘넴 월드', desc:'멘넴이 키티와 함께 멘넴의 세상을 걸어다닙니다. 키보드를 누르면 몸이 뒤로 젖혀집니다.', imgUrl: '/assets/images/works/codestudy/preview/1.gif' },
            { index: 2, title: '멘넴 마리오', desc: '멘넴이 친구들을 만나러 다닙니다. 키보드를 누르면 멘넴이 소리를 내며 점프합니다.', imgUrl: '/assets/images/works/codestudy/preview/2.gif' }
         ],
        previewContentItems: [ 
            { index: 0, title: '맨넴 캐릭터 생성기', desc:'화면을 클릭하면 멘넴이 그동안 만들어온 캐릭터들이 랜덤으로 생성되는 인터랙티브 콘텐츠입니다.', imgUrl: '/assets/images/works/codestudy/preview/m_0.gif' },
            { index: 1, title: '웰컴 투 멘넴 월드', desc:'멘넴이 키티와 함께 멘넴의 세상을 걸어다닙니다. 키보드를 누르면 몸이 뒤로 젖혀집니다.', imgUrl: '/assets/images/works/codestudy/preview/m_1.gif' },
            { index: 2, title: '멘넴 마리오', desc: '멘넴이 친구들을 만나러 다닙니다. 키보드를 누르면 멘넴이 소리를 내며 점프합니다..', imgUrl: '/assets/images/works/codestudy/preview/m_2.gif' }
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
            
        ],
        previewContentItems: [],
        processSliderItems: [
            { index: 0, title:'-', desc: '평가하는 단어를 긍정 / 부정의 두 카테고리로 나누고 색을 분류하여 시각화하면 어떨까 아이데이션 해보았습니다.', imgUrl: '/assets/images/works/ted/modal/0.png' },
            { index: 1, title: '-', desc: '평가하는 단어의 느낌을 얼굴에 나타낼 수 있을까 스케치해보았습니다. 예를 들어 confusing(혼란스러운)이 있으면 캐릭터의 고개가 갸우뚱거리는 식으로요.', imgUrl: '/assets/images/works/ted/modal/1.jpg' },
            { index: 2, title: '-', desc: '캐릭터의 몸통도 데이터를 반영하여 변화하게끔, 코드로 조절할 수 있는 형태들 중 복잡한 형태들을 찾아보고 캐릭터화해본 스케치입니다.', imgUrl: '/assets/images/works/ted/modal/2.png' },
            { index: 3, title: '-', desc: '컨트롤하기 어렵지 않고, 이목구비의 위치 변화도 상대적으로 더 자유롭게 할 수 있도록 땅콩 모양의 곡선으로 된 몸체에 데이터를 반영하기로 합니다. ', imgUrl: '/assets/images/works/ted/modal/3.png' },
            { index: 4, title: '-', desc: '땅콩 모양을 만들기 위해 기본이 되는 도형의 좌표값을 구합니다.', imgUrl: '/assets/images/works/ted/modal/4.png' },
            { index: 5, title:'-', desc: '땅콩 모양을 만들기 위해 기본이 되는 도형의 좌표값을 구합니다.', imgUrl: '/assets/images/works/ted/modal/5.png' },
            { index: 6, title: '-', desc: '계산한 좌표값이 맞는지 확인도 해보구요.', imgUrl: '/assets/images/works/ted/modal/6.png' },
            { index: 7, title: '-', desc: '데이터에 따라 이런 다양한 형태를 얻을 수 있습니다.', imgUrl: '/assets/images/works/ted/modal/7.png' },
            { index: 8, title: '-', desc: '이목구비와 팔다리를 달고 색을 부여하면 이런 다양한 캐릭터가 나올거라고 예상해보았습니다.', imgUrl: '/assets/images/works/ted/modal/8.jpeg' },
            { index: 9, title: '-', desc: '데이터에 따른 이목구비의 위치와 크기 변화의 규칙도 정합니다.', imgUrl: '/assets/images/works/ted/modal/9.png' },
            { index: 10, title:'-', desc: '예상안을 바탕으로 나머지 작업을 합니다. 값이나 범위가 잘못될 경우에 웬 희안한 모양이 다 나옵니다.', imgUrl: '/assets/images/works/ted/modal/10.png' },
            { index: 11, title: '-', desc: '팔을 다는 위치와 팔꿈치의 각도도 계산합니다.', imgUrl: '/assets/images/works/ted/modal/11.png' },
            { index: 12, title: '-', desc: '팔과 손은 다른 깊이에 있어야 예쁘게 나오기 때문에 따로 분리하여 계산해줍니다.', imgUrl: '/assets/images/works/ted/modal/12.png' },
            { index: 13, title: '-', desc: '몸, 팔, 이목구비, 색을 적용해본 모습입니다.', imgUrl: '/assets/images/works/ted/modal/13.png' },
            { index: 14, title: '-', desc: '데이터를 적용하여 나온 캐릭터들 중 일부입니다. 데이터의 분포를 반영하여 무리없는 선에서 진행하다보니 생각보다 다채로운 캐릭터가 도출되진 않았지만 수많은 계산과 시행착오 끝에 나온 캐릭터들이라 애착이 갑니다.', imgUrl: '/assets/images/works/ted/modal/14.png' }
        ]
    }
];