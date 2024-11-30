document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.getElementById("range");
  const thumb = document.querySelector(".range-text");
  const marksContainer = document.getElementById("marks-container");

  const createMarks = () => {
    const step = 72;
    for (let i = 0; i <= 360; i += step) {
      const mark = document.createElement("div");
      mark.className = "mark";
      mark.dataset.value = i;
      const label = document.createElement("span");
      label.textContent = `${i}°`;
      mark.appendChild(label);
      marksContainer.appendChild(mark);
    }
  };

  const updateThumb = () => {
    const value = rangeInput.value;
    thumb.textContent = `||${value}°||`;

    const percentage = (value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    const offset = percentage * rangeInput.clientWidth;
    let pos = 5;

    thumb.style.left = `${offset}px`;
    const marks = document.querySelectorAll(".mark");
    marks.forEach((mark) => {
      const markValue = parseInt(mark.dataset.value, 10);
      if (
        (value >= 0 && value < 72 && markValue === 0) ||
        (value >= 72 && value < 144 && markValue === 72) ||
        (value >= 144 && value < 216 && markValue === 144) ||
        (value >= 216 && value < 288 && markValue === 216) ||
        (value >= 288 && value < 360 && markValue === 288) ||
        (value >= 360 && markValue === 360)
      ) {
        mark.style.visibility = "hidden";
      } else {
        mark.style.visibility = "visible";
      }
    });
  };

  createMarks();
  updateThumb();

  rangeInput.addEventListener("input", updateThumb);
});
