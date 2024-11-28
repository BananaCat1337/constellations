let swiperCards = new Swiper(".card__content", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 80,

  breakpoints: {
    968: {
      slidesPerView: 3,
    },
  },
});