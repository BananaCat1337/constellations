document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".constellation__slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 90,
    watchOverflow: true,
    speed: 1200,
    initialSlide: 0,
    loop: false,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next-mobyle",
      prevEl: ".swiper-button-prev-mobyle",
    },
    breakpoints: {
      200: { allowTouchMove: true },
      500: {},
      1150: {},
      1500: {},
      1600: {},
      1700: {},
    },
  });

  const hiddenSlides = document.querySelectorAll(".hideConstellationGroup__slider");
  setTimeout(() => {
    hiddenSlides.forEach((el) => {
      el.classList.remove("hideConstellationGroup__slider");
    });
  }, 200);
});
