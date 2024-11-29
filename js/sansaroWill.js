addEventListener("DOMContentLoaded", (event) => {
  const rangeInput = document.querySelector("#range");
  const swiper = document.querySelector(".constellation__slider").swiper;

  rangeInput.addEventListener("input", () => {
    updateThumb();
  });

  const sliderInput = document.querySelector(".slider-input");

  let currPart = 0;
  let prevPart = 0;

  function changeCurrentSlide(curr, prev) {
    if (curr > prev) {
      swiper.slideNext();
    } else if (curr < prev) {
      swiper.slidePrev();
    }
  }

  const updateThumb = () => {
    const text = document.querySelector(".main-title");
    const value = rangeInput.value;
    text.classList.add("nevidimka");
    if (value < 72) {
      prevPart = currPart;
      currPart = 0;
      changeCurrentSlide(currPart, prevPart);
    } else if (value >= 72 && value < 144) {
      prevPart = currPart;
      currPart = 1;
      changeCurrentSlide(currPart, prevPart);
    } else if (value >= 144 && value < 216) {
      prevPart = currPart;
      currPart = 2;
      changeCurrentSlide(currPart, prevPart);
    } else if (value >= 216 && value < 288) {
      prevPart = currPart;
      currPart = 3;
      changeCurrentSlide(currPart, prevPart);
    } else if (value >= 288 && value < 360) {
      prevPart = currPart;
      currPart = 4;
      changeCurrentSlide(currPart, prevPart);
    } else if (value >= 360) {
      prevPart = currPart;
      currPart = 5;
      changeCurrentSlide(currPart, prevPart);
    }
  };
});
