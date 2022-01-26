var tmpAnimation = 0;

function rotate(x, y) {

    var elem = $("#inner");
    tmpAnimation += y;
    $({
        degrees: tmpAnimation - y
    }).animate({
        degrees: tmpAnimation
    }, {
        duration: 1000,
        step: function(now) {
            elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

    setTimeout(() => {
        $("#container").animate({
            left: "100%"

        }, {
            duration: 1500
        });
        $("#leftContainer").animate({
            left: "-100%"

        }, {
            duration: 2550
        });
    }, 1500);
    setTimeout(() => {
        $("#container").css("display", "none");
        $("#leftContainer").css("display", "none");
    }, 3000);
};