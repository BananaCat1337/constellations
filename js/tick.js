document.getElementById("videoElement").addEventListener("click", function () {
    if (this.paused) {
      this.play();  // Запускает видео
    } else {
      this.pause();  // Ставит видео на паузу
    }
  });