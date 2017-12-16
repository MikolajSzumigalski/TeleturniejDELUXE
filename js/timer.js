function startTimer(duration, display) {
    //duration - w sekundach, display - parent element w ktrym bedzie wyswietalny zegar
    var timer = duration,
        minutes,
        seconds;
    var interval_id = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (minutes == 0 && seconds < 10) {
            display.style.color = "red";
        }
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval_id);
        }
    }, 1000);
}
