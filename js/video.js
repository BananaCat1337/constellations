document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("videoElement");
  const openPopUpBtn = document.getElementById("openPopUp_video");
  const parentContainer = document.body;
  const menuContainer = document.querySelector(".menu-container");

  openPopUpBtn.addEventListener("click", () => {
    menuContainer.style.zIndex = "0";
    videoElement.style.display = "block";
    videoElement.play();
  });

  parentContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_close")) {
      menuContainer.style.zIndex = "20";
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
