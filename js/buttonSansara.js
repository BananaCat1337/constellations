const rangeInput = document.getElementById("range");
const thumb = document.querySelector(".range-text");

const updateThumb = () => {
  const value = rangeInput.value;
  thumb.textContent = `${value}°`;
  const percentage =
    (value - rangeInput.min) / (rangeInput.max - rangeInput.min);
  const offset = percentage * (rangeInput.clientWidth - 80);
  thumb.style.left = `${offset}px`;
};

rangeInput.addEventListener("input", updateThumb);
document.onload(updateThumb());
