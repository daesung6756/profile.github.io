'use strict';

function elementToggleClass ( el, className ) {
    let elem = document.querySelector(el);
    elem.classList.toggle( className )  // classList.add , classList.remove
}

function elementAddClass ( el, className ) {
    let elem = document.querySelector(el);
    elem.classList.add( className )  // classList.add , classList.remove
}

function elementRemoveClass ( el, className ) {
    let elem = document.querySelector(el);
    elem.classList.remove( className )  // classList.add , classList.remove
}

// 선언식
let multiTab = {
    init : function (data , index) {
        if(document.querySelectorAll("[data-jstab]").length > 0){
            this.events(data, index);
        }
    },
    events : function ( dataName , firstIndex ) {
        let _this = this;
        let tabGroup = [];
        let tabs = document.querySelectorAll("[data-jstab='" +  dataName  + "']");
        let buttonActive = null;
        let contentActive = null;

        Array.prototype.forEach.call(tabs , function ( value, key){
            if(Array.prototype.indexOf(tabs[key].dataset.jstab, tabGroup) === -1){
                tabGroup.push(value.dataset.jstab)
            }
        })

        Array.prototype.forEach.call(tabGroup , function (value,  key  ){
            let tabBtns = document.querySelectorAll("[data-jstab='" + value + "']");
            let tabContents = document.querySelectorAll("[data-jstab-content='" + value + "']");

            buttonActive = tabBtns[firstIndex]
            contentActive = tabContents[firstIndex]

            tabBtns[firstIndex].classList.add("is-active")
            tabContents[firstIndex].classList.add("is-show")

            Array.prototype.forEach.call(tabBtns , function (value,  key  ){
                tabBtns[key].addEventListener("click",function() {

                    if(buttonActive !== null){
                        _this.inActivate( buttonActive , "is-active")
                        _this.inActivate( contentActive , "is-show")
                    }

                    buttonActive = this;
                    contentActive = tabContents[key];

                    _this.activate( this, "is-active")
                    _this.activate( tabContents[key], "is-show")
                })
            });

            console.log(tabBtns)
        })
    },
    activate : function ( el , className) {
        el.classList.add( className )
    },
    inActivate : function ( el, className ){
        el.classList.remove( className )
    }
}


// DOMContentLoaded cycle (jquery ready)
document.addEventListener("DOMContentLoaded", function () {

    multiTab.init("test1",0) // multi tab
    multiTab.init("test2",0) // multi tab
    console.log("cycle : ready end")
})

// load cycle (jquery window load)
window.addEventListener("load", function() {
    console.log("cycle : load end")
})

const rotateSlidedata = [
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하 ㄴㅇㄹㅇㄴㄹㄴㅇㄹㄴㅇㄹ"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test2",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
    {
        title: "test1",
        desc: "가나다라마바사아자차카타파하"
    },
]

// 회전 슬라이드
let rotateSlide = {
    init: function (el, data) {
        this.el = $("[data-rslide='" + el + "']");
        this.data = data;
        this.button = this.el.find("button.slide-close-btn")

        if (this.data !== null) {
            this.listDraw(this.data);
        }
    },
    listDraw: function (data) {
        let _this = this;
        let innerAdd = $(this.el).append('<div class="inner"></div>');
        let _inner = $(this.el).find(".inner")
        let sliderAdd = _inner.append("<div class='sliders'></div>");
        let _sliders = _inner.find(".sliders");

        $.each(data, function (key) {

            let $index = (key + 1);
            let $length = data.length;
            let $angle = 360 / $length;
            let $angleSum = $angle * key;

            _sliders.append('<div class="slide" style="' +
                'z-index:' + (data.length - $index) + ';' + '">' +
                '<div class="slide-head">' +
                '<div class="num"><span>' + $index + '</span></div>' +
                '</div>');
        });

        _this.events(this.data);
        _this.createPalette(_sliders.children(), "#ff0000");
    },
    popDraw : function ( target ) {
        let _this =this;

        return '<div class="slide-pop" style="' +
            'z-index:' + (_this.data.length - target.index()) + ';' +
            'background-color:' + target.css("background-color") + ';">' +
            '<div class="slide-head">' +
            '<div class="num"><span>' + (target.index() + 1) + '</span></div>' +
            '<p class="title">' + _this.data[target.index()].title + '</p>' +
            '<button type="button" class="slide-close-btn">닫기</button>' +
            '</div>' +
            '<div class="slide-body">' +
            '<p class="desc">' + _this.data[target.index()].desc + '</p>' +
            '</div>' +
            '</div>'
    },
    events: function (data) {
        let _this = this;
        let _activateClassName = "is-active";
        let _prevClassName = "is-prev";
        let _nextClassName = "is-next";
        let $currentTarget = null;
        let $currentTargetPop = null;
        let $sliders = $(this.el).find(".sliders");
        let $booy = $("body");

        $sliders.on("click", function (e) {

            let elem = $(e.target);


            if ($currentTarget !== null) {
                console.log(1)
                return;
            } else {
                $booy.addClass("is-locked")
                if (!elem.hasClass("slide")) {
                    if (elem.hasClass("inner") || elem.nodeName === "BODY") {
                        elem = null;
                        $currentTarget = null;
                        console.log(2)
                        return;
                    } else {
                        if (elem.hasClass("sliders")) {
                            elem = null;
                            $currentTarget = null;
                            console.log(3)
                            return;
                        } else {
                            elem = elem.parents(".slide")
                            $currentTarget = elem;
                            console.log(4, $currentTarget.index(), "창 열림")

                            $sliders.append(_this.popDraw($currentTarget) )
                            _this.open($sliders.find(".slide-pop"), _activateClassName)
                        }
                    }
                } else {
                    $currentTarget = elem
                    console.log(5, $currentTarget, "창 열림")

                    $sliders.append(_this.popDraw($currentTarget) )
                    _this.open($sliders.find(".slide-pop"), _activateClassName)
                }
            }

        })

        $(document).on("click", this.button, function (e) {
            if (!$(e.target).hasClass("slide-close-btn")) {
                return;
            } else {
                $booy.removeClass("is-locked")
                _this.close($sliders.find(".slide-pop"), _activateClassName)
                $sliders.find(".slide-pop").remove()
                $currentTarget = null;
                console.log(6, $currentTarget, "창 닫음")
            }
        })
    },
    open: function (el, className) {
        $(el).addClass(className)
    },
    close : function ( el , className) {
        $(el).removeClass(className)
    },
    createPalette : function (el, color) {
        let r = parseInt(color.replace("#", "").substring(0, 2), 16);
        let g = parseInt(color.replace("#", "").substring(2, 4), 16);
        let b = parseInt(color.replace("#", "").substring(4, 6), 16);
        let elem = el;
        let total = elem.length;
        let lengthPercent = parseInt(255 / total);
        let red;
        let green;
        let blue;

        // console.log(r, g, b)

        for (let i = 0; i < total; i++) {

            elem[i].style.backgroundColor = color;

            r = 255;
            g = (g + 10 < 255) ? g + lengthPercent : g;
            b = (b + 10 < 255) ? b + lengthPercent : b;

            // console.log(r, g, b, i, elem.length)

            red = (r.toString(16).length <= 1) ? "0" + r.toString(16) : r.toString(16);
            green = (g.toString(16).length <= 1) ? "0" + g.toString(16) : g.toString(16);
            blue = (b.toString(16).length <= 1) ? "0" + b.toString(16) : b.toString(16);

            // console.log(red, green, blue)

            if (color === "rgb(" + r + "," + g + "," + b + ")") {
                return false;
            } else {
                color = "rgb(" + r + "," + g + "," + b + ")";
            }
        }
    }
}
$(function () {
    rotateSlide.init( "slide1", rotateSlidedata )
})