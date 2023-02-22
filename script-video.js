function playVideo(video) {
    video.play();
}
function videoIn(video) {
    video.style.animation = "fadeInOpacity 2s ease-in"
    video.style.animationIterationCount = 1;
    video.style.opacity = 1;
}
function imageOut(image) {
    image.style.animation = "fadeOutOpacity 2s ease-in"
    image.style.animationIterationCount = 1;
    image.style.opacity = 0;
}
const coverLoad = async (video, image, time) => {
    if (video.currentTime > 1) {
        playVideo(video);
    } else {
        await delay(time);
        imageOut(image);
        await delay(1500);
        playVideo(video);
        videoIn(video);
    }
};

const delay = ms => new Promise(res => setTimeout(res, ms));
const video = document.getElementById('bloodstockVideo');
const image = document.getElementById('cover-img')
const pageLoadDatetime = Date.now();
video.disablePictureInPicture = true;

video.addEventListener('loadedmetadata', function() {
    this.currentTime = 1;
})

video.oncanplay = (event) => {
    if(pageLoadDatetime < (pageLoadDatetime + 4)) {
        let time = (((pageLoadDatetime + 4) - pageLoadDatetime)*1000);
        coverLoad(video, image, time)
    } else {
        coverLoad(video, image, 0)
    }
}

video.onwaiting = (event) => {
    document.getElementById('loader').style.display = 'flex';
}
video.onplaying = (event) => {
    document.getElementById('loader').style.display = 'none';
}

let muted = true;

function toggleSoundOnOff()  {
    if (muted == false) {
        muted = true
    } else if (muted == true) {
        muted = false
    }
    video.muted = muted;
}

