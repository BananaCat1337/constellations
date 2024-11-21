const closePopUp = document.getElementsByClassName('popup_close');

const openPopUp_1 = document.getElementById('popup1_open');
const openPopUp_2 = document.getElementById('popup2_open');
const openPopUp_3 = document.getElementsByClassName('popup3_open');

const popUp1 = document.getElementById('popUp1')
const popUp2 = document.getElementById('popUp2')
const popUp3 = document.getElementById('popUp3')
const popUp = document.getElementById('popUp')

let countWindows = 0

for (var i = 0 ; i < closePopUp.length; i++) {
    closePopUp[i].addEventListener('click', function(e){
        e.preventDefault()
        popUp1.classList.remove('active')
        popUp3.classList.remove('active')
        popUp.classList.remove('active')

        countWindows = 0
    })
}

for (var i = 0 ; i < openPopUp_3.length; i++) {
    openPopUp_3[i].addEventListener('click', function(e){
        countWindows += 1
        openPopUps()
        e.preventDefault()
        popUp3.classList.add('active')
        popUp.classList.add('active')
    })
}

openPopUp_1.addEventListener('click', function(e){
    countWindows += 1
    openPopUps()
    e.preventDefault()
    popUp1.classList.add('active')
    popUp.classList.add('active')
})

openPopUp_2.addEventListener('click', function(e){
    countWindows += 1
    openPopUps()
    e.preventDefault()
    popUp2.classList.add('active')
    popUp.classList.add('active')
})

function openPopUps() {
    if (countWindows > 1) {
        popUp1.classList.remove('active')
        popUp2.classList.remove('active')
        popUp3.classList.remove('active')
    }
}