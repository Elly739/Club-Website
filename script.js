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

const projectProfileBackLink = document.querySelector('main .page-hero .back-link[href*="projects.html"]');
const projectMain = document.querySelector('main#main');
if (projectProfileBackLink && projectMain) {
  const relatedProjects = {
    bit: [['sentryhub', 'SentryHub', 'ONLINE SAFETY'], ['wecket', 'Wecket', 'DIGITAL COMMUNITIES']],
    blue: [['smartwaste', 'SmartWaste', 'SUSTAINABILITY AND REWARDS'], ['sentient', 'Sentient', 'URBAN RESILIENCE']],
    campushub: [['umi', 'Umi', 'STUDENT INNOVATION'], ['wecket', 'Wecket', 'DIGITAL COMMUNITIES']],
    chatpay: [['fourt', 'Fourt', 'INNOVATION PORTFOLIO'], ['revvwash', 'RevvWash', 'MOBILE SERVICES']],
    fourt: [['minerai', 'MinerAI', 'GEOSPATIAL INTELLIGENCE'], ['sentient', 'Sentient', 'URBAN RESILIENCE']],
    minerai: [['sentient', 'Sentient', 'URBAN RESILIENCE'], ['blue', 'BLUE', 'OCEAN CONSERVATION']],
    mobi: [['revvwash', 'RevvWash', 'MOBILE SERVICES'], ['campushub', 'CampusHub', 'CAMPUS LIFE']],
    revvwash: [['mobi', 'Mobi', 'TRANSPORT'], ['chatpay', 'ChatPay', 'FINANCIAL TECHNOLOGY']],
    sentient: [['minerai', 'MinerAI', 'GEOSPATIAL INTELLIGENCE'], ['blue', 'BLUE', 'OCEAN CONSERVATION']],
    sentryhub: [['bit', 'BIT', 'SECURITY AND IDENTITY'], ['wecket', 'Wecket', 'DIGITAL COMMUNITIES']],
    smartwaste: [['blue', 'BLUE', 'OCEAN CONSERVATION'], ['revvwash', 'RevvWash', 'MOBILE SERVICES']],
    'thinking-game': [['umi', 'Umi', 'STUDENT INNOVATION'], ['fourt', 'Fourt', 'INNOVATION PORTFOLIO']],
    umi: [['campushub', 'CampusHub', 'CAMPUS LIFE'], ['thinking-game', 'The Thinking Game', 'INTELLECTUAL PROPERTY']],
    wecket: [['sentryhub', 'SentryHub', 'ONLINE SAFETY'], ['campushub', 'CampusHub', 'CAMPUS LIFE']]
  };
  const profileSlug = window.location.pathname.split('/').pop().replace(/\.html$/, '');
  const related = relatedProjects[profileSlug];

  if (related) {
    const section = document.createElement('section');
    section.className = 'related-projects section-pad';
    section.setAttribute('aria-labelledby', 'related-projects-title');

    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    const headingCopy = document.createElement('div');
    const eyebrow = document.createElement('div');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = 'Keep exploring';
    const title = document.createElement('h2');
    title.id = 'related-projects-title';
    title.textContent = 'Related projects';
    headingCopy.append(eyebrow, title);
    const intro = document.createElement('p');
    intro.textContent = 'Explore other ideas from the ZURI community.';
    heading.append(headingCopy, intro);

    const grid = document.createElement('div');
    grid.className = 'related-project-grid';
    related.forEach(([slug, name, area]) => {
      const link = document.createElement('a');
      link.className = 'related-project-card';
      link.href = `${slug}.html`;
      const label = document.createElement('span');
      label.className = 'content-label';
      label.textContent = area;
      const projectName = document.createElement('strong');
      projectName.textContent = name;
      const action = document.createElement('span');
      action.className = 'related-project-action';
      action.textContent = 'View project →';
      link.append(label, projectName, action);
      grid.append(link);
    });

    wrap.append(heading, grid);
    section.append(wrap);
    projectMain.append(section);
  }
}

const communityPhotoGrid = document.querySelector('.community-photo-grid');
if (communityPhotoGrid && !communityPhotoGrid.querySelector('.community-love-photo')) {
  const figure = document.createElement('figure');
  figure.className = 'community-love-photo';
  const image = document.createElement('img');
  image.src = 'public/images/I Love Zetech Image.png';
  image.alt = 'I love Zetech sign outside the university library';
  image.loading = 'lazy';
  image.decoding = 'async';
  const caption = document.createElement('figcaption');
  caption.textContent = 'A little Zetech pride';
  figure.append(image, caption);
  communityPhotoGrid.append(figure);
}
