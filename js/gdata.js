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
        url:'work-list.html'
    },
    {
        name:"It 용어 번역 검색",
        url:'ittt.html'
    },
    {
        name:"웹 접근성 정보",
        url:'web-accessibility.html'
    },
];

//업무 내역
var historyLog = [
    {
        img: [
            'images/list/twd-pc.png',
            '',
            'images/list/twd-mobile.png',
        ],
        type : '운영',
        name:'T World Direct 프로젝트',
        date:'2019.1 ~ 2019.12',
        agency:'이모션 글로벌',
        customer:'SKT',
        position: 'PA (PL:1명, PA:2명)',
        process:'기획전, 특장점, 약관, 부가서비스, 게이트 프로모션, 메인 배너 등 Tshop 카테고리 전반 유지 보수 관리',
        language:'Html, Css, jQuery',
        tool: 'Svn, Git',
        support :'PC는 ie 9, 기타 다른 브라우져 최신버전, Mobile은 최신 버전 브라우저.',
        description:'Pc web, Mobile web, 부분 반응형 페이지등이 있으며, 기획자 10여명, 디자이너 6~7명, 퍼블리셔 3명이 투입된 운영 프로젝트이다. 투입 당시 As-is 리뉴얼 작업이 진행 되는 중이었으며, As-is사이트를 잠시 운영 하다가 2월~3월 쯤에 To-be 사이트를 운영 하기 시작하였다.',
        feedback:'이미 3년을 재계약 하였고, 그동안 퍼블리싱 파트만 외주 업체가 진행 하였다. 올해부터 내부 인력으로 교체 되었는데, 오랜시간 굳어져 있어서 작업방식이 변화가 필요해 보이지만 사실상 누가 나서서 고객사와 부딪치겠는가... 이해는 되지만 결국 불공정한 입장은 변함 없을 것 같다. 이곳은 고객사와 불통이 심각하다.',
        url:'https://shop.tworld.co.kr/shop/main',
        rate  : 4
    },
    {
        img: [
            'images/list/multi-campus-pc.png',
            'images/list/multi-campus-tablet.png',
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
        description:'Pc web, Mobile web으로 알고 참여 했으나, 1차 작업 이후 부터 반응형으로 변경 되었다. 이 프로젝트는 수습하기 위해 참여하게 된 단기 프로젝트이며, 외부 PM, 외부 기획자 2명, 내부 디자이너 3명, 내부 퍼블리셔 1명이 투입 되었다. 참여 당시 기획, 디자인, 포함하여 2주안에 25~30페이지 정도를 제작 해야 하는 상황이었고, 개발파트가 고객사였기 때문에 기간 준수를 위해 많은 압박을 주었다. 당장 인력이 급해 곧 퇴사를 앞둔 직원을 투입시켜, 작업 도중 추가 적인 리스크가 발생했다. 초반에는 25~30페이지 가량으로 알고 투입되었는데, 프로젝트 나갈때쯤 6~70페이지 정도로 확장 되었고, 초반에는 기획보다 제작이 앞서서 기획자가 후에 기획서를 작성하기도 하였다. 결국 1차 계약 종료, 2차 계약까지 무리하게 진행 되어, 추가 인력 투입을 요청을 하였으나, 면접 보고 첫 출근한 날 퇴근하면서 도망가버리는 해프닝이 있었다. 후반에 결국 인력 투입이 무산 되며, 하청을 준 프로젝트.' ,
        feedback:'투입 당시 너무 막막했다. 컴퍼넌트 형식으로 작업을 진행 해야하는데, 할 수 없었다. 작업이 꽤 진행 되었는데 계약시 정하는 사이트 타입을 아직도 확정을 안하고 갈팡질팡 하는 모습에, 턴키 계약의 민낮을 그대로 보여 주었다고 생각된다. 1차까지만 급한 불을 꺼주는 계약인줄 알고 참여 했는데, 2차 3차 되면서 결국 반응형으로 바뀌었다. 그리고 디자이너들이 새롭게 교체 되었는데, 협업에 대한 이해도, 컴퍼넌트화 작업방식, 반응형 타입에 이해도 등이 부족하여 고생을 했던 기억이 난다. 기획, 디자인 앞에 웹을 붙이는 직군이라면, 최소한 웹에 대한 이해도는 좀 있어야 하지 않을까...?',
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
        description:'프론드 엔드, 백엔드 개발을 전부 이모션에서 진행 했으며, 이모션 내부인력으로 처음으로 진행 된 프론트엔드 구축 프로젝트라는 의미가 크다. 전반적으로 충분한 준비기간과 실력있는 PL과 PA들로 인해 무리없이 진행 되었다가, 기획, 디자인을 진행하던 타 회사의 인재 및 능력 부족으로 일정이 지연 되었고, API를 제작하던 이모션 백엔드파트의 일정도 지연 되었다. 그 여파로 백엔드파트에서 진행하기로 한 일을 맡아서 처리해야 하는 상황까지 발생하였다.' ,
        feedback:'사수의 중요성을 다시 한번 느끼게 되었던 프로젝트이다. 실력있는 인재들과 일을 했을때, 개인의 역량이나, 프로젝트를 대하는 자세, 전반적인 업무 프로세스, 소통하는 방식과 자세 등 시너지효과를 낼 수 있었던 값진 경험이었다. 아마 5~10년 후에는 거진 모든 프로젝트들이 뷰, 리액트, 앵귤러와 같은 프레임워크로 작업하는 시대가 올 것이라는 PL님의 조언을 따라 틈틈히 준비해야 겠다.',
        url:'https://www.mohaji.com/ko',
        rate  : 4
    },
    {
        img: [
            'images/list/amore-csr-pc.png',
            'images/list/amore-csr-tablet.png',
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
            '',
            '',
            '',
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
        support :'',
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
        description:'이 프로젝트는 PC 버전만 제작되었고, 언어는 한글과 영문이 제공 되었으며, 데이터를 기반으로 불러오는 방식이 아니라, 하드코딩으로 모든 페이지를 제작 하였다. 제품 설명 카테고리를 제외하고는 각기 다른 퍼포먼스로 구성 되어있는 홈페이지이다. 한달의 8시간 유지 보수를 하는 추가 계약을 하여, 다른 프로젝트 업무와 병행하여 진행 되었다.' ,
        feedback:'계약 조건과 자세한것은 잘 모르지만 다급하게 진행 되었던 것으로 기억한다. 전 그룹장님이 PL을 맡으셨고. 사수와 나 이렇게 총 세명이 투입 되었다. 당시 스크립트 소스를 봐도 이해력이 부족해서, 주로 공통된 제품 카테고리나 비교적 퍼포먼스가 작은 페이지들을 제작 했다. 마크업작업 손이 좀 빨라졌다.',
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
        description:'이 프로젝트에 대한 명확한 내용은 잘 모른다. 프로젝트 진행 시 외주 업체에게 맡겼다가, 미완성으로 계약이 해지 되었는지 그 이후부터 내부팀에서 맡아서 하게 되었다. 수정 기획서가 전달 되면, 해당 기획서보고 수정을 하거나 신규 페이지를 제작하는 일들을 하였다.' ,
        feedback:'흔히 말하는 똥치운다는게 이런 프로젝트이다. 당시 회사에서 퍼블리싱팀 자체가 아무런 영향력이 없어서, 제안서 작성을 하거나, 주로 이런 일들을 맡아서 처리 하였다. 그래도 해당 프로젝트에 상당한 기여를 했으며, 노련한 사수의 지휘아래 진행하는데 어려움은 없었다.',
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
        description:'이 프로젝트도 영업해온 사람은 퇴사를 하였고, 개발사 API 완료율이 80프로도 안되어 일정 지연에 대한 소송을 진행 했던것으로 기억난다, 퍼블리싱을 맡아서 하던 외주업체도 철수 한 상태에서 팀에 배정된 업무이다. 고객사의 무리한 요청과 일정을 무시하는 추가요청이 많았던 것으로 기억된다.' ,
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
        name:'주)이모션 사내 런드라타임 반응형 페이지 제작 프로젝트',
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
        url:'https://www.pizzahut.co.kr/',
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
        description:'PC, Mobile, 영문 사이트 전반을 유지 보수 관리 하던 프로젝트이며, 고객사 담당자의 무리한 요청이 많기는 했지만, 지금까지 경험으로 비추어 보았을 때 그래도 기획자를 많이 존중해주는 편이었다. 갑질의 횡포가 심한 곳은 어떠한 조정도 불가하다. 이곳은 그정도는 아니였던 것으로 기억된다.' ,
        feedback:'정해진 계획서 대로 기획, 디자인, 퍼블리싱이 진행 되었으며, 지금 생각해보면 그래도 이곳 업무 방식이 괜찮았다. 무리한 요구를 할때도 있었지만, 보통 계획서를 준수 하여, 시간 관리하는데 어려움이 없었다. PM은 이모션 본사에서 일을 했는데 자주 방문하여, 고충을 듣고 해결해주는 일을 잘 하였다. 당시 피자헛 프로젝트 힘들다는 소문이 많이 돌고 있었다.',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
            '',
            '',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
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
        url:'javascript:void(0)',
        rate  : 4
    },
    {
        img: [
            '',
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
        url:'javascript:void(0)',
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
];

var $themeOncheck = false;