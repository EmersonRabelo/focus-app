import './style.css'

import { pomoTemplate } from './components/pomo-counter-component/template.js'
import { pomoTimer, stop }  from '/components/pomo-counter-component/timer.js'

import { config } from '/components/config.js'

// core application function
(()=>{

    const {traitsPomo} = config(),
        pomoCounter = localStorage.getItem('pomoCounter'),
            pomoCarryOn = localStorage.getItem('pomo-carry-on');
    
    const counterContainer = document.getElementById('counter-container');
    const btnStartCounter = document.getElementById('btn-start');

    const btnPomo = document.getElementById('btn-pomo');
    const btnShort = document.getElementById('btn-short');
    const btnLong = document.getElementById('btn-long');



    window.onload = () => {
        let template = pomoTemplate(pomoCounter ?? traitsPomo);
        counterContainer.innerHTML = template.template;
        
        window.setInterval(()=>{
            const pomoCounter = localStorage.getItem('pomoCounter'),
                pomo = localStorage.getItem('pomo'),
                    isRunning = localStorage.getItem('isRunning'),
                        isPaused= localStorage.getItem('isPaused');

            if (pomoCounter < pomo ){
                if (isRunning == 1 & isPaused ==-0){
                    btnStartCounter.innerText = 'Pause'
                }


                if(isRunning == 0 && isPaused == 1){
                    btnStartCounter.innerText = 'Continue'
                }
            }
        }, 50);

        btnStartCounter.addEventListener('click', ()=>{

            const opt = btnStartCounter.getAttribute('value');

            switch (opt) {
                case '0':

                    localStorage.setItem('isRunning', 1);
                    pomoTimer(parseInt(traitsPomo) * 60)
                    btnStartCounter.setAttribute('value', 1);

                    break;
                case '1':

                    localStorage.setItem('isPaused', 1);
                    localStorage.setItem('isRunning', 0);
                    btnStartCounter.setAttribute('value', 2);
                    stop(50);

                    break;
                case '2':

                    localStorage.setItem('isRunning', 1);
                    localStorage.setItem('isPaused', 0);
                    pomoTimer(pomoCarryOn);
                    btnStartCounter.setAttribute('value', 1);

                    break;
            }
        });
    }


    function startStop(){
    
    }


})();







