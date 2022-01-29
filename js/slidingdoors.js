var origin1 = 0;
var origin2 = 0;


$(".spinner").click(function() {
    rotate(this.id, 0, 180, 2000, callBackTest);
})



function rotate(a, b, c, d, e) {
    el = "#" + a;
    var elem = $(el);
    b += c;
    $({
        degrees: b - c
    }).animate({
        degrees: b
    }, {
        duration: d,
        step: (i) => {
            elem.css({
                transform: 'rotate(' + i + 'deg)'
            });
            i == c ? e(a) : {};
        }
    });
};


function callBackTest(x) {
    x == "innerRight" ? (e = "innerLeft", l = "#rightLight") : (e = "innerRight", l = "#leftLight");
    $(l).css("background-color", "lime");
    rotate(e, 0, 320, 2000, openDoors);
}



function openDoors() {
    if ($("#rightLight").css("background-color", "red")) {
        $("#rightLight").css("background-color", "lime");
    }
    if ($("#leftLight").css("background-color", "red")) {
        $("#leftLight").css("background-color", "lime");
    }


    $("#rightContainer").delay(600).animate({ left: '100%' }, 2000);
    $("#leftContainer").delay(600).animate({ left: '-100%' }, 2000, function() {
        $("#doors").css("display", "none");
        console.log("suck my balls");
    });




}