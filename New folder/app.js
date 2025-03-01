let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const getHtmlMin = document.getElementById('min');
const getHtmlSec = document.getElementById('sec');
const getHtmlMsec = document.getElementById('msec');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');

function formatTime(val) {
    return val < 10 ? '0' + val : val;
}

function start() {
    interval = setInterval(function () {
        milliseconds++;
        getHtmlMsec.innerHTML = formatTime(milliseconds);

        if (milliseconds >= 100) {
            seconds++;
            getHtmlSec.innerHTML = formatTime(seconds);
            milliseconds = 0;
        }
        
        if (seconds >= 60) {
            minutes++;
            getHtmlMin.innerHTML = formatTime(minutes);
            seconds = 0;
        }
    }, 10);

    btnStart.disabled = true;
}

function pause() {
    clearInterval(interval);
    btnStart.disabled = false;
}

function reset() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    getHtmlMin.innerHTML = formatTime(minutes);
    getHtmlSec.innerHTML = formatTime(seconds);
    getHtmlMsec.innerHTML = formatTime(milliseconds);

    clearInterval(interval);
    btnStart.disabled = false;
}
