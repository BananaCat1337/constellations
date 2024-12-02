document.addEventListener("DOMContentLoaded", () => {
  const constellations = document.querySelectorAll(".constellationToClick");
  const cardContainers = document.querySelectorAll(".cardContainer");
  const popUp3 = document.getElementById("popUp3");
  const popUp = document.getElementById("popUp");
  const backsideCard = document.querySelectorAll(".backsideBody");

  const swiperCards = new Swiper(".card__content", {
    loop: true,
    effect: "coverflow",
    speed: 1000,
    coverflowEffect: {
      rotate: 180,
      stretch: 0,
      depth: 0,
      modifier: 1,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      200: { slidesPerView: 1 },
      500: { slidesPerView: 3 },
      1150: { slidesPerView: 3 },
      1500: { spaceBetween: 50, slidesPerView: 3 },
      1600: { spaceBetween: 60 },
      1700: { spaceBetween: 70 },
    },
  });

  swiperCards.on('slideChange', () => {
    document.querySelectorAll('.backsideBody').forEach((el) => {
      el.style.transform = 'rotateY(180deg)';
    });
  });

  constellations.forEach((el) => {
    el.addEventListener("click", () => {
      const targetConstellation = el.getAttribute("data-constellation");
      const targetCardIndex = [...cardContainers].findIndex((card) => card.getAttribute("data-constellation") === targetConstellation);

      if (targetCardIndex !== -1) {
        popUp3.classList.add("active");
        popUp.classList.add("active");

        swiperCards.slideToLoop(targetCardIndex);
      }
    });
  });
});
