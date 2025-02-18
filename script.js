const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timeLeft = 1500;
let timer = document.getElementById("timer");
let interval;

function startTimer() {
    if (interval == null) {
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft == 0) {
                timeLeft = 1500;
                clearInterval(interval);
                interval == null;
            }
        }, 1000) 
    }
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    timeLeft = 1500;
    updateTimer();
    clearInterval(interval);
    interval == null;
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timer.innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
