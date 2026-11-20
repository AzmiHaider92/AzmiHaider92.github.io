(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('site-theme'); } catch {}
  let theme = saved === 'dark' || saved === 'light' ? saved : (preference.matches ? 'dark' : 'light');
  function apply(value) {
    theme = value;
    root.dataset.theme = value;
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      const label = value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.textContent = value === 'dark' ? '☀' : '☾';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(value === 'dark'));
    }
  }
  apply(theme);
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-inner');
    if (!header) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('data-theme-toggle', '');
    header.append(button);
    apply(theme);
    button.addEventListener('click', () => {
      saved = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('site-theme', saved); } catch {}
      apply(saved);
    });
  });
  preference.addEventListener('change', event => {
    if (saved !== 'dark' && saved !== 'light') apply(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'site-theme') return;
    saved = event.newValue;
    apply(saved === 'dark' || saved === 'light' ? saved : (preference.matches ? 'dark' : 'light'));
  });
})();
