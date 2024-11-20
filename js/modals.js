const closePopUp = document.getElementsByClassName('popup_close');

const openPopUp_3 = document.getElementById('popup3_open');
const openPopUp_3_b2 = document.getElementById('popup3_open_zxc');
const openPopUp_1 = document.getElementById('popup1_open_zxc');

const popUp1 = document.getElementById('popUp1')
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


openPopUp_3.addEventListener('click', function(e){
    countWindows += 1
    openPopUps()
    e.preventDefault()
    popUp3.classList.add('active')
    popUp.classList.add('active')
})

openPopUp_3_b2.addEventListener('click', function(e){
    countWindows += 1
    openPopUps()
    e.preventDefault()
    popUp3.classList.add('active')
    popUp.classList.add('active')
})

openPopUp_1.addEventListener('click', function(e){
    countWindows += 1
    openPopUps()
    e.preventDefault()
    popUp1.classList.add('active')
    popUp.classList.add('active')
})

function openPopUps() {
    if (countWindows > 1) {
        popUp1.classList.remove('active')
        popUp3.classList.remove('active')
    }
}