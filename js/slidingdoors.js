var tmpAnimation = 0;
var tmpAnimation2 = 0;

function rotate(x, y) {

    var elem = $("#innerLeft");
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
        $("#leftLight").css("background-color", "lime");
        rotate2(270);
    }, 1500);

};

function rotate2(x) {

    var elem = $("#innerRight");
    tmpAnimation2 += x;
    $({
        degrees: tmpAnimation2 - x
    }).animate({
        degrees: tmpAnimation2
    }, {
        duration: 1000,
        step: function(now) {
            elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

    setTimeout(() => {
        $("#rightLight").css("background-color", "lime");

    }, 1250);
    setTimeout(() => {
        openDoors();
    }, 2000);

};

function openDoors() {
    $("#rightContainer").animate({
        left: "100%"

    }, {
        duration: 2500
    });
    $("#leftContainer").animate({
        left: "-100%"

    }, {
        duration: 2500
    });
    setTimeout(() => {
        $("#doors").css("display", "none");

    }, 1500);
}