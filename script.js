const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stopper = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let countMin = 00;
let countSec = 00;
let stopInterval;


function updateCount(e) {

    if(countSec === 60) {
        countMin = Number(countMin) + 1;
        countSec = 0;
    } else {
        countSec = 1 + Number(countSec);
    }
    countSec = String(countSec).padStart(2, "0");
    countMin = String(countMin).padStart(2, "0");

    timer.textContent = `${countMin} : ${countSec}`
}
function starting(e) {
    start.disabled = true;
    stopInterval = setInterval(updateCount, 1000);
}

function reseting() {
    countMin = 00;
    countSec = 00;
    timer.textContent = `${countMin} : ${countSec}`

    start.disabled = false;
}

// adding event listener on start btn
start.addEventListener('click', () => {
    starting();
});

// adding event listener on reset btn
reset.addEventListener('click', reseting);

// adding event listener on stop btn
stopper.addEventListener('click', () => {
    clearInterval(stopInterval);
    start.disabled = false;
});
