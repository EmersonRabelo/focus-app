import { atualizaTemplate } from './template.js'

let start;
let bar = document.getElementById('progressBar');

export function pomoTimer(duration) {
    let timer = duration, minutes, seconds;
    

    bar.max = timer;
    
    start = setInterval(() => {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);


        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        localStorage.setItem('pomo-carry-on', timer);
        localStorage.setItem('pomoCounter', `${minutes}:${seconds}`);

        console.log(`Duration = ${duration} - Timer = ${timer}`);

            localStorage.setItem('bar-progress', (parseInt(localStorage.getItem('pomo')) * 60) - localStorage.getItem('pomo-carry-on'));  

        atualizaTemplate();
        progressBar();

        if (--timer < 0) {
            timer = duration;
            localStorage.setItem('isRunning', 0);
            stop();
        }
    }, 1000);
}

export function stop(timeout = 1000) {
    console.log('calling stop');
    setTimeout(() => {
        clearInterval(start);
    }, timeout)
}

function progressBar() {
    bar.value = localStorage.getItem('bar-progress');
}
