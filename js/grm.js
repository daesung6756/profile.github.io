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

        '<!-- float-scroll -->' +
        '<div class="scroll-floating">' +
        '<button type="button">위로 바로가기</button>' +
        '</div>'
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
        '<li><button type="button" class="visual-toggle" title="테마 열기/닫기"><i class="icon icon-switch-white-off"><span class="blind">테마 열기/닫기</span></i></button></li>' +
        '<li><button type="button" class="love-btn" title="위로 해줄께!"><i class="icon icon-cardiogram-white"><span class="blind">팝업 열기</span></i></button></li>' +
        '<li><button type="button" data-pop-open="search" title="투입 프로젝트 검색하기"><i class="icon icon-search-white"><span class="blind">Search 열기</span></i></button></li>' +
        '<li><button type="button" data-pop-open="share" title="현재 페이지 공유하기"><i class="icon icon-sns-share-white"><span class="blind">Share 열기</span></i></button></li>' +
        '<li><button type="button" data-pop-open="util"><i class="icon icon-more-circle-white"><span class="blind">UTIL 창 열기</span></i></button></li>' +
        '</ul>' +
        '</div>' +
        '</div>'
    );
    // visual-spot
    $('.visual-spot').append(
        '<div class="spot-inner">' +
        '<div class="bg-area">' +
        '<div class="bg-box">' +
        '</div>' +
        '<div class="desc-group">' +
        '<h1>The CATS</h1>' +
        '<p class="desc">Daesung Lee<br>Profile Website</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="full-event-area">' +
        '<span class="mouse type1" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png"></span></span>' +
        '<span class="mouse type2" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png"></span></span>' +
        '<span class="mouse type3" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png"></span></span>' +
        '<span class="mouse type4" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png"></span></span>' +
        '<span class="mouse type5" data-tooltip="찍찍!!"><span class="inner"><img src="images/left-mouse.png"></span></span>' +
        '<span class="mouse type6" data-tooltip="찍찍!!"><span class="inner"><img src="images/right-mouse.png"></span></span>' +
        '</div>'
    );
    // footer
    $('.footer').append(
        '<div class="inner">' +
        '<div class="address-group">' +
        '<p>777, Cheonhoyet-gil, Gangdong-gu, Seoul, Republic of Korea</p>' +
        '<p>통신판매업 어쩌구 저쩌구 : 42342323 호</p>' +
        '<p>copyright @Lee dae-sung.</p>' +
        '</div>' +
        '</div>'
    );
}
$(function(){
    grm();
});
