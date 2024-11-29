document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".constellation__slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 90,
    watchOverflow: true,
    speed: 400,
    loop: false,
    pagination: false,
    navigation: {
      nextEl: ".constellation__slider_button-next",
      prevEl: ".constellation__slider_button-prev",
    },
  });

  const hiddenSlides = document.querySelectorAll(".hideConstellationGroup__slider");
  setTimeout(() => {
    hiddenSlides.forEach((el) => {
      el.classList.remove("hideConstellationGroup__slider");
    });
  }, 200);
});
