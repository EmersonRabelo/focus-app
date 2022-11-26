import { atualizaTemplate } from './template.js'


let start;

export function pomoTimer(duration) {
    let timer = duration, minutes, seconds;

    start = setInterval(() => {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);


        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        localStorage.setItem('pomo-carry-on', timer);
        localStorage.setItem('pomoCounter', `${minutes}:${seconds}`);

        atualizaTemplate();

        if (--timer < 0) {
            timer = duration;
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
