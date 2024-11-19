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
      if (value < 60) {
        moonAndStars.style = `transform: rotate(0deg);`;
        page = 0;
      } else if (value >= 60 && value < 120) {
        moonAndStars.style = `transform: rotate(-60deg);`;
        page = 1;
      } else if (value >= 120 && value < 180) {
        moonAndStars.style = `transform: rotate(-120deg);`;
        page = 2;
      } else if (value >= 180 && value < 240) {
        moonAndStars.style = `transform: rotate(-180deg);`;
        page = 3;
      } else if (value >= 240 && value < 300) {
        moonAndStars.style = `transform: rotate(-240deg);`;
        page = 4;
      } else if (value >= 300 && value < 360) {
        moonAndStars.style = `transform: rotate(-300deg);`;
        page = 5;
      }
    };
  
    
  });
  