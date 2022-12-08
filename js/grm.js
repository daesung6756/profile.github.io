function grm () {
    // popup, overlay, scrolltop
    $("body").append(
        /*'<!-- overlay list -->' +
        '<div class="overlay d-right">' +
        '<div class="overlay-inner">' +
        '<button type="button" class="tbl-event-btn" title="리스트 닫기"><i class="icon icon-arrow-down-white1"><span>닫기</span><span class="blind">리스트 닫기</span></i></button>' +
        '<div class="intro-tbl-col"></div>' +
        '</div>' +
        '</div>' + */
        '<!-- Gnb 기본 팝업 풀사이즈 -->' +
        '<div class="popup-wrap is-dim wide" data-pop="gnb">' +
        '<div class="pop">' +
        '<div class="pop-head">' +
        '<h2 class="pop-tit">GNB</h2>' +
        '<button type="button" data-pop-close="gnb" class="x-close"><i class="icon icon-x-circle-white"><span class="blind">팝업 닫기</span></i></button>' +
        '</div>' +
        '<div class="pop-content">' +
        '<div class="gnb">' +
        '<ul class="nav-list"></ul>' +
        '</div>' +
        '</div>' +
        '<div class="pop-foot">' +
        '<div class="foot-inner"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- 검색창 팝업 풀 사이즈-->' +
        '<div class="popup-wrap is-dim wide none-foot" data-pop="search">' +
        '<div class="pop">' +
        '<div class="pop-head">' +
        '<h2 class="pop-tit">History Log Search</h2>' +
        '<button type="button" data-pop-close="search" class="x-close"><i class="icon icon-x-circle-white"><span class="blind">팝업 닫기</span></i></button>' +
        '</div>' +
        '<div class="pop-content">' +
        '<div class="content-inner">' +
        '<div class="form-set search-pop">' +
        '<label for="searchTit"></label>' +
        '<div class="search-input">' +
        '<input type="search" id="searchTit" placeholder="검색어를 입력하세요.">' +
        '<button type="button" id="getSearchText"><i class="icon icon-search-white"><span class="blind">검색하기</span></i></button>' +
        '</div>' +
        '</div>' +
        '<ul class="search-desc-list b-circle mt30">' +
        '<li>숫자, 영문, 한글 검색 됩니다.</li>' +
        '<li>대소문자 구분 필요없습니다.</li>' +
        '<li>초성으로 검색되지 않습니다.</li>' +
        '<li>Enter 키를 누르시면 검색이 됩니다.</li>' +
        '<li>Esc 키를 누르시면 초기화 됩니다.</li>' +
        '</ul>' +
        '<div class="resualt-search">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- 공유하기 풀 사이즈-->' +
        '<div class="popup-wrap is-dim wide none-foot" data-pop="share">' +
        '<div class="pop">' +
        '<div class="pop-head">' +
        '<h2 class="pop-tit">Share</h2>' +
        '<button type="button" data-pop-close="share" class="x-close"><i class="icon icon-x-circle-white"><span class="blind">팝업 닫기</span></i></button>' +
        '</div>' +
        '<div class="pop-content">' +
        '<div class="content-inner">' +
        '<div class="btn-area tac">' +
        '<button type="button" data-share="facebook" class="share-btn" title="Facebook 공유하기"><i class="icon icon-sns-facebook"><span class="blind">facebook</span></i></button>' +
        '<button type="button" data-share="twitter"  class="share-btn" title="Twitter 공유하기"><i class="icon icon-sns-twitter"><span class="blind">twitter</span></i></button>' +
        '</div>' +
        '<div class="form-set share-url">' +
        '<input type="text" class="get-url-input" readonly>' +
        '<button type="button" onclick="UI.getBoardCopy( event ,`.get-url-input`);">복사하기</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- util 기본 팝업 풀사이즈 -->' +
        '<div class="popup-wrap is-dim wide" data-pop="util">' +
        '<div class="pop">' +
        '<div class="pop-head">' +
        '<h2 class="pop-tit">Util</h2>' +
        '<button type="button" data-pop-close="util" class="x-close"><i class="icon icon-x-circle-white"><span class="blind">팝업 닫기</span></i></button>' +
        '</div>' +
        '<div class="pop-content">' +
        '<div class="util">' +
        '<ul class="nav-list">' +
        '<li><a href="" data-pop="share">공유하기</a></li>' +
        '<li><a href="" class="love-event">응원 메세지</a></li>' +
        '<li><a href="" data-pop="search">작업내역 검색</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="pop-foot">' +
        '<div class="foot-inner"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- roadmap pop -->' +
        '<div class="popup-wrap is-dim wide" data-pop="roadMapPop" data-pop-index="roadMapPop">' +
        '<div class="pop">' +
        '<div class="pop-head">' +
        '<h2 class="pop-tit">Road Map</h2>' +
        '<button type="button" data-pop-close="roadMapPop" class="x-close"><i class="icon icon-x-circle-white"><span class="blind">팝업 닫기</span></i></button>' +
        '</div>' +
        '<div class="pop-content">' +
        '<img src=""></div>' +
        '<div class="pop-foot">' +
        '<div class="foot-inner">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<!-- float-scroll -->' +
        '<div class="scroll-floating">' +
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="98px" height="100px" viewBox="0 0 98 100" enable-background="new 0 0 98 100" xml:space="preserve">' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M28.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.574,3.574-3.574l0,0C26.418,77.646,28.018,79.246,28.018,81.221 L28.018,81.221z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="2.8s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M39.018,51.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.575,3.574-3.575l0,0C37.418,47.646,39.018,49.246,39.018,51.221 L39.018,51.221z"><animateTransform attributeName="transform"attributeType="XML"type="translate"values="0 50;0 -50;"dur="4s"repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M65.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C63.418,77.646,65.018,79.246,65.018,81.221 L65.018,81.221z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="2 50;2 -50;" dur="2.2s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M58.018,59.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C56.418,55.646,58.018,57.246,58.018,59.221 L58.018,59.221z"><animateTransform attributeName="transform"attributeType="XML"type="translate"values="0 50;0 -50;"dur="2.5s"repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M23.165,61.221c0,0.949-0.771,1.719-1.721,1.719l0,0 c-0.949,0-1.72-0.77-1.72-1.719l0,0c0-0.951,0.771-1.721,1.72-1.721l0,0C22.394,59.5,23.165,60.27,23.165,61.221L23.165,61.221z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="3s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M45.165,71.221c0,2.055-1.667,3.719-3.721,3.719l0,0 c-2.053,0-3.719-1.664-3.719-3.719l0,0c0-2.056,1.667-3.72,3.719-3.72l0,0C43.498,67.501,45.165,69.165,45.165,71.221L45.165,71.221 z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="4s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M43.877,86.221c0,1.344-1.09,2.432-2.434,2.432l0,0 c-1.343,0-2.433-1.088-2.433-2.432l0,0c0-1.345,1.09-2.434,2.433-2.434l0,0C42.788,83.787,43.877,84.876,43.877,86.221 L43.877,86.221z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="3s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M63.999,42.22c0,1.411-1.146,2.554-2.556,2.554l0,0 c-1.408,0-2.553-1.143-2.553-2.554l0,0c0-1.411,1.145-2.554,2.553-2.554l0,0C62.854,39.666,63.999,40.809,63.999,42.22L63.999,42.22 z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="3s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M23.109,46.601c0,0.709-0.575,1.283-1.285,1.283l0,0 c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.284,1.283-1.284l0,0C22.534,45.317,23.109,45.891,23.109,46.601 L23.109,46.601z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="2s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M53.075,49.444c0,0.709-0.574,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C52.5,48.161,53.075,48.734,53.075,49.444L53.075,49.444 z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="2.5s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M53.497,74.723c0,0.711-0.575,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.572-1.283-1.283l0,0c0-0.709,0.575-1.281,1.283-1.281l0,0C52.921,73.439,53.497,74.014,53.497,74.723 L53.497,74.723z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="2.2s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M26.061,70.771c0,0.709-0.575,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.574-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C25.486,69.486,26.061,70.062,26.061,70.771 L26.061,70.771z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 50;0 -50;" dur="2s" repeatCount="indefinite"/></path>' +
            '<path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M65.877,68.221c0,1.344-1.09,2.432-2.434,2.432l0,0 c-1.344,0-2.434-1.088-2.434-2.432l0,0c0-1.345,1.09-2.434,2.434-2.434l0,0C64.788,65.787,65.877,66.876,65.877,68.221 L65.877,68.221z"><animateTransform attributeName="transform" attributeType="XML" type="translate" values="-10 50;-10 -50;" dur="5s" repeatCount="indefinite"/></path>' +
        '</svg>'+
        '<button type="button">위로 바로가기</button>' +
        '</div>' +

        '<!-- Guide -->' +
        '<div class="tutorial">' +
        '<div class="inner">' +
        '<div class="center-box">' +
        '<div class="gnb-area group-position">' +
        '<span class="arrow"></span>'+
        '<dl>'+
        '<dt class="title"></dt>' +
        '<dd class="desc">다른 카테고리로 페이지 이동을 할 수 있도록 카테고리 목록 정보를 전달 합니다.</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="theme-area group-position">' +
        '<span class="arrow"></span>' +
        '<dl>' +
        '<dt class="title"></dt>' +
        '<dd class="desc">테마를 On/Off 할 수 있는 스위치 입니다.</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="consolation-area group-position">' +
        '<span class="arrow"></span>' +
        '<dl>' +
        '<dt class="title"></dt>' +
        '<dd class="desc">위로의 메시지를 랜덤으로 제공해 줍니다.</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="search-area group-position">' +
        '<span class="arrow"></span>' +
        '<dl>' +
        '<dt class="title"></dt>' +
        '<dd class="desc">작업했던 프로젝트를 검색할 수 있습니다.</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="share-area group-position">' +
        '<span class="arrow"></span>' +
        '<dl>' +
        '<dt class="title"></dt>' +
        '<dd class="desc">트위터나 페이스북에 해당 페이지를 공유 할 수 있습니다.</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="switch-area group-position">' +
        '<span class="arrow"></span>' +
        '<dl>' +
        '<dt class="title"></dt>' +
        '<dd class="desc">컨텐츠 영역의 전등을 On/Off 합니다. </dd>' +
        '</dl>' +
        '</div>' +
        '</div>' +

        '<div class="btn-area group-position">' +
        '<button type="button" class="circle-type" onclick="tutorialClickEvent()">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- //Guide -->'
    );
    // header
    $(".header").append(
        '<div class="inner">' +
        '<div class="in-left"><button type="button" data-pop-open="gnb"><i class="icon icon-nav-hambuger"><span class="blind">GNB 창 열기</span></i></button></div>' +
        '<div class="in-center">' +
        '<h1 class="tac"><a href="index.html">Home</a></h1>' +
        '</div>' +
        '<div class="in-right">' +
        '<ul class="util">' +
        '<li><button type="button" class="visual-toggle theme-control-btn" title="테마 열기/닫기"><i class="icon icon-switch-white-off"><span class="blind">테마 열기/닫기</span></i></button><span class="tooltip-block dir-bottom">테마 !!</span></li>' +
        '<li><button type="button" class="love-btn" title="위로 해줄께!"><i class="icon icon-cardiogram-white"><span class="blind">팝업 열기</span></i></button></li>' +
        '<li><button type="button" data-pop-open="search" title="투입 프로젝트 검색하기"><i class="icon icon-search-white"><span class="blind">Search 열기</span></i></button></li>' +
        '<li><button type="button" data-pop-open="share" title="현재 페이지 공유하기"><i class="icon icon-sns-share-white"><span class="blind">Share 열기</span></i></button></li>' +
        '<li><button type="button" data-dropdown="util"><i class="icon icon-more-circle-white"><span class="blind">UTIL 창 열기</span></i></button><div class="notice">테마를 On 해보세요!!</div></li>' +
        '</ul>' +
        '<div class="header-drop" data-dropdown-panel="util">' +
        '<ul class="hidden-util">' +
        '<li><button type="button" class="love-btn" title="위로 메세지"><i class="icon icon-cardiogram-white"></i><span>위로 메세지</span></button></li>' +
        '<li><button type="button" data-pop-open="search" title="프로젝트 검색"><i class="icon icon-search-white"></i><span>프로젝트 검색</span></button></li>' +
        '<li><button type="button" data-pop-open="share" title="SNS 공유하기"><i class="icon icon-sns-share-white"></i><span>SNS 공유하기</span></button></li>' +
        '</ul>'+
        '</div>'+
        '</div>' +
        '</div>'
    );
    // visual-spot
    $('.visual-spot').append(
        '<div class="spot-inner">' +
            '<div class="bg-area">' +
                '<div class="bg-box"></div>' +
                '<div class="desc-group">' +
                    '<h1 class="king">Ds.LEE</h1>' +
                    '<p class="typed-word">' +
                        '<span class="typing-text"></span>' +
                        '<span class="typing-cursor"></span>' +
                    '</p>' +
                    '<p class="desc" data-tooltip="Hello World"><strong>Web Developer 2021 Road Map</strong></p>' +
                    '<ul class="btn-list mt10">' +
                        '<li><button type="button" data-pop-open="roadMapPop">Intro</button></li>' +
                        '<li><button type="button" data-pop-open="roadMapPop">Front-End</button></li>' +
                        '<li><button type="button" data-pop-open="roadMapPop">Back-End</button></li>' +
                        '<li><button type="button" data-pop-open="roadMapPop">DevOps</button></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<button type="button" class="cheese-btn" onclick="tutorialClickEvent()" >' +
        '<div class="hand"><span class="fingernail"></span><span class="fingernail"></span></div>' +
        '<span class="line"></span><div class="pic"><img src="images/cheese.png" alt="" style="width:30px;"></div><span class="tooltip-block dir-top is-tutorial ">Tutorial</span></button>' +
        '<div class="full-event-area">' +
            '<span class="mouse type1" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png" alt=""></span></span>' +
            '<span class="mouse type2" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png" alt=""></span></span>' +
            '<span class="mouse type3" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png" alt=""></span></span>' +
            '<span class="mouse type4" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png" alt=""></span></span>' +
            '<span class="mouse type5" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png" alt=""></span></span>' +
            '<span class="mouse type6" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png" alt=""></span></span>' +
        '</div>'
    );
    // footer
    $('.footer').append(
        '<div class="inner">' +
        '<div class="address-group">' +
        '<p>Daesung.Lee</p>' +
        '<p>Profile Website</p>' +
        '<p>Update : 2022.12.08<br>Version: 0.66</p>' +
        '</div>' +
        '</div>'
    );

}

