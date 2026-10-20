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
