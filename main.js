import './style.css'

import { pomoTemplate } from './components/pomo-counter-component/template.js'
import { pomoTimer }  from '/components/pomo-counter-component/timer.js'

import { config } from '/components/config.js'

// core application function
(()=>{

    const {traitsPomo} = config();
    const pomoCounter = localStorage.getItem('pomoCounter');
    const pomoCarryOn = localStorage.getItem('pomo-carry-on');
    const pomoSetup = localStorage.getItem('pomo')
    


    const counterContainer = document.getElementById('counter-container');
    const btnStartCounter = document.getElementById('btn-start');
    const btnPauseCounter = document.getElementById('btn-pause');

    const btnPomo = document.getElementById('btn-pomo');
    const btnShort = document.getElementById('btn-short');
    const btnLong = document.getElementById('btn-long');



    window.onload = () => {
        let template = pomoTemplate(pomoCounter ?? traitsPomo);
        counterContainer.innerHTML = template.template;
        
        window.setInterval(()=>{
            const pomoCounter = localStorage.getItem('pomoCounter'),
                pomoSetup = localStorage.getItem('pomo'),
                    isRunning = localStorage.getItem('isRunning'),
                        isPaused= localStorage.getItem('isPaused');

            if (pomoCounter < pomoSetup ){
                
                if(isRunning == 1 && isPaused == 1){
                    btnStartCounter.innerText = 'Continue'
                }
            }


        }, 500);

    }

    btnStartCounter.addEventListener('click', (e)=>{

        // btn-start value = 0 no starts
        // btn-start value = 1 is Running
        // btn-start value = 2 is paused

        localStorage.setItem('isRunning', 1);

        pomoCarryOn ? pomoTimer(pomoCarryOn)
        : pomoTimer(parseInt(traitsPomo) * 60)

    });

    btnPauseCounter.addEventListener('click', (e)=> {
        localStorage.setItem('isPaused', 1);
    });


    function startStop(){
    
    }


})();







