var colOption1 = [
    {key:'num', headline:'Num', width:'40px', align:'center',indent:'0'},
    {key:'file', headline:'파일',width:'auto',align:'left',indent:'5px'},
    {key:'etc', headline:'비고',width:'34px',align:'center',indent:'0'}
];
// 오버레이 리스트
var rowData1 = [
    {'file':'Twd 기획전 템플릿 가이드', 'url':'http://150.24.218.42:8080/temp', 'target':'_blank', 'etc':'·'},
    {'file':'Css 공통 가이드', 'url':'http://150.24.218.42:8080/css', 'target':'_blank', 'etc':'·'},
    {'file':'반응형 컴퍼넌트 가이드', 'url':'http://150.24.218.42:8080/resp', 'target':'_blank', 'etc':'·'},
    {'file':'스와이퍼 돔컨트롤 사용 가이드', 'url':'http://150.24.218.42:8080/swiper', 'target':'_blank', 'etc':'·'},
    {'file':'Twd 운영 가이드', 'url':'http://150.24.218.42:8080/twd', 'target':'_blank', 'etc':'·'},
    {'file':'가이드1', 'url':'http://150.24.218.42:8080/guide', 'target':'_blank', 'etc':'·'},
    {'file':'아웃룩', 'url':'http://150.24.218.42:8080/out', 'target':'_blank', 'etc':'·'},
    {'file':'주작 톡', 'url':'http://150.24.218.42:8080/talk', 'target':'_blank', 'etc':'·'},
    {'file':'Flex 가이드', 'url':'http://150.24.218.42:8080/flex-guide/', 'target':'_blank', 'etc':'·'},
    {'file':'이미지 포지션 값 추출기', 'url':'http://150.24.218.42:8080/img', 'target':'_blank', 'etc':'·'},
    {'file':'Console Error 정리', 'url':'http://150.24.218.42:8080/error', 'target':'_blank', 'etc':'·'},
    {'file':'커피 자판기', 'url':'http://150.24.218.42:8080/machine', 'target':'_blank', 'etc':'·'},
];

// Gnb 리스트
var gnbList = [
    {
        name:'Info',
        url:'index.html'
    },
    {
        name:'History',
        url:'profile.html'
    },
    {
        name:'HTTP Status',
        url:'http-status.html'
    },
/*    {
        name:"It 용어 번역 검색",
        url:'ittt.html'
    },
    {
        name:"웹 접근성 정보",
        url:'web-accessibility.html'
    },
    {
        name:"스크린 정보",
        url:'screen-size.html'
    },
    {
        name:"Code Snippet",
        url:'event-group.html'
    },*/
];
//관심사 리스트
var InterestList = [
    {
        name:'VR',
        src:"",
        desc:"현재 오큘러스 퀘스트2를 구매하였고, 열심히 즐기고 있다."
    },
    {
        name:'VR',
        src:"",
        desc:"현재 오큘러스 퀘스트2를 구매하였고, 열심히 즐기고 있다."
    },
]

