const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Открыть меню' : 'Закрыть меню');
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  nav.classList.remove('open');
}));

document.querySelector('#lead-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const success = event.currentTarget.querySelector('.form-success');
  success.textContent = 'Спасибо! Это демонстрация формы — подключим отправку после согласования контактов.';
});
