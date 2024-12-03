const video = document.getElementById('videoElement');

document.getElementById("videoElement").addEventListener("click", function () {
    if (this.paused) {
      this.play();
      video.setAttribute('controls', 'controls');
    } else {
      this.pause();
    }
  });
