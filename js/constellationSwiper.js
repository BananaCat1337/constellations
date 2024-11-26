import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
console.log(Swiper)
document.addEventListener('DOMContentLoaded', () => {

 const swiper = new Swiper('.constellation__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    slideToClickedSlide: false,
    spaceBetween: 0,
    watchOverflow: true,
    speed: 800,
    loop: false,
    // Dots
    pagination: false,
    navigation: {
      nextEl: '.slider__arrow_next',
      prevEl: '.slider__arrow_prev',
    },
    
    // Адаптив Breakpoints ---------------------------
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 'auto',
        navigation: false,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991.98: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  const hiddenSlides = document.querySelectorAll('.hideConstellationGroup__slider')
  const checkCurrentSlideID = () => {
    for (const slide of document.querySelectorAll(constellationGroup__slider)) {
      let i = 0;
      if (swiper.clickedIndex !== i) {
        i = swiper.clickedIndex;
      }
    }
  }
  setTimeout(() => {
    hiddenSlides.forEach((el) => {
      el.classList.remove('hideConstellationGroup__slider')
    })
  },
  200)
})

