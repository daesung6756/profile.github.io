var patOnTheBackPop = false;
var toggleTarget = [];

function toggleClassTarget( el, className) {
    var elem = $(el);
    var button = $(".toggleClassTarget");

    if(elem.hasClass(className)){
        button.removeClass("is-on");
        elem.removeClass(className);
    } else {
        button.addClass("is-on");
        elem.addClass(className);
    }
}

function tutorialClickEvent () {
    if($(".tutorial").hasClass("is-fixed")){
        $("body").removeClass("is-lock")
        $(".tutorial").removeClass("is-fixed")
    } else {
        $("body").addClass("is-lock")
        $(".tutorial").addClass("is-fixed")
    }
}

function initAnimationSlick(event, slick) {
    $(slick.$slides[0]).addClass("animated")
}
function beforeAnimationSlick(event, slick, nextSlide) {
    $(slick.$slides[nextSlide]).addClass("animated")
}
function aftereAnimationSlick(event, slick, currentSlide) {
    $(slick.$slides[currentSlide]).removeClass("animated")
}
var slickOption = {
    autoplay:false,
    autoplaySpeed: 3000,
    centerMode: true,
    fade: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
}

var slickSlide = {
    init: function () {
        if($("[data-slick]").length > 0){ this.event( slickOption );}
    },
    event : function ( option ){
        var slickGroup = [];

        $("[data-slick]").each(function (){
            if($.inArray($(this).data("slick"), slickGroup ) === -1){
                slickGroup.push($(this).data("slick"));
            }
        });

        $.each(slickGroup, function(key, value) {
            var slickSlide =  $("[data-slick='" + value + "']")

            slickSlide.slick( option );
            slickSlide.find(".slick-current").addClass("animated")
        })
    },
};

