const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const root = document.documentElement;

const savedTheme = localStorage.getItem('amar-theme');

function setTheme(theme) {
  root.dataset.theme = theme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  themeLabel.textContent = nextTheme[0].toUpperCase() + nextTheme.slice(1);
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
}

setTheme(savedTheme || 'dark');

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('amar-theme', nextTheme);
});

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
