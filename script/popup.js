function openModal() {
    // загрузить контент модального окна из внешнего HTML файла пример использования в папке buttomTest test.html
    fetch("modal-content.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("modal-content").innerHTML = data;
            document.getElementById("modal-overlay").style.display = "flex";
            
            // добавить градиентный фон к body, пытался обосрался), просто добавляем в css как класс и при нажатии включает класс для body, если нужен main 
            //я думаю понятно что нужно сделать
            document.body.classList.add("gradient-bg");
        })
        .catch(error => console.error('Ошибка загрузки:', error));
}

function closeModal() {
    // закрыть модальное окно
    document.getElementById("modal-overlay").style.display = "none";
    
    // убрать градиентный фон с body
    document.body.classList.remove("gradient-bg");
}