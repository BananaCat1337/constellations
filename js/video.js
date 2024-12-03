document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("videoElement");
  const openPopUpBtn = document.getElementById("openPopUp_video");
  const parentContainer = document.body;

  openPopUpBtn.addEventListener("click", () => {
    videoElement.style.display = "block";
    videoElement.play();
  });

  parentContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_close")) {
      handleClosePopup(videoElement);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (videoElement.style.display === "block") {
      event.preventDefault();
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }
  if (event.code === "KeyF") {
    event.preventDefault();
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
});

function handleClosePopup(videoElement) {
  videoElement.pause();
  videoElement.currentTime = 0;
  videoElement.style.display = "none";
}
