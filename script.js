const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');

setInterval(setClock,1000);
function setClock(){
    let date = new Date();
    let secondRatio = date.getSeconds()/60;
    let minuteRatio = (secondRatio + date.getMinutes())/60;
    let hourRatio = (minuteRatio + date.getHours())/12;

    setRotation(second, secondRatio);
    setRotation(minute, minuteRatio);
    setRotation(hour, hourRatio);
}

function setRotation(element, ratio){
    element.style.setProperty('--rotation', ratio * 360);
}

setClock();