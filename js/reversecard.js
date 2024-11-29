addEventListener("DOMCodntentLoade", (event) => {
  const activeSlide = document.querySelector(".swiper-slide-active");
  console.log(activeSlide);
  const revertCard = (slide) => {
    const frontsideRemover = document.querySelector(".frontsideBody");
    console.log(frontsideRemover + "123123123123");
    frontsideRemover.classList.add("hideSmth");
  };
  revertCard(activeSlide);
});
