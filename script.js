const images = [
  'images/dubl-icon-2.png',
  'images/pngg1.png',
  'images/imgP3.png',
  'images/bram-naus-5fvMWp1r2n0-unsplash 1.png',
  'images/arrow-removebg-preview.png',
  'images/logo1-1-removebg-preview.png',
  'images/rek-logo-removebg-preview.png',
  'images/png1.png',
  'images/gla-logo-2.png',
  'images/led-logo.png',
  'images/page4.png',
  'images/gla-logo-1.png',
  'images/png2.png',
  'images/eleni-afiontzi-gLU8GZpHtRA-unsplash 1 (1).png',
  'images/rek3-removebg-preview.png',
  'images/page3.png',
  'images/png3.png'
];

const gallery = document.querySelector('#gallery');
const search = document.querySelector('#search');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewerImage');
const viewerCaption = document.querySelector('#viewerCaption');
const closeViewer = document.querySelector('#closeViewer');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let filtered = [...images];
let currentIndex = 0;

function getName(path) {
  return path.split('/').pop();
}

function renderGallery(items) {
  gallery.innerHTML = '';
  items.forEach((path, index) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.innerHTML = `
      <figure>
        <img src="${path}" alt="${getName(path)}" loading="lazy" />
        <figcaption>${getName(path)}</figcaption>
      </figure>
    `;
    card.addEventListener('click', () => openViewer(index));
    gallery.appendChild(card);
  });

  if (!items.length) {
    gallery.innerHTML = '<p>Mos rasm topilmadi.</p>';
  }
}

function openViewer(index) {
  currentIndex = index;
  const path = filtered[currentIndex];
  viewerImage.src = path;
  viewerCaption.textContent = getName(path);
  if (!viewer.open) viewer.showModal();
}

function changeImage(step) {
  if (!filtered.length) return;
  currentIndex = (currentIndex + step + filtered.length) % filtered.length;
  openViewer(currentIndex);
}

search.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  filtered = images.filter((path) => getName(path).toLowerCase().includes(term));
  renderGallery(filtered);
});

closeViewer.addEventListener('click', () => viewer.close());
prevBtn.addEventListener('click', () => changeImage(-1));
nextBtn.addEventListener('click', () => changeImage(1));

renderGallery(filtered);
