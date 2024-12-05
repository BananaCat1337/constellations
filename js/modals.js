const closePopUp = document.getElementsByClassName("popup_close");

const openPopUp_1 = document.getElementById("popup1_open");
const openPopUp_2 = document.getElementById("popup2_open");
const openPopUp_3 = document.getElementsByClassName("popup3_open");
const openPopUp_form = document.getElementsByClassName("popup_form_open");
const openPopUp_form_alt = document.getElementsByClassName("popup_form_open_alt");
const openPopUp_share = document.getElementById("openPopUp_share");
const openPopUp_video = document.getElementById("openPopUp_video");

const popUp1 = document.getElementById("popUp1");
const popUp2 = document.getElementById("popUp2");
const popUp3 = document.getElementById("popUp3");
const popUp_form = document.getElementById("popUp-form");
const popUp_sozvezdie = document.getElementById("popUp-sozvezdie");
const popUp_share = document.getElementById("popUp_share");
const PopUp_video = document.getElementById("PopUp_video");
const popUp = document.getElementById("popUp");

const lower_popUp_botton = document.getElementById("lower_popUp_botton");
const open_menu = document.getElementById("open_menu");

const menu = document.getElementById("menu");
const lower_popUp = document.getElementById("lower_popUp");
const info_blocks = document.getElementById("info_blocks");
const lower_popUp_title = document.getElementById("lower_popUp_title");

let countWindows = 0;
let mobile_menu_open = false;
let lower_popUp_open = false;

function openPopUps() {
  if (countWindows > 1) {
    popUp1.classList.remove("active");
    popUp2.classList.remove("active");
    popUp3.classList.remove("active");
    popUp_form.classList.remove("active");
    popUp_sozvezdie.classList.remove("active");
    popUp_share.classList.remove("active");
    PopUp_video.classList.remove("active");
  }
}

export function sozvezdie(name) {
  popUp3.classList.remove("active");
  popUp_form.classList.remove("active");
  countWindows += 1;
  openPopUps();
  popUp_sozvezdie.classList.add("active");
  popUp.classList.remove("active");
  popUp.classList.add("active");
  const popUpSozvezdie = document.getElementById("popUp-sozvezdie");
  const userNameElement = popUpSozvezdie.querySelector("#userName");
  if (name) {
    userNameElement.innerHTML = `${name.toUpperCase()},`;
  }
}

for (var i = 0; i < closePopUp.length; i++) {
  closePopUp[i].addEventListener("click", function (e) {
    e.preventDefault();
    popUp1.classList.remove("active");
    popUp2.classList.remove("active");
    popUp3.classList.remove("active");
    popUp_form.classList.remove("active");
    popUp_sozvezdie.classList.remove("active");
    popUp_share.classList.remove("active");
    PopUp_video.classList.remove("active");
    popUp.classList.remove("active");

    countWindows = 0;
  });
}

for (var i = 0; i < openPopUp_3.length; i++) {
  openPopUp_3[i].addEventListener("click", function (e) {
    countWindows += 1;
    openPopUps();
    e.preventDefault();
    info_blocks.classList.remove("active");
    lower_popUp_title.classList.remove("active");
    lower_popUp.classList.remove("active");
    lower_popUp.classList.add("desactive");
    lower_popUp_botton.classList.remove("active");
    lower_popUp_open = false;
    popUp3.classList.add("active");
    popUp.classList.add("active");
  });
}

const constellationTitle = document.getElementById("constellation-title");
const constellationMainTitle = document.getElementById("constellation-main-title");
const constellationTitleShare = document.getElementById("constellation-title-share");
const constellationMainTitleShare = document.getElementById("constellation-main-title-share");
const constellationImage = popUp.querySelector(".constellationImage");
const userName = document.getElementById("userName");

for (var i = 0; i < openPopUp_form.length; i++) {
  openPopUp_form[i].addEventListener("click", function (e) {
    countWindows += 1;
    openPopUps();
    e.preventDefault();
    constellationTitle.style.display = "block";
    constellationMainTitle.textContent = 'созвездие';
    constellationMainTitleShare.textContent = 'ВАШЕ СОЗВЕЗДИЕ';
    popUp3.classList.remove("active");
    popUp_form.classList.add("active");
    popUp.classList.add("active");
  });
}

for (var i = 0; i < openPopUp_form_alt.length; i++) {
  openPopUp_form_alt[i].addEventListener("click", function (e) {
    countWindows += 1;
  openPopUps();
  e.preventDefault();
  constellationTitle.style.display = "none";
  userName.style.display = "none";
  constellationMainTitle.textContent = 'зажги все созвездия!';
  constellationMainTitleShare.textContent = 'вы зажгли';
  constellationTitleShare.textContent = 'небосвод мечтаний';
  constellationImage.src = `./assets/PopUp-share-img.svg`;
  constellationImage.style.height = "100%";
  popUp3.classList.remove("active");
  popUp_form.classList.add("active");
  popUp.classList.add("active");
  });
}

openPopUp_video.addEventListener("click", function (e) {
  countWindows += 1;
  openPopUps();
  e.preventDefault();
  PopUp_video.classList.add("active");
  popUp.classList.add("active");
});

openPopUp_1.addEventListener("click", function (e) {
  countWindows += 1;
  openPopUps();
  e.preventDefault();
  popUp1.classList.add("active");
  popUp.classList.add("active");
});

openPopUp_share.addEventListener("click", function (e) {
  countWindows += 1;
  openPopUps();
  e.preventDefault();
  popUp_share.classList.add("active");
  popUp.classList.add("active");
});

openPopUp_2.addEventListener("click", function (e) {
  countWindows += 1;
  openPopUps();
  e.preventDefault();
  popUp2.classList.add("active");
  popUp.classList.add("active");
});

menu.addEventListener("click", function (e) {
  e.preventDefault();
  e.menu_click = true;
});

open_menu.addEventListener("click", function (e) {
  e.preventDefault();
  e.open_menu_button = true;
  mobile_menu_open = true;
  menu.classList.add("active");
  menu.classList.remove("desactive");
});

document.body.addEventListener("click", function (e) {
  if (!e.open_menu_button && !e.menu_click && mobile_menu_open) {
    menu.classList.remove("active");
    menu.classList.add("desactive");
    mobile_menu_open = false;
  }
});

lower_popUp.classList.add("desactive");

lower_popUp_botton.addEventListener("click", function (e) {
  e.preventDefault();

  if (lower_popUp_open == false) {
    info_blocks.classList.add("active");
    lower_popUp_title.classList.add("active");
    lower_popUp.classList.add("active");
    lower_popUp.classList.remove("desactive");
    lower_popUp_botton.classList.add("active");
    lower_popUp_open = true;
  } else {
    info_blocks.classList.remove("active");
    lower_popUp_title.classList.remove("active");
    lower_popUp.classList.remove("active");
    lower_popUp.classList.add("desactive");
    lower_popUp_botton.classList.remove("active");
    lower_popUp_open = false;
  }
});
