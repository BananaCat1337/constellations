const constellationTitle = document.getElementById("constellation-title");
const constellationTitleShare = document.getElementById(
  "constellation-title-share"
);
const constellationCards = document.querySelectorAll(".cardContainer");
const popUp = document.querySelector("#popUp-sozvezdie");
const constellationImage = popUp.querySelector(".constellationImage");
constellationCards.forEach((card) => {
  card.addEventListener("click", () => {
    const newTitle = card.getAttribute("data-constellation");
    const constellation = card.getAttribute("img-constellation");
    constellationImage.src = `./cards/childInfoCards/childInfoSvgs/${constellation}.svg`;
    constellationTitle.textContent = `${newTitle}`;
    constellationTitleShare.textContent = `${newTitle}`;
  });
});
