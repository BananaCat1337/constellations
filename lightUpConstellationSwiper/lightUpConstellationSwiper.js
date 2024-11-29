let swiperCards = new Swiper(".card__content", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 2,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 80,

  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 2,
    },
    1500: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    1600: {
      spaceBetween: 60,
    },
    1700: {
      spaceBetween: 70,
    },
  },
});
