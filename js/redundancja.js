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
            if (timer_div) {
                minutes = parseInt(parent_div.dataset.timer / 60, 10);
                seconds = parseInt(parent_div.dataset.timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timer_div.innerHTML = minutes + ":" + seconds;
                $("#tbtn" + row + column).click(function() {
                    startTimer(parseInt(parent_div.dataset.timer), timer_div);
                });
            } else console.warn("There is no timer in " + row + " " + column);
        });
}

for (var i = 2; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
        brak_redundancji(i, j);
    }
}

function brak_redundancji_bonusy(row, column) {
    document
        .getElementById("bbon" + row + column)
        .addEventListener("click", function() {
            var bon_id = "#bon" + row + column,
                bbon_id = "#bbon" + row + column,
                abon_id = "#abon" + row + column,
                bona_id = "#bona" + row + column,
                wbtn_id = "#wbtn" + row + column;

            $(bon_id).animate(
                {
                    opacity: "1",
                },
                "slow"
            );
            $(bon_id).css("z-index", 1);

            $(wbtn_id).click(function() {
                $(bon_id).animate(
                    {
                        opacity: "0",
                    },
                    "slow",
                    function() {
                        $(bon_id).css("z-index", 0);
                    }
                );
                $(bbon_id).css({
                    "background-image": "none",
                    "background-color": "black",
                });
            });

            $(abon_id).click(function() {
                $(bona_id).animate(
                    {
                        opacity: "1",
                    },
                    "slow"
                );
            });
        });
}

for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 4; j++) {
        brak_redundancji_bonusy(i, j);
    }
}
