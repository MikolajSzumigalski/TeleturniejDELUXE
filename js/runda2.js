document.getElementById("kolo").addEventListener("click", function () {
    document.getElementById("losowanie").play();
    $.fn.animateRotate = function (angle, duration, easing, complete) {
        return this.each(function () {
            var $elem = $(this);

            $({
                deg: 0
            }).animate({
                deg: angle
            }, {
                duration: duration,
                easing: easing,
                step: function (now) {
                    $elem.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                complete: complete || $.noop
            });
        });
    };
    $('#kolo').animateRotate(3000+Math.floor((Math.random() * 360) + 1), 10000);
});

document.getElementById("licytacja").addEventListener("click", function (){
            $("#lic").animate(
                {
                    opacity: "1",
                },
                "slow"
            );
            $("#lic").css("z-index", 3);

            $("#licwyj").click(function() {
                $("#lic").animate(
                    {
                        opacity: "0",
                    },
                    "slow",
                    function() {
                        $("#lic").css("z-index", -1);
                    }
                );
            });
            });

function pytania(row, column) {
    document
        .getElementById("o" + row + column)
        .addEventListener("click", function() {
            var o = "#o" + row + column,
                oqbtn_id = "#oqbtn" + row + column,
                oa = "#oa" + row + column,
                oabtn = "#oabtn" + row + column,
                oq = "#oq" + row + column;

            $(oq).animate(
                {
                    opacity: "1",
                },
                "slow"
            );
            $(oq).css("z-index", 1);

            $(oqbtn_id).click(function() {
                $(oq).animate(
                    {
                        opacity: "0",
                    },
                    "slow",
                    function() {
                        $(oq).css("z-index", -1);
                    }
                );
                $(o).css({
                    "background-image": "none",
                    "color": "black",
                });
            });

            $(oabtn).click(function() {
                $(oa).animate(
                    {
                        opacity: "1",
                    },
                    "slow"
                );
            });
            //ustawienie timera
            //zakładamy tutaj że parent element jest divem z klasą timer, oraz ma ustawione
            //data-timer na czas który ma sie pojawić na timerze w sekundach
            var parent_div = document.getElementById("oq" + row + column);
            var children = parent_div.childNodes;
            var timer_div = null;
            //szukamy dziecka z klasą timer
            for (var i = 0; i < children.length; i++) {
                if (children[i].className == "timer") timer_div = children[i];
            }
            if (timer_div) {
                //wstawiamy początkową wartość minut i sekund
                minutes = parseInt(parent_div.dataset.timer / 60, 10);
                seconds = parseInt(parent_div.dataset.timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timer_div.innerHTML = minutes + ":" + seconds;
                $("#otbtn" + row + column).click(function() {
                    startTimer(parseInt(parent_div.dataset.timer), timer_div);
                });
            } else console.warn("There is no timer in " + row + " " + column);
        });
}

for (var i = 1; i < 8; i++) {
    for (var j = 1; j < 4; j++) {
        pytania(i, j);
    }
}