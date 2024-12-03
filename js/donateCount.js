async function fetchDonationCount() {
    try {
        const response = await fetch('http://localhost:3000/donations');// изменить на сервер, с инфой количества. 
        const data = await response.json();
        document.getElementById('donation-count').innerText = data.count;
    } catch (error) {
        console.error('Ошибка при получении количества пожертвований:', error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    fetchDonationCount();
});
async function fetchDonationCount() {
    try {
        const response = await fetch('http://localhost:3000/donations');// изменить на сервер, с инфой количества. 
        const data = await response.json();
        document.getElementById('donation-count').innerText = data.count;
    } catch (error) {
        console.error('Ошибка при получении количества пожертвований:', error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    fetchDonationCount();
});