var UI = {
    init : function(){
        this.loaderAdd("body");

        if($("[data-tooltip]").length > 0){this.tooltip()}
        if($("[data-tab]").length > 0){this.tabs()}
        if($("[data-pop-open]").length > 0){this.popup()}
        if($("[data-dropdown]").length > 0){this.dropdown()}
        if($("[data-slick]").length > 0){this.techListDraw(techLists);}
        if($("[data-toggle]").length > 0){this.toggleClassDefault();}

        this.toggleClassTarget('.overlay.d-right', '.tbl-event-btn', 'is-show');
        this.InterestListDraw(InterestList)
        this.utilsListDraw("utilsList", utilsList) //util list
        this.defaultListDraw('.search-output', itWordList);//search list
        this.profileQaDraw('.profile .info' ,profileQaData);//profile list
        this.historyLogDraw(historyLog); // history list
        this.patOnTheBack(encouragement); // encouragement list

        this.checkTheme();
        this.resizeCheckReset();
        this.lampDraw();
        this.sectionToggleSwitchEvent();
        this.headetStickyBar();
        this.windowKeyCodeCheck();
        this.mainVisualSwitchEvent();
        this.visualMouseClickEvent();
        this.gnbListDraw();
        this.gnbLinkThemeCheckEvent();
        this.snsShare();
        this.moreText();

        // this.tableColDraw('.intro-tbl-col', colOption1, rowData1); // 오버레이 사이드 메뉴
        // this.tableAni('.tbl-col', 'ani-slide-down-up'); // 오버레이 사이드 메뉴 애니메이션 효과
    },
    searchParam: function (key) {
        return new URLSearchParams(location.search).get(key);
    },
    checkTheme : function () {
        var $theme = this.searchParam("theme");
        var $sectionLight = this.searchParam("section");
        var $parameter = location.href;

        if($theme === "on"){
            var $toggleBtn = $('.visual-toggle');
            var $visual = $('.visual-spot');
            var $theme = $("body");

            $toggleBtn.addClass('is-on');
            $visual.addClass('is-on');
            $theme.addClass('theme');

            (function() {
                var lastTime = 0;
                var vendors = ['ms', 'moz', 'webkit', 'o'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                        || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback, element) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                                callback(currTime + timeToCall);
                            },
                            timeToCall);
                        lastTime = currTime + timeToCall;

                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {clearTimeout(id);};
            }());

            (function() {
                var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

                // Main
                initHeader();
                addListeners();

                function initHeader() {
                    width = document.querySelector(".spot-inner").offsetWidth;
                    height = document.querySelector(".spot-inner").offsetHeight;
                    target = { x: 0, y: height };

                    largeHeader = document.getElementById("visual-spot");
                    largeHeader.style.height = height + 'px';

                    canvas = document.getElementById('water-bell-canvas');
                    canvas.style.display = "block";
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext('2d');

                    // create particles
                    circles = [];
                    for (var x = 0; x < width * 0.5; x++) {
                        var c = new Circle();
                        circles.push(c);
                    }
                    animate();
                }

                // Event handling
                function addListeners() {
                    window.addEventListener('scroll', scrollCheck);
                    window.addEventListener('resize', resize);
                }

                function scrollCheck() {
                    if (document.body.scrollTop > height) animateHeader = false;
                    else animateHeader = true;
                }

                function resize() {
                    width = document.querySelector(".spot-inner").offsetWidth;
                    height = document.querySelector(".spot-inner").offsetHeight;
                    largeHeader.style.height = height + 'px';
                    canvas.width = width;
                    canvas.height = height;
                }

                function animate() {
                    if (animateHeader) {
                        ctx.clearRect(0, 0, width, height);
                        for (var i in circles) {
                            circles[i].draw();
                        }
                    }
                    requestAnimationFrame(animate);
                }

                // Canvas manipulation
                function Circle() {
                    var _this = this;

                    // constructor
                    (function () {
                        _this.pos = {};
                        init();
                    })();

                    function init() {
                        _this.pos.x = Math.random() * width;
                        _this.pos.y = height + Math.random() * 100;
                        _this.alpha = 0.1 + Math.random() * 0.3;
                        _this.scale = 0.3 + Math.random() * 0.3;
                        _this.velocity = Math.random();
                    }

                    this.draw = function () {
                        if (_this.alpha <= 0) {
                            init();
                        }
                        _this.pos.y -= _this.velocity;
                        _this.alpha -= 0.0005;
                        ctx.beginPath();
                        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                        ctx.fill();
                    };
                }
            }())

            checkTheme = true;
        }
        if($sectionLight === "on"){
            $(".content > .section").addClass("is-on")
            checkLight = true
        }
    },
    techListDraw : function( data ){
        $.each(data, function (i) {
            $(".tech_list .slick-slider").append(
                '<div class="slick-list">' +
                '<div class="row">' +
                '<div class="column n2"><img src="' + data[i].image + '" alt="' + data[i].title + '" /></div>' +
                '<div class="column n2"><p class="title">' + data[i].title + '</p><p class="desc">' + data[i].description + '</p></div>' +
                '</div>' +
                '</div>'
            )
            $(function() {
                $(".tech_list .slick-dots li:eq('" + i + "')").find("button").attr("title", data[i].title )
                $(".tech_list .slick-dots li:eq('" + i + "')").find("button").append("<img src='" +  data[i].image + "'>");
            })
            // $(".tech_list .slick-dots li:eq(" + i +")"));
        })
    },
    tableColDraw: function(wrap, cols, rows){
        if(cols && rows) {
            if ($('.intro-tbl-col')) {
                var $col = cols;
                var $row = rows;
                var makeTable = $('<table>');
                var makeThead = $('<thead>');
                var makeTbody = $('<tbody>');
                var $colgroup = $('<colgroup>');
                $(wrap).append($(makeTable));
                $(makeTable).addClass('tbl-col').append($($colgroup)).append($(makeThead)).append($(makeTbody));
                $(makeThead).append('<tr>');
                $.each($col, function (i, dt) {
                    $($colgroup).append('<col style="width:' + dt["width"] + '">');
                    $(makeThead).find('tr').append('<th scope="col">' + dt["headline"] + '</th>');
                });
                $.each($row, function (i, row) {
                    var makeTr = $('<tr>');
                    var $nrow = $(makeTbody).prepend($(makeTr));

                    $.each($col, function (j, dt) {
                        if (dt["key"] === 'file') {
                            $(makeTr).append('<td style="text-align:' + dt["align"] + ';text-indent:' + dt["indent"] + '"><a href="' + row['url'] + '" title="' + row[dt["key"]] + ' 바로가기" target="' + row['target'] + '"><span class="event-span">' + row[dt["key"]] + '</span></a></td>');
                        } else if (dt["key"] === 'num') {
                            $(makeTr).append('<td style="text-align:' + dt["align"] + ';text-indent:' + dt["indent"] + '"><span class="num-box">' + i + '</span></td>');
                        } else {
                            $(makeTr).append('<td style="text-align:' + dt["align"] + ';text-indent:' + dt["indent"] + '">' + row[dt["key"]] + '</td>');
                        }

                    });

                });
            }
        }
    },
    tableRowDraw: function (wrap, cols, rows) {
        if(cols && rows) {
            if ($('.intro-tbl-row')) {
                var $col = cols;
                var $row = rows;
                var makeTable = $('<table>');
                var makeTbody = $('<tbody>');
                var $colgroup = $('<colgroup>');
                $(wrap).append($(makeTable));
                $(makeTable).addClass('tbl-row').append($($colgroup)).append($(makeTbody));

                $.each($col, function (i, dt) {
                    $($colgroup).append('<col style="width:' + dt["width"] + '">');
                });
                $.each($row, function (i, row) {
                    var makeTr = $('<tr>');
                    var $nrow = $(makeTbody).append($(makeTr));

                    $.each($col, function (j, dt) {
                        if (dt['key'] === 'ths') {
                            $(makeTr).append('<th scope="row" style="text-align:' + dt['align'] + ';vertical-align:' + dt['valign'] + '">' + row[dt['key']] + '</th>');
                        } else {
                            $(makeTr).append('<td style=text-align:' + dt['align'] + ';vertical-align:' + dt['valign'] + '>' + row[dt['key']] + '</td>');
                        }
                    });

                });
            }
        }else {
            return false;
        }
    },
    utilsListDraw: function ( id , rowData ) {
        var $el = $("#" + id );

        $.each(rowData, function (key, value ) {
            var index = key + 1 ;

            if(index <= 3 ){ //rank check

            }

            $el.append(
                '<li><div class="flex-wrap">' +
                        '<div class="column"><div class="pic" style="background:#fff url(' + value.pic + ') center center/contain no-repeat;"></div></div>' +
                        '<div class="column">' +
                            '<dl class="util-info">' +
                                '<dt><h5 class="title">' + value.name + '</h5></dt>' +
                                '<dd>' + value.desc + '</dd>' +
                                '<dd><a href="' + value.link + '" class="download-link" target="_blank" title="새창 이동"><i class="icon icon-download"></i>DOWNLOAD</a></dd>' +
                            '</dl>' +
                        '</div>' +
                    '</div>' +
                '</li>'
            )
        })

    },
    historyLogDraw : function(obj) {
        var $obj = obj;
        var $years = new Date().getFullYear();
        var $afterLog = $(".years-tab li.after-log");
        var $beforeLog = $(".years-tab li.before-log");
        var $totalLength = $obj.length;
        var $mArray = [];
        var $nArray = [];

        $.each($obj, function(key, value){
            var $getYears = value.date;
            if($getYears.match($years)){
                $mArray.push($getYears.match($years));
            } else {
                $nArray.push($getYears.match(null));
            }
        });

        var $aMax = $mArray.length;
        var $bMax = $nArray.length;

        $.each($obj, function(key, value){
            var $getYears = value.date;
            var $pc = value.img[0];
            var $tablet = value.img[1];
            var $mobile = value.img[2];
            var $count;
            var $el;

            if (parseInt($getYears.split("~")[1].split(".")[0]) !== parseInt($years)) {
                $el = $('.photo-list.before-log');
                $beforeLog.text('before (' + $nArray.length + ')');
                $count = $bMax--;
            } else {
                $el = $('.photo-list.after-log');
                $afterLog.text($years + ' (' + $mArray.length + ')');
                $count = $aMax--;
            }

            var $info1 =
                '<dl class="info revealOnScroll" data-animation="fadeInLeft" data-timeout="400">' +
                '<dd class="name">' + $count + '.&nbsp;'+ value.name + '</dd>' +
                '<dd class="type">' + value.type + '</dd>' +
                '<dd class="date">' + value.date + '</dd>' +
                // '<dd class="agency">' + value.agency + '</dd>' +
                // '<dd class="customer">' + value.customer + '</dd>' +
                // '<dd class="position">' + value.position + '</dd>' +
                '<dd class="process">' + value.process + '</dd>' +
                '<dd class="language">' + value.language + '</dd>' +
                '<dd class="tool">' + value.tool + '</dd>' +
                '<dd class="support">' + value.support + '</dd>' +
                // '<dd class="description"><p>' + value.description + '</p></dd>' +
                // '<dd class="feedback"><p>' + value.feedback + '</p></dd>' +
                '<dd class="url"><a href="' + value.url + '" target="_blank" title="' + value.url + ' 바로가기">사이트 바로가기</a></dd>' +
                '</dl>';

            var $info2 =
                '<dl class="info revealOnScroll"  data-animation="fadeInLeft" data-timeout="400">' +
                '<dd class="name">' + $count + '.&nbsp;'+ value.name + '</dd>' +
                '<dd class="type">' + value.type + '</dd>' +
                '<dd class="date">' + value.date + '</dd>' +
                // '<dd class="agency">' + value.agency + '</dd>' +
                // '<dd class="customer">' + value.customer + '</dd>' +
                // '<dd class="position">' + value.position + '</dd>' +
                '<dd class="process">' + value.process + '</dd>' +
                '<dd class="language">' + value.language + '</dd>' +
                '<dd class="tool">' + value.tool + '</dd>' +
                '<dd class="support">' + value.support + '</dd>' +
                // '<dd class="description"><p>' + value.description + '</p></dd>' +
                // '<dd class="feedback"><p>' + value.feedback + '</p></dd>' +
                '</dl>';

            var $pic1 = '<div class="pic revealOnScroll" data-animation="fadeInRight" data-timeout="400">' +
                '<span class="item case1" style="background-image:url(' + $pc + ');" data-pop-open="imgPopup" data-pop-src="'+ $pc +'"></span>' +
                '<span class="item case2"></span>' +
                '<span class="item case3" style="background-image:url(' + $mobile + ');" data-pop-open="imgPopup" data-pop-src="'+ $mobile +'"></span>' +
                '</div>';
            var $pic2 = '<div class="pic revealOnScroll" data-animation="fadeInRight" data-timeout="400">' +
                '<span class="item case1" style="background-image:url(' + $pc + ');" data-pop-open="imgPopup" data-pop-src="'+ $pc +'"></span>' +
                '<span class="item case2"></span>' +
                '<span class="item case3"></span>' +
                '</div>';
            var $pic3 = '<div class="pic revealOnScroll" data-animation="fadeInRight" data-timeout="400" >' +
                '<span class="item case1"></span>' +
                '<span class="item case2"></span>' +
                '<span class="item case3" data-pop-open="imgPopup" style="background-image:url(' + $mobile + ');" data-pop-src="'+ $mobile +'"></span>' +
                '</div>';
            var $pic4 = '<div class="pic revealOnScroll" data-animation="fadeInRight" data-timeout="400">' +
                '<span class="item case1" data-pop-open="imgPopup" style="background-image:url(' + $pc + ');" data-pop-src="'+ $pc +'"></span>' +
                '<span class="item case2" data-pop-open="imgPopup" style="background-image:url(' + $tablet + ');" data-pop-src="'+ $tablet +'"></span>' +
                '<span class="item case3" data-pop-open="imgPopup" style="background-image:url(' + $mobile + ');" data-pop-src="'+ $mobile +'"></span>' +
                '</div>';
            var $pic5 = '<div class="pic revealOnScroll" data-animation="fadeInRight" data-timeout="400">' +
                '<span class="item case1"></span>' +
                '<span class="item case2"></span>' +
                '<span class="item case3"></span>' +
                '</div>';

            if(value.url !== ''){
                $infos = $info1;
            } else {
                $infos = $info2;
            }

            if($pc !== '' && $mobile !== '' && $tablet === '') {
                $el.append('<li>' + $pic1 + $infos + '</li>');
            } else if($pc !== '' && $tablet === '' && $mobile === '') {
                $el.append('<li>' + $pic2 + $infos + '</li>');
            } else if($pc === '' && $tablet === '' && $mobile !== '') {
                $el.append('<li>' + $pic3 + $infos + '</li>');
            } else if ($pc !== '' && $tablet !== '' && $mobile !== ''){
                $el.append('<li>' + $pic4 + $infos + '</li>');
            } else {
                $el.append('<li>' + $pic5 + $infos + '</li>');
            }

        });
    },
    defaultListDraw : function(el, array) {
        var $el = $(el);
        var $array = array;

        $.each(array , function(key,value) {
            $el.append('<li>'+ value +'</li>');
        });
    },
    gnbListDraw : function() {
        var $el = $('.gnb .nav-list');
        var $array = gnbList;

        $.each($array, function (key, value) {
            $el.append('<li><a href="javascript:void(0)" data-href="' + value.url + '">' + value.name + '</a></li>');
        });
    },
    gnbLinkThemeCheckEvent : function () {
        var gnbGroup = [];

        $("[data-href]").each(function () {
            if($.inArray($(this).data("href"),gnbGroup ) === -1) {
                gnbGroup.push($(this).data("href"));
            }
        })

        $.each(gnbGroup, function (key, value){
            var $body = $("body");
            var $btn = $("[data-href='" + value + "']");

            $btn.on("click", function () {
                if(checkTheme) {
                    if(checkLight) {
                        $(this).attr("href", value + "?theme=on&section=on")
                    } else {
                        $(this).attr("href", value + "?theme=on")
                    }
                } else {
                    if(checkLight) {
                        $(this).attr("href", value + "?section=on")
                    } else {
                        $(this).attr("href", value)
                    }
                }
            })
        });
    },
    toggleClassDefault : function () {
        var toggleGroup = [];

        $("[data-toggle]").each(function(){
            if($.inArray( $(this).data("toggle"), toggleGroup ) === -1  ){
                toggleGroup.push($(this).data("toggle"))
            }
        })

        $.each(toggleGroup, function(key, value) {
            var btn = $("[data-toggle='" +  value + "']");
            var panel = $("[data-toggle-panel='" +  value + "']");

            btn.on("click", function () {
                $(this).toggleClass("is-on")
                panel.toggleClass("is-active");
            });

        })

    },
    profileQaDraw: function(el, array) {
        var $el = $(el);
        var $array = array;
        var $sort = [];
        var $random = [];

        $el.children().remove();

        $.each($array, function (key, value) {
            $random.push(value);
        });

        $random.sort(function(){
            return Math.random() - Math.random();
        });

        $random.splice(0, ($random.length - 6));

        $.each($random ,function(key, value){
            $(el).append('<li data-toggle="qaToggle' + key + '"><p class="question">Q : ' + value.question + '</p><p class="answer" data-toggle-panel="qaToggle' + key + '">A : ' + value.answer + '</p></li>')
        });

        if($el.children().length !== 0){

            this.toggleClassDefault();
        }

    },
    lampDraw: function() {
        var sectionInnerGroup = [];

        $('.section .section-inner').each(function(key, value){
            sectionInnerGroup.push($(this));
        });

        $.each(sectionInnerGroup, function(){
            $(this).append(
                '<button type="button" class="panel-btn1 toggle-switch" ><span class="tooltip-block-wrap"><span class="tooltip-block dir-left">스위치</span></span><span class="blind">전등 효과 켜기/끄기</span></button>' +
                '<div class="blink-event-set">' +
                '<span class="bim box-blink-ani"></span>' +
                '<span class="lamp"></span>' +
                '<span class="light box-blink-ani box-shadow-ani"></span>' +
                '</div>');

        });
    },
    tableAni : function (tname, aname){
        var $tableTr = $(tname +' tbody tr'),
            currentHighlight = 0,
            N = 2;

        $tableTr.eq(0).addClass(aname);
        setInterval(function(){
            currentHighlight = (currentHighlight + 1) % $tableTr.length;
            $tableTr.removeClass(aname).eq(currentHighlight).addClass(aname);
        },N * 1000);
    },
    tabs: function(){
        var $hash = window.location.href;
        var tabGroup = [];
        $('[data-tab]').each(function(key, value){
            if($.inArray($(this).data('tab'), tabGroup) === -1){
                tabGroup.push($(this).data('tab'));
            }
        });

        $.each(tabGroup, function(key, value){
            var $tabs = $('[data-tab=' + value + ']');
            var $contents = $('[data-tab-content=' + value + ']');
            var $onIndex = $tabs.index($tabs.filter('.is-active'));
            $contents.hide();
            $contents.eq($onIndex).show();
            $tabs.on('click', function(e){
                var $index = $tabs.index(this);
                var $href = $(this).attr('href');
                e.preventDefault();
                $tabs.removeClass('is-active');
                $tabs.eq($index).addClass('is-active');
                $contents.hide();
                $contents.eq($index).show();
            });

        });
    },
    tooltip: function () {
        var tooltipGroup = [];
        $('[data-tooltip]').each(function() {
            if($.inArray($(this).data('tooltip') , tooltipGroup) === -1){
                tooltipGroup.push($(this).data('tooltip'));
            }
        });

        $.each(tooltipGroup , function(key, value) {
            var $target = $('[data-tooltip=\''+ value +'\']');

            $target.on('mouseenter',function(){
                var dataValue = value.replace(" ", "&nbsp;");

                if($(this).find('.tooltip').length !== 1){
                    var $makeTools = $(this).append('<span class="tooltip"></span>');
                    var $thisToolTip = $(this).find('.tooltip');

                    $thisToolTip.html(dataValue);

                    var $width = $(window).width();
                    var $toolTipOffsetLeft = $thisToolTip.offset().left;
                    var $toolTipOffsetRight = $toolTipOffsetLeft + $thisToolTip.outerWidth();
                    var $moveOffset = ($toolTipOffsetRight - $width) + 20;

                    if($toolTipOffsetRight > $width) {
                        $thisToolTip.css({'marginLeft': -($moveOffset) + 'px'});
                    }

                } else {
                    return false;
                }

            }).mouseleave(function() {
                $(this).find('.tooltip').remove('.tooltip');
                return false;
            });
        });
    },
    dropdown: function () {
        var dropdownGroup = [];

        $('[data-dropdown]').each(function() {
            if($.inArray($(this).data('dropdown'), dropdownGroup) === -1){
                dropdownGroup.push($(this).data('dropdown'));
            }
        });

        $.each(dropdownGroup, function(key, value){
            var $btn = $('[data-dropdown=' + value + ']');
            var $panel = $('[data-dropdown-panel=' + value + ']');

            $btn.on('click', function(e){
                e.preventDefault();
                $(this).toggleClass("is-active");
                $panel.toggleClass('is-show');
            });

            $panel.find("button").each(function(){
                $(this).on("click",function(){
                    $btn.removeClass("is-active");
                    $panel.removeClass("is-show");
                });
            });


        });
    },
    singleToggleBtn : function(el, className) {
        var $el = $(el);
        var $toggleClass = className;
        $el.on('click', $el, function(){
            $el.toggleClass($toggleClass);
        });
    },
    toggleClassTarget : function ( el, el2 , className ){
        var $el = $(el);
        var $clickEl = el2;
        var $eventClass = className;

        $(document).on('click', $clickEl, function(){
            var $title = $(this).attr('title');
            if($el.hasClass($eventClass)){
                $el.removeClass($eventClass);
                $(this).attr('title','리스트 열기');
            } else {
                $el.addClass($eventClass);
                $(this).attr('title','리스트 닫기');
            }
        });
    },
    headetStickyBar : function(){
        var $html = $('html, body');
        var $wrap = $('.wrap');
        var $this = $('.header');
        var $spot = $('.visual-spot');
        var $htmlScrollTop = $html.scrollTop();
        var $elHeight = parseInt($spot.innerHeight());
        if($htmlScrollTop > $elHeight){
            $this.addClass('is-fixed');
            $this.addClass('is-active');
        } else if( $htmlScrollTop > 0){
            $this.addClass('is-fixed');
            $this.removeClass('is-active');
        } else {
            $this.removeClass('is-fixed');
            $this.removeClass('is-active');
        }
    },
    scrollLimitEvent: function(target ,min, max , classNmae) { //버튼클래스, 최소높이 클래스, 최대 높이 클래스, 컨트롤 클래스
        var $scroll = parseInt($(document).scrollTop());
        var $target = $(target);
        var $floatHeight = parseInt($target.outerHeight());
        var $floatOffsetTop = parseInt($target.offset().top) ;
        var $minTop = parseInt($(min).offset().top);
        var $maxTop = parseInt($(max).offset().top) - $floatHeight;

        /* console.log(
             "$scroll ( 현재 스크롤 값 ) : ", $scroll + "\n",
             "$floatHeight ( 버튼 세로 높이 값 ) :", $floatHeight + "\n",
             "$floatOffsetTop ( 현재 버튼 상단 위치 값 ) :", $floatOffsetTop + "\n",
             "$minTop ( 지정한 최소 높이 위치 값 ):", $minTop +"\n",
             "$maxTop ( 지정한 최대 높이 위치 값 ):", $maxTop
         )*/


        if($scroll < $minTop){
            $target.removeClass(classNmae);
        }
        else if($floatOffsetTop < $maxTop) {
            $target.addClass(classNmae);
        }
        else {
            $target.removeClass(classNmae);
        }
    },
    windowKeyCodeCheck : function () {
        $(window).on('keydown',function(e){
            // 키보드 ` 키 값으로 오버레이 레이어 팝업 토글
            if(e.keyCode === 192){
                $(".overlay").toggleClass("is-show");
                $(".tbl-event-btn").toggleClass("is-show");
            }
        });
    },
    mainVisualSwitchEvent : function(){

        var $toggleBtn = $('.visual-toggle');
        var $visual = $('.visual-spot');
        var $mouse = $('.mouse');
        var $theme = $("body");

        $toggleBtn.on('click', function(){
            if($(this).hasClass('is-on')){
                $(this).removeClass('is-on');
                $visual.removeClass('is-on');
                $theme.removeClass('theme');
                $mouse.css({"display":"inline-block"});
                checkTheme = false;
            } else {
                $(this).addClass('is-on');
                $visual.addClass('is-on');
                $theme.addClass('theme');
                checkTheme = true;
            }
            UI.visualSpotInnerSwitchEvent();
        })

    },
    sectionToggleSwitchEvent : function(){
        var $btn = $(".section-inner .toggle-switch");
        $btn.on('click', function(){
            if(checkLight !== true){
                $(this).parents('.section').addClass("is-on")
                checkLight = true
            } else {
                $(this).parents('.section').removeClass("is-on")
                checkLight = false
            }

            UI.visualSpotInnerSwitchEvent();
        });
    },
    visualSpotInnerSwitchEvent : function (){
        var spot = $(".visual-spot").find(".spot-inner");
        if(checkTheme || !checkLight) {
            spot.removeClass("is-on")
        } else {
            spot.addClass("is-on")
        }
    },
    visualMouseClickEvent : function () {
        var mouseGroup=[];

        $('.mouse').each(function(key, value){
            mouseGroup.push(this);
        });

        $.each(mouseGroup, function(key, value){
            var $this = $(value);
            $this.on('click', function(e){
                $(this).css({
                    "display":"none"
                });
            });
        });
    },
    popup : function(){
        var popGroup = [];

        $("[data-pop]").each(function(){
            if($.inArray($(this).data('pop'), popGroup) === -1){
                popGroup.push($(this).data('pop'));
            }
        });

        /*console.log(popGroup)*/

        $.each(popGroup, function(key, value){
            var $popup = $("[data-pop=" + value +"]");
            var $open = $("[data-pop-open=" + value +"]");
            var $close = $("[data-pop-close=" + value +"]");
            var $body = $("body");
            var $openPop = false;
            var popRealIndex;


            $open.on('click', function(){

                if($openPop !== false) {
                   return
                } else {

                    if($popup.hasClass('is-dim')) {
                        $popup.append("<div class='dimmed'></div>");
                    }

                    if($(this).data("pop-src")){
                        if($popup.find(".pop-load-img")){
                            $popup.find(".pop-load-img").remove();
                        }

                        $popup.find(".pop-content").append(
                            '<div class="pop-load-img"><div class="inner"><img src="' + $(this).data("pop-src") + '" alt=""></div></div>'
                        )
                    }

                    if($(this).data("pop") === "share"){
                        $('#' + value).find('.get-url-input').val(location.href);
                    }

                    $body.addClass("is-lock");
                    $popup.addClass('is-show');

                    $openPop = true

                    //roadmap
                    if($popup.is("[data-pop-index]")){
                        $popup.find(".pop-content").find("img").attr("src", roadMapImgGroup[$open.index(this)] )
                    }
                }


            });

            $close.on('click', function(){
                $body.removeClass("is-lock");
                $popup.removeClass('is-show');
                $popup.children('.dimmed').remove();
                $openPop = false;

                //roadmap
                if($popup.is("[data-pop-index]")){
                    $popup.find(".pop-content").find("img").attr("src", "");
                }
            });
        })

    },
    moreText : function() {
        var $height = Number("22");
        $(".photo-list").each(function (){
            $(this).find(".feedback").each(function(key, value) {
                var length = $(value).children('p').text().length;
                if(length > 30) {
                    $(this).append('<a href="" class="more-event">더보기</a>');
                    var $btn = $(this).find('.more-event');
                    $btn.on('click', function (e) {
                        e.preventDefault();
                        var $el = $(this).parents(".feedback");
                        var $text = String($(this).text());

                        if ($text !== '더보기') {
                            $el.children('p').css({'height': $height + 'px', 'white-space': 'nowrap'});
                            $(this).text('더보기');
                        } else {
                            $el.children('p').css({'height': 'auto', 'white-space': 'normal'});
                            $(this).text('접기');
                        }
                    });
                }
            });
        })

    },
    itTtListSearch : function(list) {
        var $el = $(".search-wrap .search-output");
        var $value = $(list).val();
        var $match = $(".search-output li:contains('" + $value + "')");

        $el.children().removeClass("is-show");

        if($value.length !== 0) {
            $('.search-count span.num').text('(' +$match.length + ')');
            $match.each(function (key, value) {
                $(this).addClass("is-show");
            });
        } else {
            $('.search-count span.num').text('(0)');
            $el.children().removeClass("is-show");
        }
    },
    popupLogSearch : function(list , obj) {
        var $el = $('.photo-list');
        var $value =  $(list).val();
        var $resualt = $(".pop .resualt-search");
        var $obj = obj;
        var $matchArray = [];

        $.each($obj, function(key, value) {
            var $url = value.url;
            var $name = value.name;
            var $regexp = new RegExp($value, 'ig');

            if($name.match($regexp)){
                $matchArray.push(value);
            }
        });

        if($value.length !== 0 && $value !== '') {
            if($matchArray.length !== 0) {
                $resualt.text('');
                $resualt.children().remove();
                $.each($matchArray, function (key, value) {
                    var $num = parseInt(key + 1);
                    var $getUrl = value.url;
                    var $getName = value.name;
                    $resualt.append('<a href="' + $getUrl + '" target="_blank" title="새창 이동">'+ $num +'. '+ $getName + '</a>');
                });
            } else {
                $resualt.text('검색 결과가 없습니다.');
            }
        } else {
            $resualt.children().remove();
            $resualt.text('검색 결과가 없습니다.');
        }
    },
    patOnTheBack: function (array) {
        var $open = $(".love-btn");
        var $close = ".close-layer-pop";
        var $array = array;

        $open.on('click', function(e){
            e.preventDefault();
            if(patOnTheBackPop === true){
                alert("먼저 팝업을 닫아 주세요.");
                return false;
            } else {
                UI.patOnTheBackOpen(patOnTheBackPop, $array)
            }
            patOnTheBackPop = true
        });

        $(document).on('click', $close, function(e){
            e.preventDefault();
            UI.patOnTheBackClose(patOnTheBackPop)
            patOnTheBackPop = false
        })
    },
    patOnTheBackOpen: function ( status, array ) {
        if(!status) {
            var $body = $('body');
            var $random = [];
            UI.loaderAdd("body" )
            UI.loaderRemove("body")
            setTimeout(function () {
                $.each(array, function (key, value) {$random.push(value);});
                $random.sort(function () {return Math.random() - Math.random();}); // 랜덤 정렬
                $random.splice(0, ($random.length - 1)); // 1개만 가져오기

                $body.append('<div class="layer-pop"><div class="pop-body"><span class="text">' + $random + '</span></div><div class="pop-foot"><button type="button" class="close-layer-pop">닫기</button></div></div>');
                setTimeout(function () {
                    $body.find('.layer-pop').addClass("is-show");
                },300)
                $body.find('.layer-pop .close-layer-pop').focus();
            }, 300)
        }
    },
    patOnTheBackClose: function (status) {
        var $body = $('body');
        if(status !== false){
            $body.find('.layer-pop').removeClass("is-show")
            setTimeout(function () {
                $body.find('.layer-pop').remove();
            }, 300)
        }
    },
    snsShare : function(){
        var shareGroup = [];
        var _location = window.location.href;

        $('[data-share]').each(function(){
            if($.inArray($(this).data('share'), shareGroup > -1)){
                shareGroup.push($(this).data('share'))
            }
        });
        $.each(shareGroup, function(key, value) {
            var $btn = $("[data-share=" + value + "]");
            var $input = $(".share-url").find(".get-url-input")

            $input.val(_location)

            $btn.on('click', function(){
                UI.sendSns(value , exhibitionTitle );
            });
        })
    },
    sendSns : function(sns, txt){
        var o;
        var _location = window.location.href;
        var _url = encodeURIComponent(_location);
        var _txt = encodeURIComponent(txt);
        var _br  = encodeURIComponent('\r\n');

        switch(sns) {
            case 'facebook':
                o = {
                    method:'popup',
                    url:'http://www.facebook.com/sharer/sharer.php?u=' + _url
                };
                break;

            case 'twitter':
                o = {
                    method:'popup',
                    url:'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
                };
                break;

            default:
                alert('지원하지 않는 SNS입니다.');
                return false;
        }

        switch(o.method) {
            case 'popup':
                window.open(o.url,"현재페이지",'width=600,height=400, menubar=no, status=no, toolbar=no');
                break;
        }
    },
    stepCustomNumberInput : function (el, name) {
        var $el = $(el),
            $number = $('input[name=' + name + ']'),
            $btn = $el.children('button');

        $btn.each(function () {
            /*console.log($number);*/
            $(this).on('click', function() {
                if($(this).hasClass('plus')){
                    $number[0].stepUp();
                } else {
                    $number[0].stepDown();
                }
            });
        })
    },
    drawClipPath : function(event, el, name){
        var $el = $(el),
            $value = $("input[name=" + name + "]").val(),
            $valueGroup = new Array(parseInt($value)).fill().map(function(value, index){
                return index + 1;
            }).slice(0, 9),
            $length = $valueGroup.length,
            $valueClass = String("" + $length);

        /*console.log(event.target);*/
        $.each($valueGroup, function(key, value) {
            $el.append('<div class="r-fill clip-' + $length + '"></div>');
        });
        $.each($valueGroup, function(key, value) {
            $el.append('<div class="text text-' + $length + '"><input type="text" placeholder="입력하세요."></div>');
        });
    },
    getBoardCopy : function(e, className) {
        e.preventDefault();

        var $this = $(e.target),
            $input = $(className);

        $input.select();
        document.execCommand("copy");
    },
    resizeCheckReset : function () {
        var windowWidth = $(window).width();

        if(windowWidth > 768) {
            $('[data-dropdown="util"]').removeClass("is-active");
            $('.header-drop').removeClass("is-show");
        }
    },
    loaderAdd : function (el, type = "") {
        var element = $(el);
        var loader = '<div class="loader-wrap ' + type +'"><span class="loader"></span></div>';

        element.prepend(loader);

    },
    loaderRemove : function (el, duration = 400 ) {
        var element = $(el);

        element.find(".loader-wrap").fadeOut(duration);
        setTimeout(function () {
            element.find(".loader-wrap").remove();
        }, duration)

    },
    InterestListDraw : function ( data ){
        if($(".Interest-list")){
            $.each(data , function (key, value) {
                if(data[key].name && data[key].src && data[key].desc) {
                    $(".Interest-list").append("" +
                        "<li>" +
                        "   <div><span>'" + data[key].name +"'</span></div>" +
                        "<span></span>" +
                        "</li>")
                }
            })
        }
    },
    toggleSwitchScrollEvent : function () {
        var $ts = $(".toggle-switch");
        var $header = $(".header");

        if($header.hasClass("is-active") ){
            $ts.addClass("is-fixed")
        } else {
            $ts.removeClass("is-fixed")
        }
    },
    httpStatusSearchLog : function (value) {
        var statusGroup = [];
        var $find = value;
        var header = $(".header").height() + 10;
        var test = null;

        $(".em-text").each(function () {
            statusGroup.push($(".em-text").text());
        })

        $(".em-text").each(function(key, value) {
            if($(value).text() !== $find) {
                if($(this).hasClass("is-find")){
                    $(this).removeClass("is-find")
                    $(this).parent().removeClass("is-find")
                    alert("찾으시는 상태 값이 없습니다.")
                } else {
                    return;
                }
            } else {
                $(this).addClass("is-find")
                $(this).parent().addClass("is-find")
                $(window).scrollTop( $(this).offset().top - header )
            }

        })

    },
};