//업무 내역
var historyLog = [
    {
        img: [
            'images/list/hankook-pc.jpg',
            '',
            'images/list/hankook-mobile.jpg',
        ],
        type :'운영',
        name:'[KR][GLOBAL][LOCAL]한국타이어 글로벌 사이트 운영 업무 (진행중)',
        date:'2020.04 ~ 2021.03~',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL:1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Doctype : XHtml 1.0(PC), Doctype : HTML5(Mobile). Css1~3, jQuery',
        tool: 'Svn, eclipse, AEM',
        support :'PC는 ie 11 이상, 기타 다른 브라우져 최신버전, Mobile은 최소해상도 360, 최적 해상도 375 Iphone 6/7/8.',
        description:'',
        feedback:'jAVA(이클립스) & AEM(CMS) 환경구성으로 편집툴이 제공된다. 편집툴이 제공 된다는 것은 모든 페이지가 템플릿화(GUI) 되어 있어 접근성이 좋다는 의미이다. 웹에 대한 지식이 부족한 사람도 AEM 사용 방법을 배워 컨텐츠를 수정하고 등록하는게 어렵지 않다. 프론트 및 백 엔드 파트에 대한 의존성이 JAVA만 사용하는 환경 구성보다 낮은 편이다. 퍼블리셔 1명에 개발자 2명이 50개가 넘는 홈페이지를 관리 할 수 있는 것도 그때문이다.',
        url:'https://www.hankooktire.com/kr/',
        rate  : 4
    },
    {
        img: [
            'images/list/hankook-all-pdp-modify-pc.jpg',
            '',
            'images/list/hankook-all-pdp-modify-mo.jpg',
        ],
        type :'단기 고도화 프로젝트 (추가 계약)',
        name:'[KR][GLOBAL][LOCAL] 한국 타이어 제품 상세 페이지 사이드 컨텐츠 고도화 작업',
        date:'2020.11 ~ 2021.01',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL 1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Doctype : XHtml 1.0(PC), Doctype : HTML5(Mobile). Css1~3, jQuery',
        tool: 'Svn, eclipse, AEM',
        support :'PC는 ie 11 이상, 기타 다른 브라우져 최신버전, Mobile은 최소해상도 360, 최적 해상도 375 Iphone 6/7/8.',
        description:'',
        feedback:'사이드 컨테츠 마크업이 동일한 레이아웃인데도 불구하고 여러 타입의 마크업이 혼용되어 사용되고 있었다. 해당 작업을 진행하면서 해당 사이드 쪽을 공통화하는게 큰 목표였다.',
        url:'https://www.hankooktire.com/kr/tires-product/passenger-cars/hankook-kinergy-4s2-h750.html',
        rate  : 4
    },
    {
        img: [
            'images/list/hankook-brand-page-winter-icept-pc.jpg',
            '',
            'images/list/hankook-brand-page-winter-icept-mobile.jpg',
        ],
        type :'단기 제작 프로젝트 (추가 계약)',
        name:'[KR] 한국타이어 브랜드 윈터아이셉트 페이지 제작',
        date:'2020.10 ~ 2020.10',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL 1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Doctype : XHtml 1.0(PC), Doctype : HTML5(Mobile). Css1~3, jQuery',
        tool: 'Svn, eclipse, AEM',
        support :'PC는 ie 11 이상, 기타 다른 브라우져 최신버전, Mobile은 최소해상도 360, 최적 해상도 375 Iphone 6/7/8.',
        description:'앞서 만든 브랜드 벤투스 페이지 템플릿을 복사하여 제작하였다. ',
        feedback:'',
        url:'https://www.hankooktire.com/kr/tires-product/ventus.html',
        rate  : 4
    },
    {
        img: [
            'images/list/hankook-brand-page-renewal-pc.png',
            '',
            'images/list/hankook-brand-page-renewal-mobile.png',
        ],
        type : '단기 제작 프로젝트 (추가 계약)',
        name:'[KR] 한국타이어 브랜드 벤투스 페이지 리뉴얼',
        date:'2020.07 ~ 2020.07',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL 1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Doctype : XHtml 1.0(PC), Doctype : HTML5(Mobile). Css1~3, jQuery',
        tool: 'Svn, eclipse, AEM',
        support :'PC는 ie 9 이상, 기타 다른 브라우져 최신버전, Mobile은 최소해상도 360, 최적 해상도 375 Iphone 6/7/8.',
        description:'',
        feedback:'전체 이미지 및 레이아웃 구조 변경, 인터렉션 추가등의 작업이 진행 되었고, 125%로 주로 보는 고객사의 요구에 따라 해상도 조정이 진행 되었다. 동영상 중간에 탭기능이 추가 됨에 따라, 탭을 클릭시 기존에 재생 중이던 비디오를 컨트롤 할 수 있도록 기존의 탭 함수에 동영상 제어가 되도록 커스텀 하였다.',
        url:'https://www.hankooktire.com/kr/tires-product/ventus.html',
        rate  : 4
    },
    {
        img: [
            'images/list/hankook-brand-page-pc.jpg',
            '',
            'images/list/hankook-brand-page-mobile.jpg',
        ],
        type : '단기 제작 프로젝트 (추가 계약)',
        name:'[KR[ 한국타이어 브랜드 벤투스 페이지 제작',
        date:'2020.06 ~ 2020.06',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL 1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Doctype : XHtml 1.0(PC), Doctype : HTML5(Mobile). Css1~3, jQuery',
        tool: 'Svn, eclipse, AEM',
        support :'PC는 ie 9 이상, 기타 다른 브라우져 최신버전, Mobile은 최소해상도 360, 최적 해상도 375 Iphone 6/7/8.',
        description:'',
        feedback:'브랜드 카테고리가 생성되면서, 추후 확장성을 고려한 비쥬얼 페이지용 템플릿 형태로 제작 하였다. 고객사의 유튜브 재생 버튼을 커스텀화 시켜 달라는 요청으로 유튜브 API 함수를 활용하여 만들었고, 멀티로 사용 할 수 있도록 추가적인 커스텀이 진행 되었다.',
        url:'https://www.hankooktire.com/kr/tires-product/ventus.html',
        rate  : 4
    },
    {
        img: [
            'images/list/t-station-pc.jpg',
            '',
            'images/list/t-station-mobile.jpg',
        ],
        type : '운영',
        name:'[KR] 티스테이션 운영 업무',
        date:'2020.04 ~ 2020.07.09',
        agency:'Concentrix Korea',
        customer:'한국타이어',
        position: 'PL (PL:1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Html, Css, jQuery',
        tool: 'Svn, eclipse',
        support :'PC는 ie 11 이상, 기타 다른 5대 브라우져 최신버전, Mobile은 375 Iphone 6/7/8.',
        description:'',
        feedback:'업무 프로세스가 잘 정의 되어 있었고, 각 파트분들과 협업하는데 있어 원활한 소통이 진행 되었다.  코딩 가이드, 스타일 가이드 등이 잘 잡혀 있어 작업하는데 어려움이 없었다. 작업 방식은 IDE는 이클립스를 통해서 작업이 진행 되었고, SVN으로 형상 관리를 하였다.',
        url:'https://www.tstation.com/',
        rate  : 4
    },
    {
        img: [
            'images/list/laufenn-pc.jpg',
            '',
            'images/list/laufenn-mobile.jpg',
        ],
        type : '운영',
        name:'[LOCAL] 라우펜 글로벌 사이트 운영 업무',
        date:'2020.03 ~ 2020.6',
        agency:'Concentrix Korea',
        customer:'한국 타이어',
        position: 'PL/PA (PL:1명, PA:1명)',
        process:'Pc & Mobile Web Publishing',
        language:'Html, Css, jQuery',
        tool: 'Svn, eclipse',
        support :'PC는 ie 6~8 이상, 기타 다른 5대 브라우져 최신버전, Mobile은 375 Iphone 6/7/8. ',
        description:'',
        feedback:'전체적으로 라이브러리가 예전 버전이라 API 콜백함수들의 지원이 낮아 버그가 많았다. 중국 사이트의 경우 IE6까지 고려해야 하는 등 개선이 시급해 보였다. 추가 계약으로 향후 영국을 시작으로 메인 및 일부 카테고리 소개 화면등이 리뉴얼 될 예정이다.',
        url:'https://www.laufenn.com/kr/front/kr_front/index.do',
        rate  : 4
    },
    {
        img: [
            'images/list/twd-pc.png',
            '',
            'images/list/twd-mobile.png',
        ],
        type : '운영',
        name:'T World Direct 프로젝트',
        date:'2018.12 ~ 2020.1',
        agency:'이모션 글로벌',
        customer:'SKT',
        position: 'PA (PL:1명, PA:2명)',
        process:'기획전, 특장점, 약관, 부가서비스, 게이트 프로모션, 메인 배너 등 Tshop 카테고리 전반 유지 보수 관리',
        language:'Html, Css, jQuery',
        tool: 'Svn, Git',
        support :'PC는 ie 9, 기타 다른 브라우져 최신버전, Mobile은 최신 버전 브라우저.',
        description:'',
        feedback:'업무 자체가 난이도가 높지는 않다. 어느 정도의 UI개선과 이벤트 페이지 제작등을 주로 하였다. 업무의 편의를 위해 당시 이미지 맵을 쉽게 처리 할 수 있는 제네레이터를 만들어 사용하였다. 개발 기획과 운영 기획이 나뉘어 있어서, 세분화 된 점이 이 프로젝트의 좋은 장점 중 하나이다. 좀 아쉬운 것이 있다면 업무 프로세스가 작업자를 너무 힘들게 하였다.',
        url:'https://shop.tworld.co.kr/shop/main',
        rate  : 4
    },
    {
        img: [
            'images/list/multi-campus-pc.png',
            '',
            'images/list/multi-campus-mobile.png',
        ],
        type : '구축',
        name:'삼성 멀티캠퍼스 청년 SW 아카데미 프로젝트',
        date:'2018.8 ~ 2018.12 ',
        agency:'이모션 글로벌',
        customer:'삼성 멀티캠퍼스',
        position: 'PL (단독 투입)',
        process:'페이지 제작, UI 스크립트 제작 등 구축 전반',
        language:'Html, Css, jQuery',
        tool: 'Filezila FTP',
        support :'PC는 ie 9, 기타 다른 브라우져 최신버전, Mobile은 최신 버전 브라우저.',
        description:'신규 사이트 구축' ,
        feedback:'긴급하게 투입 된 만큼 상황은 열악했다. 일정이 부족했고, 인력도 부족했다. 투입 당시 10여장이였는데 종료 될 쯤에는 이미 60여장의 페이지들이 제작 되어 있었다. 초기 투입 기간이 2~3주였는데, 추가 계약으로 진행되어 3~4달 정도 진행하게 되었다. 적응형으로 시작해서 반응형으로 끝난 프로젝트.',
        url:'https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp',
        rate  : 4
    },
    {
        img: [
            'images/list/mohaji-pc.png',
            '',
            'images/list/mohaji-mobile.png',
        ],
        type : '프론트엔드 구축',
        name:'하나투어 모하지 프로젝트',
        date:'2018.3 ~ 2018.7 ',
        agency:'이모션 글로벌',
        customer:'하나투어',
        position: 'PA (PL:1명, PA:4~5명)',
        process:'API 연동, 페이지 제작, 컴퍼넌트 제작',
        language:'node, javascript, vue, scss, html',
        tool:'Git',
        support :'최신 브라우저',
        description:'신규 사이트 구축 (프론트 엔드 개발)' ,
        feedback:'',
        url:'https://www.mohaji.com/ko',
        rate  : 4
    },
    {
        img: [
            'images/list/amore-csr-pc.png',
            '',
            'images/list/amore-csr-mobile.png',
        ],
        type : '구축',
        name:'아모레 퍼시픽 사회 공헌 CSR 프로젝트',
        date:'2017.9 ~ 2017.12 ',
        agency:'이모션 글로벌',
        customer:'아모레 퍼시픽',
        position: 'PA (PL:1명, PA:4~5명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP, Svn',
        support :'ie9~ 기타 다른 최신 브라우저 및 모바일은 선정한 기종',
        description:'반응형 사이트였으며, 접근성 인증마크 획득이라는 조건이 있었다. 허나 기획당시 접근성이 전혀 고려 되지 않게 기획, 디자인이 진행 되었고, 대부분의 결과물들을 수정해야하는 일정 지연이 발생했다. 사수가 첫 PL을 맡아서 이끌어가는데 조금 부족한점도 있었고, 일정지연으로 인한 인력 추가 투입에도 문제가 있었다. 그래서 새벽 3시 30분에 퇴근하고, 아침 9시에 다시 출근하는 최악의 경우가 오래 지속되었다.' ,
        feedback:'12월 4일 새벽3시 30분에 퇴근하다가, 교통사고가 나서 수술및 입원을 하여 도중 프로젝트에서 하차하게 되었다. 끝 마무리를 함께 하지 못해 아쉬운 프로젝트이다. 이 프로젝트는 역대급으로 야근은 많이 했지만 실력있고, 인성 좋은 사람들을 많이 만나서 일이 즐거웠던 추억이 있다. 접근성 관련 기술을 많이 습득했고, 반응형에 대한 실력도 많이 좋아지게 되었다.',
        url:'http://www.apgroupcsr.com/index.do#first-sec',
        rate  : 4
    },
    {
        img: [
            'images/list/interpark-ent-pc.png',
            '',
            'images/list/interpark-ent-mobile.png',
        ],
        type : '구축',
        name:'인터파크 엔터테인먼트 프로젝트',
        date:'2017.7 ~ 2017.8 ',
        agency:'이모션 글로벌',
        customer:'INTERPARK Ent.',
        position: 'PA (PL:1명, PA:1명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'PC web과 Mobile web을 제작 하였고, 실력있는 기획자, 디자이너와 시너지를 낼 수 있었던 프로젝트이다. 어떠한 리스크도 없이 계획한 일정이 준수 되었고, 완료 후에도 일주일동안 가벼운 2~3번의 보수를 진행 한것이 전부인 유일한 프로젝트이다. ' ,
        feedback:'정말 실력 좋은 기획자와 디자이너를 만나 잘 진행 되었던 프로젝트이고, 웹에 대한 견문을 넓힐 수 있는 좋은 계기가 되었다. PL은 PC 버전 나는 Mobile 버전을 책임지고 맡아서 진행 하였고, 제이쿼리를 응용한 기술들을 실무에 적용하는 좋은 계기가 되었다. ',
        url:'http://www.interparkenter.com/Home/Main',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
        ],
        type : '제안사이트 제작',
        name:'Cj_ONE_모바일_고도화 프로젝트',
        date:'2017.6 ~ 2017.6 ',
        agency:'이모션 글로벌',
        customer:'CJ',
        position: 'PA (PL:1명, PA:1명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'모바일 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/yc-pc.png',
            '',
            'images/list/yc-mobile.png',
        ],
        type : '구축 지원',
        name:'법무법인 율촌 프로젝트',
        date:'2017.6 ~ 2017.6 ',
        agency:'이모션 글로벌',
        customer:'율촌',
        position: 'PA',
        process:'하자 보수' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'최신 브라우저',
        description:'' ,
        feedback:'',
        url:'https://www.yulchon.com/ko/main/main.do',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
        ],
        type : '제안사이트 제작',
        name:'삼성클라우드 프로젝트',
        date:'2017.5 ~ 2017.7 ',
        agency:'이모션 글로벌',
        customer:'삼성',
        position: 'PA (PL:1명, PA:4명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/huyndai-electric-pc.png',
            '',
            '',
        ],
        type : '구축 & 유지보수',
        name:'현대 일렉트릭 프로젝트',
        date:'2017.3 ~ 2017.4 ',
        agency:'이모션 글로벌',
        customer:'현대 중공업',
        position: 'PA (PL:1명, PA:2명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'Svn',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'http://www.hyundai-electric.com/elec/ko/biz/bizIndustrial2.jsp',
        rate  : 4
    },
    {
        img: [
            'images/list/bon-if-pc.png',
            '',
            'images/list/bon-if-mobile.png',
        ],
        type : '구축 지원',
        name:'본아이에프 리뉴얼 프로젝트',
        date:'2017.2 ~ 2017.4 ',
        agency:'이모션 글로벌',
        customer:'본아이에프(주)',
        position: 'PA (PL:1명, PA:1명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP, Svn',
        support :'',
        description:'' ,
        feedback:'',
        url:'https://www.bonif.co.kr/',
        rate  : 4
    },
    {
        img: [
            'images/list/pizza-hut-pc.png',
            'images/list/pizza-hut-tablet.png',
            'images/list/pizza-hut-mobile.png',
        ],
        type : '구축 지원',
        name:'피자헛 To-be 사이트 리뉴얼 프로젝트',
        date:'2017.1 ~ 2017.1 ',
        agency:'이모션 글로벌',
        customer:'INTERPARK Ent.',
        position: 'PA (PL:1명, PA:1명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'',
        description:'' ,
        feedback:'',
        url:'https://www.pizzahut.co.kr/',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
        ],
        type : '자사 프로모션',
        name:'이모션 사내 런드라타임 반응형 페이지 제작 프로젝트',
        date:'2017.1 ~ 2017.1 ',
        agency:'이모션 글로벌',
        customer:'이모션 글로벌',
        position: 'PA (PL:1명, PA:1명)',
        process:'페이지 제작, UI스크립트 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
        ],
        type : '운영',
        name:'피자헛 As-is 사이트 프로젝트',
        date:'2016.7 ~ 2017.1 ',
        agency:'이모션 글로벌',
        customer:'피자헛',
        position: 'PL (PL:1명)',
        process:'배너, 기획전, 특장점, 게이트 프로모션 등 사이트 전반 유지 보수 관리.' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'https://www.pizzahut.co.kr/',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
        ],
        type : '구축 및 운영 유지 보수',
        name:'88인력 사이트 프로젝트',
        date:'2016.5 ~ 2016.5 ',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            'images/list/999tv-admin-mobile.jpg',
        ],
        type : '구축 및 운영 유지 보수',
        name:'자사 메인사이트 모바일용 Admin 구축 프로젝트',
        date:'2016.3 ~ 2016.4 ',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/999tv-2-pc.png',
            '',
            '',
        ],
        type : '리뉴얼 및 운영 유지 보수',
        name:'자사 메인사이트 2차 리뉴얼 프로젝트',
        date:'2015.6 ~ 2016.2 ',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/lawcall-pc.jpg',
            '',
            '',
        ],
        type : '구축 및 운영 유지 보수',
        name:'자사 법률 ARS 사이트 구축 프로젝트',
        date:'2015.3 ~ 2015.5',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/unse999-2-pc.jpg',
            '',
            '',
        ],
        type : '구축 및 운영 유지 보수',
        name:'자사 운세 ARS 2차 사이트 프로젝트',
        date:'2014.6 ~ 2015.3',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/unse999-pc.jpg',
            '',
            '',
        ],
        type : '구축 및 운영 유지 보수',
        name:'자사 운세 ARS 1차 사이트 프로젝트',
        date:'2013.10 ~ 2014.5',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
    {
        img: [
            'images/list/999tv-pc.jpg',
            '',
            '',
        ],
        type : '리뉴얼 및 운영 유지 보수',
        name:'자사 메인사이트 1차 리뉴얼 프로젝트',
        date:'2013.1 ~ 2013.9',
        agency:'주)패밀리투',
        customer:'주)패밀리투',
        position: 'PL (PL:1명)',
        process:'페이지 기획, 디자인, 제작' ,
        language:'Html, css, jQuery',
        tool:'FTP',
        support :'ie9~ 기타 다른 최신 브라우저',
        description:'' ,
        feedback:'',
        url:'',
        rate  : 4
    },
];

