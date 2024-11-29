document.addEventListener("DOMContentLoaded", (event) => {
  const slides = document.querySelectorAll(".constellationToClick");
  console.log(slides);
  const popUp3 = document.getElementById("popUp3");
  const popUp = document.getElementById("popUp");
  console.log(popUp3);
  slides.forEach((el, i) => {
    el.addEventListener("click", () => {
      console.log(111111111111);
      popUp3.classList.add("active");
      popUp.classList.add("active");
      let swiperCards = new Swiper(".card__content", {
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        initialSlide: i,
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
    });
  });
});
