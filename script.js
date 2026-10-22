const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

function closeNavigation(returnFocus = false) {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');

  if (returnFocus) menuButton.focus();
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNavigation());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeNavigation(true);
    }
  });

  document.addEventListener('click', (event) => {
    const clickedOutside = !navigation.contains(event.target) && !menuButton.contains(event.target);
    if (clickedOutside && menuButton.getAttribute('aria-expanded') === 'true') closeNavigation();
  });

  window.matchMedia('(min-width: 1021px)').addEventListener('change', (event) => {
    if (event.matches) closeNavigation();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const projectFilters = document.querySelector('.project-filters');
if (projectFilters) {
  const searchInput = projectFilters.querySelector('#project-search');
  const categorySelect = projectFilters.querySelector('#project-category');
  const sdgSelect = projectFilters.querySelector('#project-sdg');
  const projectCards = [...document.querySelectorAll('.project-grid .project-card')];
  const projectResults = document.querySelector('.project-results');

  function filterProjects() {
    const searchTerm = searchInput.value.trim().toLocaleLowerCase();
    const category = categorySelect.value;
    const sdg = sdgSelect.value;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const matchesSearch = !searchTerm || card.textContent.toLocaleLowerCase().includes(searchTerm);
      const matchesCategory = !category || card.dataset.category === category;
      const cardSdgs = (card.dataset.sdgs || '').split(/\s+/);
      const matchesSdg = !sdg || cardSdgs.includes(sdg);
      const isVisible = matchesSearch && matchesCategory && matchesSdg;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (projectResults) {
      projectResults.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} found`;
    }
  }

  projectFilters.addEventListener('input', filterProjects);
  projectFilters.addEventListener('change', filterProjects);
  projectFilters.addEventListener('reset', () => window.requestAnimationFrame(filterProjects));
  filterProjects();
}
