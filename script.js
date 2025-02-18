const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timeLeft = 1500;
let timer = document.getElementById("timer");
let interval;

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft == 0) {
            timeLeft = 1500;
            clearInterval(interval);
        }
    }, 1000)    
}

function pauseTimer() {

}

function resetTimer() {

}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timer.innerHTML = minutes + ":" + seconds;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
