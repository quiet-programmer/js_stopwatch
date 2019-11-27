// variable for mini secoud, seconds, and minutes
var ms = 0;
var s = 0;
var m = 0;
var timer;
/////////////////////////// ends here/////////////////////////////


////////////// variable for the count and laps ////////////////
var stopWatch = document.querySelector(".stopwatch");
var lapscontainer = document.querySelector(".laps");
////////////////////// ends here ////////////////////////////


/////////////// function to start the timer /////////////
function start() {
    if(!timer) {
        timer = setInterval(run, 10);
    }
}
////////// ends here /////////////////////////////////////

//////////function to pause the timer //////////
function pause() {
    stopTimer();
}
////////// ends here ////////////////////////////

/////////// function to stop timer ///////
function stop() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;

    stopWatch.textContent = getTimer();
}
///////// ends here ///////////////////

function restart() {
    stop();
    start();
}

function lap() {
    if(timer) {
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapscontainer.appendChild(li);
    }
}

function resetlap() {
    lapscontainer.innerHTML = '';
} 

function run() {

    stopWatch.textContent = getTimer();
    ms++;

    if(ms == 100) {
        ms = 0;
        s++;
    }

    if(s == 60) {
        s = 0;
        m++;
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}