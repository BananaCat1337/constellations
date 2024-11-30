document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".constellation__slider", {
    slidesPerView: 1,
    allowTouchMove: true,
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
  });

  const hiddenSlides = document.querySelectorAll(".hideConstellationGroup__slider");
  setTimeout(() => {
    hiddenSlides.forEach((el) => {
      el.classList.remove("hideConstellationGroup__slider");
    });
  }, 200);
});
