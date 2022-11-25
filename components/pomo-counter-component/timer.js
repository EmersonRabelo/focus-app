import { atualizaTemplate } from './template.js'

export function pomoTimer(duration) {
    let timer = duration, minutes, seconds;

    const start = setInterval(() => {
        console.log(`Timer: ${timer}`);
        // console.log(`Duration to sec: ${duration * 60}`);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        console.log(`min- ${minutes} : sec - ${seconds}`);

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

    function stop() {
        setTimeout(() => {
            clearInterval(start);
        }, 1000)
    }
}