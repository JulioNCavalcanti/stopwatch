var timer;
var seconds = 0, minutes = 0, hours = 0;
var play = true;
var pause = false;
var reset = false

function addLeadingZero(value) {
    return value < 10 ? "0" + value : value;
}

function startTimer() {
    if (play) {
        timer = setInterval(function () {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            var displayHours = addLeadingZero(hours);
            var displayMinutes = addLeadingZero(minutes);
            var displaySeconds = addLeadingZero(seconds);

            document.querySelector(".timer").textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
        }, 1000);

        play = false;
        reset = true;
        pause = true;
    }

}

function pauseTimer() {
    clearInterval(timer);
    pause = false;
    reset = true;
    play = true;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector(".timer").textContent = "00:00:00";
    reset = false;
    pause = false;
    play = true;
}