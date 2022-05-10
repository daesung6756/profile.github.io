var makeInputArray = ["영화 관람권", "콤보 2천원 할인권", "팝콘(중) 교환권", "영화 2천원 할인권", "다음 기회에 꽝!", "음료(중) 교환권"];
var rouletteImg = {
    init : function() {
        // this.drawArray(".output-rotate .roullet-inner", makeInputArray);
        this.startAnimation(makeInputArray);
    },
    drawArray : function (el, array){
        var $outputInner = $(el);
        $.each(array, function(key, value){
            $outputInner.append("<div class='angle-panel'><span class='text'>" + value + "</span></div>");
        });
    },
    startAnimation : function(array) {
        var totalAngle = 0;
        var $play = $('[data-roulet="playBtn"]');
        var $outputInner = $(`[data-roulet="outInner"]`);

        $play.on('click', function(){
            var max = 360;
            var min = 1;
            var $rotateAction =  (360*40);
            var $random = Math.floor(Math.random() * (max - min +1)) + min;
            var $angle = $rotateAction + $random;

            if(totalAngle !== 0) {
                totalAngle = 0;
                $outputInner.css({"transform": "rotate(" +  totalAngle + "deg)", "transition":"none"});
                $play.text("시작");
            } else {
                $play.attr('disabled', true);
                totalAngle = $angle;
                $outputInner.css({"transform": "rotate(" +  totalAngle + "deg)", "transition": "all 2.4s"});

                setTimeout(function() {
                    if($random < 31 || $random > 331){
                        alert(array[1]);
                    } else if($random < 91) {
                        alert(array[0]);
                    } else if($random < 151) {
                        alert(array[5]);
                    } else if($random < 211) {
                        alert(array[4]);
                    } else if($random < 271) {
                        alert(array[3]);
                    } else if($random < 331) {
                        alert(array[2]);
                    }

                    $play.attr('disabled', false);
                    $play.text("재시작");

                }, 2400);

            }
        });
    }
};



$(function() {
    rouletteImg.init();
});
