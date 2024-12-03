document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("videoElement");
  const openPopUpBtn = document.getElementById("openPopUp_video");
  const parentContainer = document.body;

  openPopUpBtn.addEventListener("click", () => {
    videoElement.style.display = "block";
    videoElement
      .play()
      .catch((error) => console.error("Ошибка при воспроизведении:", error));
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
        console.log("Видео воспроизводится");
      } else {
        videoElement.pause();
        console.log("Видео на паузе");
      }
    }
  }
  if (event.code === 'KeyF') {
    event.preventDefault();
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch((err) => console.error("Ошибка при переходе в полноэкранный режим:", err));
      console.log('Вошли в полноэкранный режим');
    } else {
      document.exitFullscreen().catch((err) => console.error("Ошибка при выходе из полноэкранного режима:", err));
      console.log('Выход из полноэкранного режима');
    }
  }
});

function handleClosePopup(videoElement) {
  videoElement.pause();
  videoElement.currentTime = 0;
  videoElement.style.display = "none";
}
