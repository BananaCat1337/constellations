const swiper = document.querySelector.//
[{text:'CJ,frf vjhljq ddth[', img:'./img', id:1}, {text:'blsbla', text2:'dadad', img:'', id:2}]
[{text:'blsbla', img:'', id:1}, {text:'blsbla', text2:'dadad', img:'', id:2}].map((card)=>{
const previousState = swiper.innerHTML
swiper.innerHTML = previousState + ` 
<div class="cardBody" id=${id}>
      <div class="constellationContainer">
        <h2 class="constellationName">
            Ваше созвездие
            <br>${el.text}
        </h2>
        <div>
          <img class="constellationImage" src="${el.img}" alt="" />
        </div>
      </div>
      <div class="doneInfoContainer">
        <h3 class="userName"><!-- <script></script> -->АНДРЕЙ,</h3>
        <h4 class="shareThisInfo">вы зажгли созвездие и помогли детской мечте засиять на карте звёздного неба.  Поделитесь этой новостью со всеми, чтобы карта созвездий стала ещё ярче!</h4>
        <div class="buttonContainer"><button class="btn">Поделиться</button></div>
      </div>
    </div>
    `
})

/**
 * const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
 */

/**
 *  <div class="cardBody">
      <div class="constellationContainer">
        <h2 class="constellationName">
          ВАШЕ СОЗВЕЗДИЕ <br />
          ФОТОАППАРАТ
        </h2>
        <div>
          <img class="constellationImage" src="./cardSvgs/cam.svg" alt="" />
        </div>
      </div>
      <div class="doneInfoContainer">
        <h3 class="userName"><!-- <script></script> -->АНДРЕЙ,</h3>
        <h4 class="shareThisInfo">вы зажгли созвездие и помогли детской мечте засиять на карте звёздного неба.  Поделитесь этой новостью со всеми, чтобы карта созвездий стала ещё ярче!</h4>
        <div class="buttonContainer"><button class="btn">Поделиться</button></div>
      </div>
    </div>
 * 
 */