// 위로 메세지
var encouragement = [
    '오늘 하루도 수고 많았어',
    '그럴 수도 있지',
    '힘들면 그만해도 돼',
    '괜히 스트레스 받지마',
    '어쩔 수 없지 뭐 너무 신경 쓰지마',
    '너무 애쓰지 않아도 돼',
    '다들 그러고 살더라',
    '술이나 한잔 하자!',
    '인생 뭐 있냐! 니 승질대로 해~!',
    '네가 어떤 삶을 살든 나는 너를 응원 할꺼야',
    '이래야만 하는 건 없어',
    '너를 만난 순간부터 하루하루가 행복이야',
    '나는 네가 마음껏 행복했으면 좋겠어',
    '그래도 괜찮아',
    '오늘 하루 어땠어? 별일 없었어? 말 안해도 알아.. 많이 힘들었구나.',
    '나는 네가 너라서 좋아.',
    '처음부터 겁먹지 말어. 막상 가보면 아무것도 아닌 게 세상에는 참 많어.',
    '넌 언제나 잘하고 있어',
    '천천히 와도 되니까 꼭와!',
    '잘했고 잘하고 있고 잘할꺼야!',
    '토닥토닥',
    '앞이 깜깜하고 앞이 보이지 않을 때가 있죠. 오늘이 그랬나요? 그랬다면 당신은 대단한 거에예요. 그 힘든 하루를 또 참아 냈으니까',
    '놓아버림 때론 그냥 다 놓아버리세요. 다가오지 않은 날들의 수 없이 했던 걱정들 오늘 밤은 편안히 잠들 수 있게',
    '너무 힘들 땐 조금 우세요. 우는 것도 마음대로 못하면 너무 서러우니깐 정말 힘들 땐 우세요. 참는 것에 익숙해진 내가 이만큼 아프다면 울어도 되는 거예요.',
    '남들이 뭐래도 신경쓰지마요. 당신의 삶을 완성할 수 있는 건 오직 당신 뿐입니다.',
    '미안하면 미안하다 좋아하면 좋아한다 보고 싶으면 보고 싶다. 싫으면 싫다. 말해 보세요. 말해서 아픈 일 보다 말하지 못해 아팠던 일들이 더 많았기에',
    '사람이 사람의 마음을 얻는 것 만큼 힘든일도 없을꺼야 내가 좋아하는 사람이 나를 좋아해 죽는건, 기적이란다.',
    '내가 특별해지는 건, 내가 나를 특별하다고 생각하는 그 순간 부터래',
];

