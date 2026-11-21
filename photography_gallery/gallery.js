const viewer = document.querySelector('.photo-viewer');
const photos = Array.from(document.querySelectorAll('.photo-grid a'));
const image = document.querySelector('.viewer-image');
const caption = document.querySelector('.viewer-caption');
let current = 0;
let opener;
function show(index) {
  current = (index + photos.length) % photos.length;
  const source = photos[current].querySelector('img');
  image.src = photos[current].href;
  image.alt = source.alt;
  caption.textContent = source.alt;
}
if (viewer && typeof viewer.showModal === 'function') {
  photos.forEach((photo, index) => photo.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = photo;
    show(index);
    viewer.showModal();
  }));
  document.querySelector('[data-close]').addEventListener('click', () => viewer.close());
  document.querySelector('[data-previous]').addEventListener('click', () => show(current - 1));
  document.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
  viewer.addEventListener('click', event => {
    if (event.target === viewer) {
      const rect = viewer.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
    }
  });
  viewer.addEventListener('close', () => opener?.focus());
}
