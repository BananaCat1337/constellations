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
    constellationImage.src = `/constellations/cards/childInfoCards/childInfoSvgs/${constellation}.svg`;
    constellationTitle.textContent = `${newTitle}`;
    constellationTitleShare.textContent = `${newTitle}`;

    
    const imagePath = `https://mechta.nastenka.ru/constellations/assets/share/${newTitle}.jpg`;
console.log(imagePath)

const shareText = `Благотворительный фонд "Настенька" попросил подопечных нарисовать свои заветные мечты. Эти рисунки обратились в настоящие созвездия, которые в этот новый год Мы можем сделать ярче! Все просто - следуй за созвездием мечты.`;

const url = 'https://mechta.nastenka.ru/';

document.getElementById('ok-share').href = 
  `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${encodeURIComponent(url)}&st.comments=${encodeURIComponent(shareText)}`;

document.getElementById('vk-share').href = 
  `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=Следуй за созвездием мечты&description=${encodeURIComponent(shareText)}&image=${encodeURIComponent(imagePath)}`;

document.getElementById('tg-share').href = 
  `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;

document.getElementById('zen-share').href = 
  `https://zen.yandex.ru/share?url=${encodeURIComponent(url)}&title=Следуй за созвездием мечты&description=${encodeURIComponent(shareText)}&image=${encodeURIComponent(imagePath)}`;

  });
});
