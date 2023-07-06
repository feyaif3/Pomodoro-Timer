let workTitle = document.getElementById('work')
let breakTitle = document.getElementById('break')

let workTime = 40;
let breakTime = 5;
let seconds = "00"

//clock display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

//start timer
function start() {
    // change time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
        //change display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

    }

    //start countdown
    setInterval(timerFunction, 1000); // 1000 = 1second
}