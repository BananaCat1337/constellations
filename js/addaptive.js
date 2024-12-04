
let vh = window.innerHeight * 0.01;

window.addEventListener('resize', () => {
    // We execute the same script as before
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });