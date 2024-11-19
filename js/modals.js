const closePopUp = document.getElementById('popup_close');
const openPopUp_3 = document.getElementById('popup3_open');
const openPopUp_3_b2 = document.getElementById('popup3_open_zxc');

const popUp3 = document.getElementById('popUp3')
const popUp = document.getElementById('popUp')

closePopUp.addEventListener('click', function(e){
    console.log('закрытие');
    
    e.preventDefault()
    popUp3.classList.remove('active')
    popUp.classList.remove('active')
})

openPopUp_3.addEventListener('click', function(e){
    console.log('открытие');

    e.preventDefault()
    popUp3.classList.add('active')
    popUp.classList.add('active')
})

openPopUp_3_b2.addEventListener('click', function(e){
    console.log('открытие');

    e.preventDefault()
    popUp3.classList.add('active')
    popUp.classList.add('active')
})