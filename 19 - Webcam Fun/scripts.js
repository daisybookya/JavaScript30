const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
let btn = document.querySelector('.btn');
let isActive = false;


function takePhoto(){

    if(!isActive){
        alert('裝置錯誤!無法使用')
        return false;
    }
    snap.currentTime = 0;
    snap.play();

    let imgData = canvas.toDataURL('image/jpeg');
    let link = document.createElement('a');
    link.href = imgData;
    link.setAttribute('download','beauty');
    link.innerHTML = `<img src="${imgData}" />`;
    strip.insertBefore(link,strip.firstChild);
    console.log(link);

}
//step1-connect meidea get data
function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(mediaStream=>{
            console.log(mediaStream);
            video.src = window.URL.createObjectURL(mediaStream);
            video.play();
        })
        .catch(err=>{
            isActive = false;
            console.log('error!',err);
        })
}
//step2 - video data paint to canvas
function paintToCanvas(){
    console.log(`paintToCanvas`)
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    return setInterval(()=>{
        ctx.drawImage(video,0,0,canvas.width,canvas.height);

        let pxs = ctx.getImageData(0,0,canvas.width,canvas.height);

        pxs = rgbSplit(pxs);

        ctx.putImageData(pxs,0,0);
    },16)
}
//step3 - add img screen effect
function rgbSplit(pixel){
    //i -> (r,g,b,alpha) -> 4)
    for(let i=0;i<pixel.data.length;i+=4){
        pixel.data[i - 150] = pixels.data[i + 0]; // RED
        pixel.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixel.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixel;
}

getVideo();
btn.addEventListener('click',takePhoto)
video.addEventListener('canplay',paintToCanvas);