const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const searchInput = document.querySelector('#attraction-search');
const attractionCards = document.querySelectorAll('.attraction-card');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

if (searchInput && attractionCards.length) {
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    attractionCards.forEach((card) => {
      const title = card.dataset.title.toLowerCase();
      card.style.display = title.includes(keyword) ? '' : 'none';
    });
  });
}
