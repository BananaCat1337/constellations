addEventListener("DOMContentLoaded", (event) => {
    const rangeInput = document.querySelector("#range");
    const moonAndStars = document.querySelector(".stars");
  
    rangeInput.addEventListener("input", () => {
      console.log("range input event");
      updateThumb();
    });
    const sliderInput = document.querySelector('.slider-input');
  
    let page = 0;
  
    const updateThumb = () => {
      const text = document.querySelector(".main-title");
      text.classList.add('nevidimka')
      const value = rangeInput.value;
      if (value < 72) {
        sliderInput.classList.remove('twoScroll')
        moonAndStars.style = `transform: rotate(0deg);`;
        page = 0;
      } else if (value >= 72 && value < 144) {
        sliderInput.classList.remove('threeScroll')
        sliderInput.classList.add('twoScroll')
        moonAndStars.style = `transform: rotate(-60deg);`;
        page = 1;
      } else if (value >= 144 && value < 216) {
        sliderInput.classList.remove('twoScroll')
        sliderInput.classList.remove('fourScroll')
        sliderInput.classList.add('threeScroll')
        moonAndStars.style = `transform: rotate(-120deg);`;
        page = 2;
      } else if (value >= 216 && value < 288) {
        sliderInput.classList.remove('threeScroll')
        sliderInput.classList.remove('fiveScroll')
        sliderInput.classList.add('fourScroll')
        moonAndStars.style = `transform: rotate(-180deg);`;
        page = 3;
      } else if (value >= 288 && value < 360) {
        sliderInput.classList.remove('fourScroll')
        sliderInput.classList.remove('sixScroll')
        sliderInput.classList.add('fiveScroll')
        moonAndStars.style = `transform: rotate(-240deg);`;
        page = 4;
      } else if (value >= 360) {
        sliderInput.classList.remove('fiveScroll')
        sliderInput.classList.add('sixScroll')
        moonAndStars.style = `transform: rotate(-300deg);`;
        page = 5;
      }
    };
  
    
  });
  