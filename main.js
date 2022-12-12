import './public/javascript/background.js';
import './public/css/background.css';
import './style.css';

import { pomoTemplate } from './components/pomo-counter-component/template.js'
import { pomoTimer, stop }  from '/components/pomo-counter-component/timer.js'

import { config } from '/components/config.js'

// core application
(()=>{
    
    const {traitsPomo} = config(),
        pomoCounter = localStorage.getItem('pomoCounter'),
            pomoCarryOn = localStorage.getItem('pomo-carry-on');
    
    const counterContainer = document.getElementById('counter-container');
    const btnStartCounter = document.getElementById('btn-start');
    const btnRestartCounter = document.getElementById('btn-restart');

    const btnPomo = document.getElementById('btn-pomo');
    const btnShort = document.getElementById('btn-short');
    const btnLong = document.getElementById('btn-long');



    window.onload = () => {

        clearStore();

        if(clearStore() == true){

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

        }

        btnStartCounter.addEventListener('click', ()=>{
            startStop(btnStartCounter.getAttribute('value'))
        });

        btnRestartCounter.addEventListener('click', ()=> {
            const isRunning = localStorage.getItem('isRunning');
            const isPaused= localStorage.getItem('isPaused');
            if (isRunning == 1 || isPaused == 1){
                clearStore();

                stop(50);
    
                setTimeout(()=>{
                    location.reload();
                    pomoTimer(parseInt(traitsPomo) * 60);
                    location.reload();
                }, 500)
            }
        })
    }

    function startStop(opt){

        // 0 - Não iniciado
        // 1 - Rodando
        // 2 - Pausado

        switch (opt) {
            case '0':

                localStorage.setItem('isRunning', 1);

                pomoTimer(parseInt(traitsPomo) * 60);

                btnStartCounter.setAttribute('value', 1);

                break;
            case '1':

                localStorage.setItem('isPaused', 1);
                localStorage.setItem('isRunning', 0);

                btnStartCounter.setAttribute('value', 2);

                stop(50);

                break;
            case '2':
                const  pomoCarryOn = localStorage.getItem('pomo-carry-on');

                localStorage.setItem('isRunning', 1);
                localStorage.setItem('isPaused', 0);

                btnStartCounter.setAttribute('value', 1);

                pomoTimer(pomoCarryOn);
                
                break;
        }
    }

    function clearStore(){

        localStorage.setItem('isRunning', 0);
        localStorage.setItem('isPaused', 0);
        
        localStorage.removeItem('pomoCounter');
        localStorage.removeItem('pomo-carry-on');
        localStorage.removeItem('bar-progress');

        if (localStorage.getItem('pomoCounter') == null && localStorage.getItem('pomo-carry-on') == null){
            return true
        }
    }

})();







