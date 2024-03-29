import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMurkup = createImageGalleryMurkup(galleryItems);

galleryBox.addEventListener('click', onImageClickOpen);

function onImageClickOpen(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return
  }
  
  const originalImg = evt.target.dataset.source;
  const openedImage = basicLightbox.create(`
    <img src="${originalImg}">
`)
  openedImage.show();

  document.addEventListener('keydown', onImageClickClose);
  function onImageClickClose(evt) {
    evt.preventDefault();
   
    if (basicLightbox.visible()) {
      if (evt.key === 'Escape') {
        openedImage.close();
        document.removeEventListener('keydown', onImageClickClose);
      }
    }  
  }
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






