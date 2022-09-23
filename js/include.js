var include = {
    head : {
        title : function(tit){
            document.write('<title>' + tit + '</title>');
        },
        meta :function () {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        },
        styles : {
            common : function () {
                document.write('<link rel="stylesheet" href="css/reset.css">');
                document.write('<link rel="stylesheet" href="css/common.css">');
                document.write('<link rel="stylesheet" href="css/animation.css">');
                document.write('<link rel="stylesheet" href="css/theme.css">');
            },
            index : function () {
                document.write('<link rel="stylesheet" href="css/index.css">');
                document.write('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');
            },
            profile : function () {
                document.write('<link rel="stylesheet" href="css/profile.css">');
            },
            mailCodingTest : function() {
                document.write('<link rel="stylesheet" href="css/mail-test.css">');
            },
            snippet : function () {
                document.write('<link rel="stylesheet" href="css/snippet.css">');
            },
            screenSize : function() {
                document.write('<link rel="stylesheet" href="css/screen-size.css">');
            }
        },
        scripts : function (){
            document.write('<script type="text/javascript" src="js/vendor/jquery-3.4.0.min.js"></script>');
            document.write('<script type="text/javascript" src="js/vendor/p5.min.js"></script>');
            document.write('<script type="text/javascript" src="js/grm.js"></script>');
            document.write('<script type="text/javascript" src="js/control-data.js"></script>');
        }
    },
    footer : {
        scripts : function(){
            document.write('<script type="text/javascript" src="js/vendor/slick.min.js"></script>');
            document.write('<script type="text/javascript" src="js/front-ui.js"></script>');
            document.write('<script type="text/javascript" src="js/draw-visual.js"></script>');
        }
    },
    addFunction : {
        snippet : function(){
            document.write('<script type="text/javascript" src="js/snippet.js"></script>');
        }
    }
}