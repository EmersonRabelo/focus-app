export function pomoTemplate(counterValue) {
    
    let res = {
        template:`
        <div id="counter" class="counter">
            <div id="clock" class="clock">
                ${counterValue}
            </div>
        </div>
        `
    };

    return  res;
}

export function atualizaTemplate(){
    const value = localStorage.getItem('pomoCounter');
    document.getElementById('clock').textContent = value;

}