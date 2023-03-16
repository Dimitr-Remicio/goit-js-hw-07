import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryArray = galleryItems.map(({preview,description}) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    galleryItem.insertAdjacentHTML('beforeend', `<img src="${preview}" class="gallery__image" alt="${description}">`);
    return galleryItem;
  });
  
  gallery.append(...galleryArray);

console.log(galleryItems);
