/* Get our Elements*/
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions*/
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  // Alternate way is Ternary operator
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.name);
  console.log(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the Event Listeners*/
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// video.addEventListener("Space", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));

let mouseDown = false;
progress.addEventListener("click", scrub);

// Same code written as below
/* progress.addEventListener("mousemove", e => {
  if (mouseDown) {
    scrub(e);
  }
});*/
progress.addEventListener("mousemove", e => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));

// Things to do on my own
/*
  Create Fullscreen button & on clicking it video goes fullscreen
  Create an Eventlistener that pauses the video on pressing spacebar key
*/