var checkTheme = false;
var checkLight = false;
var exhibitionTitle = $("html").find("title").text(); // 공유 하는 페이지 제목

//ready
$(function(){
    "use strict";

    UI.init();
    slickSlide.init();

    $(document).on("init", "[data-slick=tech_list]",initAnimationSlick)
    $(document).on("afterChange", "[data-slick=tech_list]", beforeAnimationSlick)
    $(document).on("beforeChange","[data-slick=tech_list]", aftereAnimationSlick)


    $(".visual-toggle").on("click",function(){
        if($(this).hasClass("is-on")) {

            (function() {
                var lastTime = 0;
                var vendors = ['ms', 'moz', 'webkit', 'o'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                        || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback, element) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                                callback(currTime + timeToCall);
                            },
                            timeToCall);
                        lastTime = currTime + timeToCall;

                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {clearTimeout(id);};
            }());

            (function() {
                var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

                // Main
                initHeader();
                addListeners();

                function initHeader() {
                    width = document.querySelector(".spot-inner").offsetWidth;
                    height = document.querySelector(".spot-inner").offsetHeight;
                    target = { x: 0, y: height };

                    largeHeader = document.getElementById("visual-spot");
                    largeHeader.style.height = height + 'px';

                    canvas = document.getElementById('water-bell-canvas');
                    canvas.style.display = "block";
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext('2d');

                    // create particles
                    circles = [];
                    for (var x = 0; x < width * 0.5; x++) {
                        var c = new Circle();
                        circles.push(c);
                    }
                    animate();
                }

                // Event handling
                function addListeners() {
                    window.addEventListener('scroll', scrollCheck);
                    window.addEventListener('resize', resize);
                }

                function scrollCheck() {
                    if (document.body.scrollTop > height) animateHeader = false;
                    else animateHeader = true;
                }

                function resize() {
                    width = document.querySelector(".spot-inner").offsetWidth;
                    height = document.querySelector(".spot-inner").offsetHeight;
                    largeHeader.style.height = height + 'px';
                    canvas.width = width;
                    canvas.height = height;
                }

                function animate() {
                    if (animateHeader) {
                        ctx.clearRect(0, 0, width, height);
                        for (var i in circles) {
                            circles[i].draw();
                        }
                    }
                    requestAnimationFrame(animate);
                }

                // Canvas manipulation
                function Circle() {
                    var _this = this;

                    // constructor
                    (function () {
                        _this.pos = {};
                        init();
                    })();

                    function init() {
                        _this.pos.x = Math.random() * width;
                        _this.pos.y = height + Math.random() * 100;
                        _this.alpha = 0.1 + Math.random() * 0.3;
                        _this.scale = 0.3 + Math.random() * 0.3;
                        _this.velocity = Math.random();
                    }

                    this.draw = function () {
                        if (_this.alpha <= 0) {
                            init();
                        }
                        _this.pos.y -= _this.velocity;
                        _this.alpha -= 0.0005;
                        ctx.beginPath();
                        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                        ctx.fill();
                    };
                }
            }())

        } else {
            (function() {
                var canvas;
                canvas = document.getElementById('water-bell-canvas');
                canvas.style.display = "none"
            }())
        }
    })

    //event
    $(document).on('click', '.scroll-floating button', function(e){
        e.preventDefault();
        $('html, body').stop(e).animate({scrollTop : 0}, 300);
    });
    $(document).on('keyup', "#httpStatusSearch" , function(event){
        if(event.keyCode === 13) {
            UI.httpStatusSearchLog(this.value);
        }
    });
    $(document).on('keyup', "#searcTtList" , function(){
        UI.itTtListSearch(this);
    });
    $(document).on('click', "#getSearchText", function() {
        UI.popupLogSearch('#searchTit',historyLog);
    });
    $(document).on("keypress",'#searchTit', function(event){//input enter key
        if(event.keyCode === 13) {
            $('#getSearchText').click();
        }else if (event.keyCode === 96){
            $('#searchTit').val('');
        }
    });


});


// load
$(window).on("load", function () {
    UI.loaderRemove("body")

})

//scroll
$(window).on('scroll', function(){
    UI.headetStickyBar();
    UI.toggleSwitchScrollEvent()
    UI.scrollLimitEvent('.scroll-floating', '.container', '.footer',"is-show")
});

//resize
$(window).on('resize', function(){
    UI.tooltip();
    UI.resizeCheckReset();
});

