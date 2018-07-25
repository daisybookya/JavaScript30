let theVideo = document.querySelector('.viewer');
let btnPlay = document.querySelector('.toggle');
let btnCutView = document.querySelectorAll('.player__button');
let btnChange = document.querySelectorAll('.player__slider');
let progress = document.querySelector('.progress');
let progressBar = document.querySelector('.progress__filled');
function togglePlay(){
    
    if(theVideo.paused){
        btnPlay.innerHTML =  '❚ ❚';
        theVideo.play();
    }else{
        btnPlay.innerHTML =  '►';
        theVideo.pause();
        
    }
}
togglePlay();
slideBar('volume');
slideBar('playbackRate');
function slideBar(type){
    let target = this.name || type;
    let item = document.querySelector(`label[for=${target}] span`);
    let itemValue = document.querySelector(`input[name=${target}]`).value;
    switch (target){
        case 'volume':
            item.innerHTML = `${Number(itemValue*100).toFixed(0)} %`;
            theVideo.volume = itemValue;
        break;

        case 'playbackRate':
            item.innerHTML = itemValue;
            theVideo.playbackRate = itemValue;
        break;
    }
}
function viewChange(){
    let itemValue = Number(this.dataset.skip);
    if(itemValue){
        let nowTime = theVideo.currentTime;
         theVideo.currentTime = (nowTime+itemValue).toFixed(0);
    }
}
function updateProgress(){
    let percent = (theVideo.currentTime / theVideo.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function changeProgress(e){
    let cutTime = (e.offsetX / progress.offsetWidth) * theVideo.duration;
    theVideo.currentTime = cutTime;
}
theVideo.addEventListener('timeupdate',updateProgress); 
//事件(timeupdate)為video.currentTime每次改變時就會觸發
theVideo.addEventListener('click',togglePlay);
btnPlay.addEventListener('click',togglePlay);
btnCutView.forEach(item =>item.addEventListener('click',viewChange));
btnChange.forEach(item =>{
    item.addEventListener('change',slideBar);
    item.addEventListener('mousemove',slideBar);
});
let isClick = false;
progress.addEventListener('click',changeProgress);
progress.addEventListener('mousedown',() => isClick = true);
progress.addEventListener('mouseup',() => isClick = false);
progress.addEventListener('mousemove',(e) => isClick && changeProgress(e));