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
            }
        },
        scripts : function (){
            document.write('<script src="js/vendor/jquery-3.4.0.min.js"></script>');
            document.write('<script src="js/vendor/p5.min.js"></script>');
            document.write('<script src="js/grm.js"></script>');
            document.write('<script src="js/gdata.js"></script>');
            document.write('<script src="js/front-ui.js"></script>');
            document.write('<script src="js/profile.js"></script>');
        }
    },
    footer : {
        scripts : function(){
            document.write('<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
            document.write('<script src="js/draw-visual.js"></script>');
        }
    }

}