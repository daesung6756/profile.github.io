var techLists = [
    {
        image: "images/logo/logo_photoshop.png",
        title: "Adobe Photoshop",
        description: "포토샵은 웹 사이트 제작에 필요한 화면을 구성하는 픽셀 기반의 그래픽 툴입니다. PSD파일을 통해 시각화 된 이미지와 전체적인 레이아웃에 관한 정보를 얻을 수 있으며, 웹 환경에 맞게 이미지를 압축하여 리소스 관리에 도움을 줄 수 있습니다. 다양한 웹브라우저의 호환성을 위해서 현재까지는 픽셀 기반의 이미지를 많이 사용하기 때문에 프론트를 작업하는 사람들은 자주 접하게 되는 프로그램입니다.",
    },
    {
        image: "images/logo/logo_xd.png",
        title: "Adobe XD",
        description: "Adobe XD는 UI/UX 여러 툴 중 후발주자지만 진화 속도가 빠르고 툴 자체가 가볍다는 장점이 있습니다. 그리고 여타 다른 툴에서는 볼 수  없는 간단한 애니메이션도 구현이 가능 합니다. 인터렉션에 대한 시각적인 제공이 가능해져 프로토파이 같은 프로그램을 사용하지 않더라도 인터렉션이 들어간 프로토타입 이미지를 제공 할 수 있으며, 작업자들과의 생산성을 높일 수 있고, 고객사에게 표현하고자하는 인터렉션을 시각적으로 보여 줄 수 있습니다. ",
    },
    {
        image: "images/logo/logo_illustrator.png",
        title: "Adobe Illustartor",
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
        description: "자바스크립트 언어를 웹페이지에 작성하면 스크립트라고 부르는데, 이는 특별한 준비나 컴파일 없이 보통의 문자 형태로 작성 및 실행이 가능하기 때문에 자바와는 다른언어라고 볼 수 있다. 자바스크립트는 모든 주요 브라우저에서 지원하고, HTML 및 CSS와 완전히 통합하여 사용 할 수 있는 강점이 있다. ",
    },
    {
        image: "images/logo/logo_jquery.png",
        title: "Jquery",
        description: "2006년 존 레식(John Resig)이 최초로 출시한 클라이언트 측 HTML 스크립팅을 간소화하기 위해 고안된 크로스 플랫폼 자바스크립트 라이브러리 입니다. Jquery를 이용하면 DOM의 내용을 쉽게 탐색할 수 있어, 검색할 노드나 요소, 값등에 접근하거나 찾기가 비교적 간단합니다.",
    },
    {
        image: "images/logo/logo_gulp.png",
        title: "Gulp",
        description: "Gulp는 개발 작업을 자동화하는 빌드 도구입니다. 비슷한 도구로는 그런트(Grunt)가 있습니다. 스트림을 이용해 데이터를 읽고 출력하며 작업들을 메모리에서 처리 합니다. npm을 통해 설치 할 수 있습니다. 퍼블리싱 할때 필요한 플러그인들을 설치하여 환경구성을 하면 작업이 더 편리해집니다.",
    },
    {
        image: "images/logo/logo_node.png",
        title: "NodeJS",
        description: "2009년 라이언 달(Ryan Dahl)이 고안해 낸 언어로 같은 해 JSConf EU 컨퍼런스에서 라이언 달의 발표 직후 국제적인 관심을 끌기 시작했습니다. Node.js는 서버사이드 자바스크립트이며, 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임입니다. 이벤트 기반으로 개발이 가능하며 Non-Blocking I/O를 지원하기 때문에 비동기식 프로그래밍이 가능합니다. 이 때문에 I/O 부하가 심한 대규모 서비스를 개발하기 적합하다고 할 수 있습니다. 또한 자바스크립트의 표준라이브러리 프로젝트인 CommonJS의 스펙을 따르고 있습니다.",
    },
    {
        image: "images/logo/logo_npm.png",
        title: "npm",
        description: "Node Package Manager의 약자이다. 자바스크립트 패키지 매니저이고 NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할을 하며 설치/관리를 수행할 수 있는 CLI를 제공한다.",
    },
    {
        image: "images/logo/logo_vue.png",
        title: "vue.js",
        description: "Vue는 수많은 프로젝트에서 AngularJS를 사용하여 구글을 위해 작업하던 Evan You에 의해 개발되었습니다. 나중에 그는 그의 생각을 요약하였습니다: 내가 Angular에 대해 정말 좋았던 부분을 뽑아낸 다음 추가적인 모든 개념을 동반하지 않고 무언가를 정말 가볍게 만들어보면 어떨까? 하고 생각했습니다. Vue는 원래 2014년 2월 출시되었습니다. Vue.js는 웹 개발을 단순화하고 정리하기 위해 개발된 대중적인 자바스크립트 프론트엔드 프레임워크입니다. 이 프로젝트는 웹 UI 개발(컴포넌트, 선언형 UI, 핫 리로딩, 타임 트래블 디버깅 등)의 아이디어를 더 접근 가능하도록 만드는데 초점을 둡니다. 덜 독선적이도록 시도하고 있기 때문에 개발자들이 익히기에 더 쉽습니다.",
    },
    {
        image: "images/logo/logo_git.png",
        title: "Git",
        description: "컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템(Version Control System) 의 한 종류이며, 빠른 수행 속도에 중점을 둡니다. 전세계적으로 많은 개발자들이 사용하고 있으며, svn과 큰차이점은 여러명이 동시자에 작업하는 병렬 개발이 가능하다는 것입니다.",
    },
    {
        image: "images/logo/logo_subversion.png",
        title: "Svn",
        description: "중앙 집중식 소스 관리 프로그램으로 Git과 함께 많이 사용되는 버전 관리 도구 입니다. Git과는 다르게 개발자가 자신만의 버전 히스토리를 가질 수 없습니다. svn의 최대 장점은 직관적인 사용성을 가지고 있으며, 동시에 같은 파일을 수정을하고, 커밋하였을때 충돌이 일어날 확률이 높습니다.",
    },
    {
        image: "images/logo/logo_aem.png",
        title: "AEM",
        description: "Adobe사에서 개발하고 판매하는 WCMS(Web Content Managemant Solution)입니다. 웹 사이트, 모바일 앱 등 다양한 컨텐츠를 구축하는 차세대 컨텐츠 관리 솔루션으로 마케팅 콘텐츠 및 자산을 효율적으로 관리하여 긍정적인 고객 경험을 제공하는 데 활용할 수 있도록 도와줍니다. AEM은 우리가 잘 알고 있는 워드프레스, XE 등의 CMS와 유사한 CMS.입니다",
    },
    {
        image: "images/logo/logo_eclipse.png",
        title: "Eclipse",
        description: "이클립스는 자바를 비롯한 다양한 언어를 지원하는 IDE(프로그래밍 통합 개발 환경)을 목적으로 시작하였으나 현재는 OSGi를 도입하여, 범용 응용 소프트웨어 플랫폼으로 진화하였습니다. 자바로 작성되어 있으며, 자유 소프트웨어이지만 막강한 기능을 자랑합니다.",
    },
    {
        image: "images/logo/logo_bootstrap.png",
        title: "Bootstrap",
        description: "부트스트랩은 웹사이트를 쉽게 만들 수 있게 도와주는 HTML, CSS, JS 프레임워크입니다. 하나의 CSS로 휴대폰, 태블릿, 데스크탑까지 다양한 기기에서 작동하도록 반응형처리가 되어있습니다. 다양한 기능을 제공하여 사용자가 쉽게 웹사이트를 제작, 유지, 보수할 수 있도록 도와줍니다. 부트스트랩은 디자이너 및 퍼블리셔가 없이 개발자들이 프로젝트를 진행할때 많이 사용되었지만, 많은 컴퍼넌트를 제공하기 때문에 요즘은 시간을 단축하기 위해 디자인팀과 협의하에 프로젝트에서 사용되고 있습니다.",
    },
    {
        image: "images/logo/logo_vuetify.png",
        title: "Vuetify",
        description: "UI 프레임원크의 일종이며, Vue.js위에 만들어 졌습니다. 머터리얼 디자인 스펙을 베이스로 한 완성도 높은 컴퍼넌트들을 제공합니다. vue.js가 점점 성장하면서, 재사용성이 높은 컴포넌트들이 쏟아져 나왔고, 그것을 모은 UI 라이브러리들이 등장 하였습니다. 그 중에 뷰티파이는 머터리얼 디자인 스펙을 정확히 지키고 있으며, 모듈성, 반응성, 성능이 좋습니다.",
    },
    {
        image: "images/logo/logo_el_ui.png",
        title: "Element UI",
        description: "UI 프레임워크의 일종이며, 완성도 높은 컴퍼넌트들을 제공하지만 위에서 언급한 뷰티파이보다는 덜 풍부합니다. 기본 언어 설정이 중국어이며, 영어를 사용하기 위해선 I18n으로 언어설정을 영어로 잡아야 합니다. v2.5.4  IE 사용시, Form에서 한글 입력이 잘 안된다고 알려져 있지만 소스코드를 수정하면 해결 할 수 있다고 알려져 있습니다..",
    },
    {
        image: "images/logo/logo_fiddler.png",
        title: "Fiddler",
        description: "컴퓨터와 웹 서버 또는 서버간의 HTTP 및 https 트래픽을 기록, 검사 및 변경 하는데 사용되는 디버깅 프록시 서버 도구입니다. 개발 환경 셋팅 없이 페이지를 열어 놓고, 로컬파일과 매칭하여 가작업을 해볼 수 있습니다. 개발 환경이 셋팅을 하면 안되거나, 아직 안되었을 때 아주 유용하게 사용 할 수 있습니다. ",
    },
    {
        image: "images/logo/logo_ms_teams.png",
        title: "MS Teams",
        description: "아웃룩 메일을 사용하는 기업이라면 많이 사용되는 협업 툴 중에 하나이며, 메신저 및 화상 회의, 공용 문서 관리등 여러 서비스를 제공해줍니다. 주로 같은 프로젝트 팀원이나 다른 부서와의 커뮤니케이션 및 화상회의를 진행할 때 유용합니다.",
    },
    {
        image: "images/logo/logo_ms_planner.png",
        title: "MS Planner",
        description: "MS에서 제공하는 협업 툴 중에 하나이며, 칸반형식의 대시보드를 제공합니다. 기획자가 업무를 기획하면서 해당 플래너에 기록을 하면, 디자인, 퍼블리셔, 개발자들이 일정을 체크해주고 파일을 공유하거나 진행상황을 파악하기 쉽게 제공해줍니다. 작성한 모든 업무 히스토리 기록이 되며, 달력에 해당 작업이 표시되어 진행하는 프로젝트 관리하는데 많은 도움을 줍니다.",
    },
    {
        image: "images/logo/logo_slack.png",
        title: "Slack",
        description: "스튜어트 버터필드가 만든 클라우드 기반 팀 협업 도구 중 하나이며, 주로 타 회사와 커뮤니케이션을 위해 많이 사용됩니다. 내부적으로는 MS 팀즈를 많이 사용한다면, 외부 사람들과의 빠른 커뮤니케이션을 위해 많이 사용됩니다.",
    },
    {
        image: "images/logo/logo_jandi.png",
        title: "Jandi",
        description: "협업 툴 중 하나이며, 외부의 여러 서비스와 유기적인 연동이 가능하며, 메신저 및 화상회의, 정보 자산화 등 많은 서비스를 제공합니다."
    },

]