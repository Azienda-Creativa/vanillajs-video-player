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
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100

  // get minutes
  let minutes = Math.floor(video.currentTime / 60)

  if (minutes < 10) {
    minutes = "0" + String(minutes)
  }

  // get seconds
  let seconds = Math.floor(video.currentTime % 60)

  if (seconds < 10) {
    seconds = "0" + String(seconds)
  }

  timestamp.innerHTML = `${minutes}:${seconds}`
}

//set video time to progress
const setVideoProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100
}

const stopVideo = () => {
  video.currentTime = 0
  video.pause()
}

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", toggleVideoStatus)
progress.addEventListener("change", setVideoProgress)
stopbtn.addEventListener("click", stopVideo)
