function brak_redundancji(row, column) {
    document
        .getElementById("q" + row + column)
        .addEventListener("click", function() {
            var div_id = "#pq" + row + column,
                btn_id = "#qbtn" + row + column,
                answer_id = "#a" + row + column,
                answer_btn_id = "#abtn" + row + column,
                q_id = "#q" + row + column;

            $(div_id).animate(
                {
                    opacity: "1",
                },
                "slow"
            );
            $(div_id).css("z-index", 1);

            $(btn_id).click(function() {
                $(div_id).animate(
                    {
                        opacity: "0",
                    },
                    "slow",
                    function() {
                        $(div_id).css("z-index", 0);
                    }
                );
                $(q_id).css({
                    "background-image": "none",
                    "background-color": "black",
                });
            });

            $(answer_btn_id).click(function() {
                $(answer_id).animate(
                    {
                        opacity: "1",
                    },
                    "slow"
                );
            });
            //ustawienie timera
            //zakładamy tutaj że parent element jest divem z klasą timer, oraz ma ustawione
            //data-timer na czas który ma sie pojawić na timerze w sekundach
            var parent_div = document.getElementById("pq" + row + column);
            var children = parent_div.childNodes;
            var timer_div = null;
            //szukamy dziecka z klasą timer
            for (var i = 0; i < children.length; i++) {
                if (children[i].className == "timer") timer_div = children[i];
            }
            $("#tbtn" + row + column).click(function() {
                startTimer(parseInt(parent_div.dataset.timer), timer_div);
            });
        });
}

// for (var i = 2; i < 5; i++) {
//     for (var j = 1; j < 5; j++) {
//         brak_redundancji(i, j);
//     }
// }
brak_redundancji(2, 1);

document.getElementById("bbon11").addEventListener("click", function() {
    console.log("dupa");
    $("#bon11").animate(
        {
            opacity: "1",
        },
        "slow"
    );
    $("#bon11").css("z-index", 2);

    $("#wbtn11").click(function() {
        $("#bon11").animate(
            {
                opacity: "0",
            },
            "slow",
            function() {
                $("#bon11").css("z-index", -1);
            }
        );
        $(".bbon11").css({
            "background-image": "none",
            "background-color": "black",
        });
    });

    $("#abon11").click(function() {
        $("#bona11").animate(
            {
                opacity: "1",
            },
            "slow"
        );
    });
});
document.getElementById("bbon12").addEventListener("click", function() {
    $("#bon12").animate(
        {
            opacity: "1",
        },
        "slow"
    );
    $("#bon12").css("z-index", 2);

    $("#wbtn12").click(function() {
        $("#bon12").animate(
            {
                opacity: "0",
            },
            "slow",
            function() {
                $("#bon12").css("z-index", -1);
            }
        );
        $("#bbon12").css({
            "background-image": "none",
            "background-color": "black",
        });
    });

    $("#abon12").click(function() {
        $("#bona12").animate(
            {
                opacity: "1",
            },
            "slow"
        );
    });
});
document.getElementById("bbon13").addEventListener("click", function() {
    $("#bon13").animate(
        {
            opacity: "1",
        },
        "slow"
    );
    $("#bon13").css("z-index", 2);

    $("#wbtn13").click(function() {
        $("#bon13").animate(
            {
                opacity: "0",
            },
            "slow",
            function() {
                $("#bon13").css("z-index", -1);
            }
        );
        $("#bbon13").css({
            "background-image": "none",
            "background-color": "black",
        });
    });

    $("#abon13").click(function() {
        $("#bona13").animate(
            {
                opacity: "1",
            },
            "slow"
        );
    });
});
