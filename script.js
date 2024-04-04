const video = document.getElementById("video")
const play = document.getElementById("play")
const stopbtn = document.getElementById("stop")
const progress = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")

// play/pause video
const toggleVideoStatus = () => (video.paused ? video.play() : video.pause())
// play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}
//progress & timestamp
const updateProgress = () => true
//set video time to progress
const setVideoProgress = () => true

const stopVideo = () => {
  video.currenttime = 0
  video.pause()
}

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", toggleVideoStatus)
progress.addEventListener("change", setVideoProgress)
stopbtn.addEventListener("click", stopVideo)
