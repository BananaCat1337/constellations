document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.getElementById('videoElement');
  const openPopUpBtn = document.getElementById('openPopUp_video');
  const parentContainer = document.body;

  openPopUpBtn.addEventListener('click', () => {
    videoElement.style.display = 'block';
    videoElement.play().catch(error => console.error('Ошибка при воспроизведении:', error));
  });

  parentContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_close')) {
      handleClosePopup(videoElement);
    }
  });
});

function handleClosePopup(videoElement) {
  videoElement.pause();
  videoElement.currentTime = 0;
  videoElement.style.display = 'none';
}
