/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//we have 2 methods play n pause on video object
function tooglePlay(){
	const method = video.paused ? "play" : "pause";
	video[method](); //calling method accordingly,if played then pause method called or vice-versa
}

//to update buttons according to the video state
function updateButton(){
	const icon = this.paused ? '►' : "❚ ❚";
	console.log(icon);
	toggle.textContent = icon;
	//if video is paused are icon should have pause-icon and vice-versa
}

//to skip video either -10 or 25 as told in html
function skip(){
	video.currentTime = parseInt(this.dataset.skip); //this will give html value after data-
}

//to handle the range-slider of volume and playback
function handleRangeUpdate(){
	video(this.name) = this.value;
}

//progress-bar of video,progress of video is calculated by %of video played
function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener("click",toogelPlay); //whenever we click on video if it is paused it will be played n vice-vera
video.addEventListener("play",updateButton); //if video is playing then play-button should be active
video.addEventListener("pause",updateButton); //if video is not-playing then pause-button should be active
video.addEventListener("timeUpdate",handleProgress);
toggle.addEvenListener("click",tooglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseover',handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown=true);



