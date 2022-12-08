import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMurkup = createImageGalleryMurkup(galleryItems);

galleryBox.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  const originalImg = evt.target.dataset.source;
  console.log(originalImg);

  const open = basicLightbox.create(`
    <img src="${originalImg}">
`)

open.show()
}

function createImageGalleryMurkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div  class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false;">
          <img 
          class="gallery__image"   
          src="${preview}"
          data-source="${original}"
          alt="${description}">
        </a>
      </div>`
    }).join('');
}

galleryBox.insertAdjacentHTML('beforeend', galleryMurkup);






