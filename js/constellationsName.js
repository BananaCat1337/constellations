const constellationTitle = document.getElementById("constellation-title");
const constellationTitleShare = document.getElementById(
  "constellation-title-share"
);
const constellationCards = document.querySelectorAll(".cardContainer");
const popUp = document.querySelector("#popUp-sozvezdie");
const constellationImage = popUp.querySelector(".constellationImage");
const resetButton = document.querySelector(".defShare");
const resetButtonMobyle = document.querySelector(".defShare-mobyle");
const shareText = `Благотворительный фонд "Настенька" попросил подопечных нарисовать свои заветные мечты. Эти рисунки обратились в настоящие созвездия, которые в этот новый год Мы можем сделать ярче! Все просто - следуй за созвездием мечты.`;
const url = "https://mechta.nastenka.ru/";
const defaultImage = "https://mechta.nastenka.ru/assets/share/defShare.jpg";
document.getElementById(
  "vk-share"
).href = `https://vk.com/share.php?url=${
  url
}&title=Следуй за созвездием мечты&og:description=${
  shareText
}&image=${defaultImage}`;
document.getElementById(
  "ok-share"
).href = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${
  url
}&st.comments=${shareText}&st.imageUrl=${defaultImage}`;
document.getElementById(
  "tg-share"
).href = `https://t.me/share/url?url=${
  url
}&text=${shareText}&image=${defaultImage}`;

resetButton.addEventListener("click", () => {
  document.getElementById(
    "ok-share"
  ).href = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${
    url
  }&st.comments=${shareText}&st.imageUrl=${defaultImage}`;

  document.getElementById(
    "vk-share"
  ).href = `https://vk.com/share.php?url=${
    url
  }&title=Следуй за созвездием мечты&description=${
    shareText
  }&image=${defaultImage}`;

  document.getElementById(
    "tg-share"
  ).href = `https://t.me/share/url?url=${
    url
  }&text=${shareText}`;
});

resetButtonMobyle.addEventListener("click", () => {
  document.getElementById(
    "ok-share"
  ).href = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${
    url
  }&st.comments=${shareText}&st.imageUrl=${defaultImage}`;

  document.getElementById(
    "vk-share"
  ).href = `https://vk.com/share.php?url=${
    url
  }&title=Следуй за созвездием мечты&description=${
    shareText
  }&image=${defaultImage}`;

  document.getElementById(
    "tg-share"
  ).href = `https://t.me/share/url?url=${
    url
  }&text=${shareText}`;
});

constellationCards.forEach((card) => {
  card.addEventListener("click", () => {
    const newTitle = card.getAttribute("data-constellation");
    const constellation = card.getAttribute("img-constellation");
    constellationImage.src = `/constellations/cards/childInfoCards/childInfoSvgs/${constellation}.svg`;
    constellationTitle.textContent = `${newTitle}`;
    constellationTitleShare.textContent = `${newTitle}`;
    const imagePath = `https://mechta.nastenka.ru/assets/share/${constellation}.jpg`;

    document.getElementById(
      "ok-share"
    ).href = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${
      url
    }&st.comments=${
      shareText
    }&st.imageUrl=${imagePath}`;

    document.getElementById(
      "vk-share"
    ).href = `https://vk.com/share.php?url=${
      url
    }&title=Следуй за созвездием мечты&description=${
      shareText
    }&image=${imagePath}`;

    document.getElementById(
      "tg-share"
    ).href = `https://t.me/share/url?url=${
      url
    }&text=${shareText}`;
  });
});
