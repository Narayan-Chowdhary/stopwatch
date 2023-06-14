//  all the  elements of the html code to give the functionality  
//  getting all the using selectors
let timerDisplay = document.querySelector('.timer-display');
let stopBtn = document.getElementById('stop-btn');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');
console.log('script added to code')



let milliSeconds = "0";
let seconds = "0";
let minutes = "0";
let hours = "0";

// starting timer is null
let timerId = null;

 //usagae of addEventListener and clearInterval

// add event on the click of start button
startBtn.addEventListener('click', function () {
    console.log('start Button clicked');
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

// add event on the click of stop button 
stopBtn.addEventListener('click', function () {
    console.log('stop Button clicked');
    clearInterval(timerId);
});

// add event on the click of reset button
resetBtn.addEventListener('click', function () {
    console.log('reset Button clicked');
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    milliSeconds = seconds = minutes = hours = "0";
});

// function that will magange increment of time
function startTimer() {
    milliSeconds++;
    if (milliSeconds == 100) {
        milliSeconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }


    // usage of ternary operations so time will display correctly when time is more/less than 0
    let milliSecondsString = milliSeconds < 10 ? `0${milliSeconds}` : milliSeconds;
    let secondsString = seconds < 10 ? `0${seconds}` : seconds;
    let minutesString = minutes < 10 ? `0${minutes}` : minutes;
    let hoursString = hours < 10 ? `0${hours}` : hours;

    
    timerDisplay.innerHTML = `${hoursString} : ${minutesString} : ${secondsString} : ${milliSecondsString}`;

}