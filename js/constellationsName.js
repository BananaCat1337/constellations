const constellationTitle = document.getElementById("constellation-title");
const constellationTitleShare = document.getElementById(
  "constellation-title-share"
);
const constellationCards = document.querySelectorAll(".cardContainer");
const popUp = document.querySelector("#popUp-sozvezdie");
const constellationImage = popUp.querySelector(".constellationImage");
const shareText = `Благотворительный фонд "Настенька" попросил подопечных нарисовать свои заветные мечты. Эти рисунки обратились в настоящие созвездия, которые в этот новый год Мы можем сделать ярче! Все просто - следуй за созвездием мечты.`;
const url = "https://mechta.nastenka.ru/";
const OkImage = "https://mechta.nastenka.ru/assets/share/Share.jpg";
const VkImage = "https://mechta.nastenka.ru/assets/share/shareVK.jpg";
document.getElementById(
  "vk-share"
).href = `https://vk.com/share.php?url=${encodeURIComponent(
  url
)}&title=Следуй за созвездием мечты&image=${encodeURIComponent(VkImage)}`;
document.getElementById(
  "ok-share"
).href = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${encodeURIComponent(
  url
)}&st.comments=${encodeURIComponent(shareText)}&st.imageUrl=${OkImage}`;
document.getElementById(
  "tg-share"
).href = `https://t.me/share/url?url=${encodeURIComponent(
  url
)}&text=${encodeURIComponent(shareText)}`;

constellationCards.forEach((card) => {
  card.addEventListener("click", () => {
    const newTitle = card.getAttribute("data-constellation");
    const constellation = card.getAttribute("img-constellation");
    constellationImage.src = `./cards/childInfoCards/childInfoSvgs/${constellation}.svg`;
    constellationTitle.textContent = `${newTitle}`;
    constellationTitleShare.textContent = `${newTitle}`;
  });
});
