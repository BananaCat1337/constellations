  const constellationTitle = document.getElementById('constellation-title');
  const constellationCards = document.querySelectorAll('.cardContainer');
  constellationCards.forEach(card => {
    card.addEventListener('click', () => {
      const newTitle = card.getAttribute('data-constellation');
      constellationTitle.textContent = `Созвездие ${newTitle}`;
    });
  });