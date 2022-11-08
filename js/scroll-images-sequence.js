
var $img = new Image();
var $canvas = document.querySelector("[data-sequence='scrollImageSequence']");
var ctx = $canvas.getContext('2d');
var scrollYpos;

window.addEventListener('scroll', function (e) {
    scrollYpos = Math.round(window.scrollY/20);
    scrollYpos = scrollYpos % 10;

    player(scrollYpos)

});

function player (num) {
    switch (num){
        case: ""
    }
    $img.src = "images/sequence/scrollImageSequence/ventus-" + num + ".jpg"
}

$img.addEventListener("load",function () {
    ctx.clearRect(0 ,0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage($img ,0 ,0)
})

document.addEventListener("DOMContentLoaded", function () {
    ;
})
