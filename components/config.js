export function config (){
    
    localStorage.setItem('pomo', '01:00');
    localStorage.setItem('short', '05:00');
    localStorage.setItem('long', '10:00');
    localStorage.setItem('isRunning', 0);
    localStorage.setItem('isPaused', 0);

    let traits = {
        traitsPomo: localStorage.getItem('pomo'),
        traitShort: localStorage.getItem('short'),
        traitsLong: localStorage.getItem('long'),
    };

    return traits;
}