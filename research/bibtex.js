const button = document.querySelector('[data-copy-bibtex]');
const entry = document.querySelector('.bibtex-entry code');
const status = document.querySelector('.bibtex-status');

if (button && entry && status && navigator.clipboard?.writeText) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(entry.textContent);
      status.textContent = 'BibTeX copied.';
    } catch {
      status.textContent = 'Copy failed. Select the BibTeX text and copy it manually.';
    }
  });
}
