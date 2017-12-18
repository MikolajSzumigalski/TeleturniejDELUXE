function odswierz2() {
    var t21 = document.getElementById("t21").innerHTML,
        t22 = document.getElementById("t22").innerHTML,
        t23 = document.getElementById("t23").innerHTML,
        t24 = document.getElementById("t23").innerHTML,
        t31 = document.getElementById("t31").innerHTML,
        t32 = document.getElementById("t32").innerHTML,
        t33 = document.getElementById("t33").innerHTML,
        t34 = document.getElementById("t34").innerHTML
    if (sessionStorage.pula)
    {
        document.getElementById("pula").innerHTML = sessionStorage.pula;
    document.getElementById("pula2").innerHTML = sessionStorage.pula;
    }
    else {
        sessionStorage.pula = 0;
        document.getElementById("pula").innerHTML = sessionStorage.pula;
        document.getElementById("pula2").innerHTML = sessionStorage.pula;
    }    
    if (sessionStorage.count1)
        document.getElementById("t31").innerHTML = sessionStorage.count1;
    else {
        sessionStorage.count1 = 0;
        document.getElementById("t31").innerHTML = sessionStorage.count1;
    }
    if (sessionStorage.count2)
        document.getElementById("t32").innerHTML = sessionStorage.count2;
    else {
        sessionStorage.count2 = 0;
        document.getElementById("t32").innerHTML = sessionStorage.count2;
    }
    if (sessionStorage.count3)
        document.getElementById("t33").innerHTML = sessionStorage.count3;
    else {
        sessionStorage.count3 = 0;
        document.getElementById("t33").innerHTML = sessionStorage.count3;
    }
    if (sessionStorage.count4)
        document.getElementById("t34").innerHTML = sessionStorage.count4;
    else {
        sessionStorage.count4 = 0;
        document.getElementById("t34").innerHTML = sessionStorage.count4;
    }
}

window.onload = odswierz2();

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
    odswierz2();
    var pula = document.getElementById("pula").innerHTML
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
                odswierz();
            });
    /*Licytacja po 200 od kazdej*/
    if(Number(sessionStorage.count1) >=200){
            sessionStorage.count1 = sessionStorage.count1 - 200;
        sessionStorage.pula = Number(sessionStorage.pula) + 200;
        document.getElementById("t21").innerHTML = 200;
    }
    if(Number(sessionStorage.count2) >=200){
            sessionStorage.count2 = sessionStorage.count2 - 200;
        sessionStorage.pula = Number(sessionStorage.pula) + 200;
        document.getElementById("t22").innerHTML = 200;
    }
    if(Number(sessionStorage.count3) >=200){
            sessionStorage.count3 = sessionStorage.count3 - 200;
        sessionStorage.pula = Number(sessionStorage.pula) + 200;
        document.getElementById("t23").innerHTML = 200;
    }
    if(Number(sessionStorage.count4) >=200){
            sessionStorage.count4 = sessionStorage.count4 - 200;
        sessionStorage.pula = Number(sessionStorage.pula) + 200;
        document.getElementById("t24").innerHTML = 200;
    }
    for (var i = 1; i < 5; i++)
    dodaj_do_puli(i);
    
    for (var j = 1; j < 5; j++)
    va_banque(j);
    
    odswierz2();
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

document.getElementById("btnpula").addEventListener("click", function () {
    odswierz2();
    if (document.getElementById("teampula").value == "1")
        sessionStorage.count1 =
            Number(sessionStorage.count1) +
            Number(sessionStorage.pula);
    if (document.getElementById("teampula").value == "2")
        sessionStorage.count2 =
            Number(sessionStorage.count2) +
            Number(sessionStorage.pula);
    if (document.getElementById("teampula").value == "3")
        sessionStorage.count3 =
            Number(sessionStorage.count3) +
            Number(sessionStorage.pula);
    if (document.getElementById("teampula").value == "4")
        sessionStorage.count4 =
            Number(sessionStorage.count4) +
            Number(sessionStorage.pula);
    sessionStorage.pula = 0;
    odswierz2();
    odswierz();
})

function dodaj_do_puli(column){
    console.log("somth");
    document
        .getElementById("teambtn"+ column)
        .addEventListener("click", function() {
        if(column == 1)
            {
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("teams" + column).value) - Number(document.getElementById("t2"+ column).innerHTML)
                console.log("somth1");
                 sessionStorage.count1 = Number(sessionStorage.count1) - document.getElementById("teams" + column).value + Number(document.getElementById("t2"+ column).innerHTML)
                document.getElementById("t2"+ column).innerHTML = document.getElementById("teams" + column).value 
                odswierz2();
            }
        if(column == 2)
            {
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("teams" + column).value) - Number(document.getElementById("t2"+ column).innerHTML)
                console.log("somth2");
                 sessionStorage.count2 = Number(sessionStorage.count2) - Number(document.getElementById("teams" + column).value) + Number(document.getElementById("t2"+ column).innerHTML)
                document.getElementById("t2"+ column).innerHTML = document.getElementById("teams" + column).value
                odswierz2();
            }
        if(column == 3)
            {
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("teams" + column).value) - Number(document.getElementById("t2"+ column).innerHTML)
                console.log("somth3");
                 sessionStorage.count3 = Number(sessionStorage.count3) - Number(document.getElementById("teams" + column).value) + Number(document.getElementById("t2"+ column).innerHTML)
                document.getElementById("t2"+ column).innerHTML = document.getElementById("teams" + column).value 
                odswierz2();
            }
        if(column == 4)
            {
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("teams" + column).value) - Number(document.getElementById("t2"+ column).innerHTML)
                console.log("somth4");
                 sessionStorage.count4 = Number(sessionStorage.count4) - Number(document.getElementById("teams" + column).value) + Number(document.getElementById("t2"+ column).innerHTML)
                document.getElementById("t2"+ column).innerHTML = document.getElementById("teams" + column).value 
                
                odswierz2();
            }
        odswierz2();
    })
}
function va_banque(column){
    document
        .getElementById("vbtn"+ column)
        .addEventListener("click", function() {
        if(column == 1)
            {
                var pom1 = Number(document.getElementById("t3" + column).innerHTML) + Number(document.getElementById("t2"+ column).innerHTML) 
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("t3" + column).innerHTML)
                 sessionStorage.count1 = 0
                document.getElementById("t2"+ column).innerHTML = pom1
                odswierz2();
            }
        if(column == 2)
            {
                var pom2 = Number(document.getElementById("t3" + column).innerHTML) + Number(document.getElementById("t2"+ column).innerHTML) 
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("t3" + column).innerHTML)
                 sessionStorage.count2 = 0
                document.getElementById("t2"+ column).innerHTML = pom2
                odswierz2();
            }
        if(column == 3)
            {
                var pom3 = Number(document.getElementById("t3" + column).innerHTML) + Number(document.getElementById("t2"+ column).innerHTML) 
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("t3" + column).innerHTML)
                 sessionStorage.count3 = 0
                document.getElementById("t2"+ column).innerHTML = pom3
                odswierz2();
            }
        if(column == 4)
            {
                var pom4 = Number(document.getElementById("t3" + column).innerHTML) + Number(document.getElementById("t2"+ column).innerHTML) 
                sessionStorage.pula = Number(sessionStorage.pula) + Number(document.getElementById("t3" + column).innerHTML)
                 sessionStorage.count4 = 0
                document.getElementById("t2"+ column).innerHTML = pom4
                odswierz2();
            }
        odswierz2();
    })
}