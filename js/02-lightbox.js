import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMurkup = createImageGalleryMurkup(galleryItems);

galleryBox.addEventListener('click', onImageClickOpen);

function onImageClickOpen(evt) {
  evt.preventDefault();
  const titleImage = evt.target.alt;
 
  var galleryImg = new SimpleLightbox('.gallery a');
  // var lightbox = ('.gallery a').simpleLightbox(captions);


  galleryImg.on('shown.simplelightbox', function (titleImage) {
    // captionPosition = 'titleImage';
  });
  galleryImg.on('closed.simplelightbox', function () {
    galleryImg.refresh();
  });
  
}

function createImageGalleryMurkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
          <img 
          class="gallery__image"   
          src="${preview}"
          alt="${description}"
              </a>`
    }).join('');
}

galleryBox.insertAdjacentHTML('beforeend', galleryMurkup);