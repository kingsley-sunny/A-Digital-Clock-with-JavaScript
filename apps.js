const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const amOrPm = document.querySelector('.amOrPm');

function showTime(){
    hour.textContent = new Date().getHours() + ':';
    min.textContent = new Date().getMinutes() + ':';
    sec.textContent = new Date().getSeconds();

    amAndPmConverter(hour)

    // addZero(hour)
    addZero(min)
    addZero(sec)
}


function amAndPmConverter(item){
    if(parseInt(item.textContent) - 12 > -1){
        amOrPm.textContent = `PM`;
        item.textContent = parseInt(item.textContent) - 12
        item.textContent = item.textContent + ':'
        
    } else {
        amOrPm.textContent = `AM`;
    }
}

function addZero(item){
    if(parseInt(item.textContent) < 10){
        item.textContent = '0' + item.textContent;
    }
}


setInterval(showTime, 100)