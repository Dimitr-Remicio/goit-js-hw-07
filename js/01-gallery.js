import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map((item) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`)
    .join("");

}
const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

gallery.addEventListener ('click', clickOnImage);

function clickOnImage(action) {

  Action(action);

  if (action.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${action.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  gallery.addEventListener("keydown", (action) => {
    if (action.code === "Escape") {
      instance.close();
    }
  })

}

function Action(action) {
  action.preventDefault();
}

