addEventListener("DOMContentLoaded", (event) => {
    const rangeInput = document.querySelector("#range");
    const moonAndStars = document.querySelector(".stars");
  
    rangeInput.addEventListener("input", () => {
      console.log("range input event");
      updateThumb();
    });
  
    let page = 0;
  
    const updateThumb = () => {
      const text = document.querySelector(".main-title");
      text.classList.add('nevidimka')
      const value = rangeInput.value;
      if (value < 72) {
        moonAndStars.style = `transform: rotate(0deg);`;
        page = 0;
      } else if (value >= 72 && value < 144) {
        moonAndStars.style = `transform: rotate(-60deg);`;
        page = 1;
      } else if (value >= 144 && value < 216) {
        moonAndStars.style = `transform: rotate(-120deg);`;
        page = 2;
      } else if (value >= 216 && value < 288) {
        moonAndStars.style = `transform: rotate(-180deg);`;
        page = 3;
      } else if (value >= 288 && value < 360) {
        moonAndStars.style = `transform: rotate(-240deg);`;
        page = 4;
      } else if (value >= 360) {
        moonAndStars.style = `transform: rotate(-300deg);`;
        page = 5;
      }
    };
  
    
  });
  