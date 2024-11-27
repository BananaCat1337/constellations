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
    pagination: false,
    navigation: {
      nextEl: '.constellation__slider_button-next',
      prevEl: '.constellation__slider_button-prev',
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