var techLists = [
    {
        image: "images/logo/logo_photoshop.png",
        title: "Photoshop",
        description: "포토샵은 웹 사이트 제작에 필요한 화면을 구성하는 픽셀 기반의 그래픽 툴입니다. PSD파일을 통해 시각화 된 이미지와 전체적인 레이아웃에 관한 정보를 얻을 수 있으며, 웹 환경에 맞게 이미지를 압축하여 리소스 관리에 도움을 줄 수 있습니다. 다양한 웹브라우저의 호환성을 위해서 현재까지는 픽셀 기반의 이미지를 많이 사용하기 때문에 프론트를 작업하는 사람들은 자주 접하게 되는 프로그램입니다.",
    },
    {
        image: "images/logo/logo_illustrator.png",
        title: "Illustartor",
        description: "일러스트는 백터 기반의 그래픽 툴입니다. 사실 퍼블리셔가 직접적으로 일러스트 프로그램을 사용하는 경우는 많이 없습니다. 백터는 그 특성상 확대를 해도 깨지지 않기 때문에 웹이나 앱에서 좋은 장점을 가지고 있습니다. 아직은 호환성이 좋지 않더라도 향후 기대해 볼 수 있는 그래픽 툴이 아닐까 생각 됩니다.",
    },
    {
        image: "images/logo/logo_html5.png",
        title: "HTML5",
        description: "HTML은 웹페이지를 구성하는 오래된 언어이며, 지속적 발전을 통해 현재 HTML5 버전까지 나오게 되었습니다. 버전이 올라가면서 기존에 사용하던 태그들이 사라지고 추가되는 과정을 겪으면서 점차 목적성에 맞는 태그들이 나오게 되었습니다. 의미론적인 태그들을 통해 HTML, CSS. JS등의 정보를 각각 분리시켜 시각적으로 소스를 정리하고 리소스 간소화로 용량도 절약되며 데이터 담기에 용이한 구조로의 제작이 가능해졌습니다. ",
    },
    {
        image: "images/logo/logo_css3.png",
        title: "CSS3",
        description: "CSS 역시 지속적 개발을 통해, 현재 CSS3 버전이 나오게 되었습니다. 이전보다 훨씬 강력한 기능들이 포함 되어있으며, 더 가볍고, 질 좋은 페이지들을 생성 할 수 있게 되었습니다."
    },
    {
        image: "images/logo/logo_scss.png",
        title: "SCSS",
        description: "흔히 사스(SASS)라고 알고 있는 이 언어는 CSS를 더욱 편리하게 이용할 수 있도록 도와주고, 추가 기능도 제공하는 확장판이라고 생각 하면 좋을 것 같습니다. ",
    },
    {
        image: "images/logo/logo_javascript.png",
        title: "Javascript",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_jquery.png",
        title: "Jquery",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_node.png",
        title: "Node",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_npm.png",
        title: "NPM",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_vue.png",
        title: "VUE.JS",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_git.png",
        title: "Git",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_subversion.png",
        title: "Svn",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_aem.png",
        title: "AEM",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_eclipse.png",
        title: "Eclipse",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_bootstrap.png",
        title: "Bootstrap",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_vuetify.png",
        title: "Vuetify",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_el_ui.png",
        title: "Element UI",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_fiddler.png",
        title: "Fiddler",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_ms_teams.png",
        title: "MS Teams",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_ms_planner.png",
        title: "MS Planner",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_slack.png",
        title: "Slack",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
        image: "images/logo/logo_jandi.png",
        title: "Jandi",
        description: "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },

]

var $themeOncheck = false;