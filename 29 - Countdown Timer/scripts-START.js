let btns = document.querySelectorAll('button');
let displayCount = document.querySelector('.display__time-left');
let displayUptime = document.querySelector('.display__end-time');
let counts;
let countSeds;

function countTime(times){
    countSeds = times;
    countdown();
    showCountdown(countSeds)
    timeUp(countSeds)
}
function timeUp(time){
    let date = new Date();
    let nowSeds = date.getSeconds()+Number(time);
    let mins = date.getMinutes()+ Math.floor(nowSeds/60);
    let hours = date.getHours()+ Math.floor(nowSeds/3600);
    displayUptime.textContent = `be back at -> ${zero(hours)}:${zero(mins)}`
}
function countdown(){
    if(countSeds !== 0){
        counts = setTimeout(function(){
            countSeds--
            countdown();
            showCountdown(countSeds);
        },1000);
    }else{
        clearTime();
    }
}
function showCountdown(time){
    let seds = time % 60;
    let mins = Math.floor(time/60);
    displayCount.textContent = `${zero(mins)}:${zero(seds)}`;
    if(time >= 3600){
        let hours = Math.floor(time/3600);
        displayCount.textContent = `${hours}:${zero(mins)}:${zero(seds)}`;
    }
}
function zero(num){
    if(num < 10){
        num = `0${num}`;
    }
    return num;
}
function clearTime(){
    clearTimeout(counts);
}
btns.forEach(item=> item.addEventListener('click',function(){
    countTime(this.dataset.time);
}));
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    let timeValue = (this.minutes.value)*60;
    console.log(timeValue);
    countTime(timeValue);
    this.reset();
});