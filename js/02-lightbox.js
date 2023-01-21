import { galleryItems } from './gallery-items.js';
// Change code below this line

//находим целевые элементы
const galeryInsertionPoint = document.querySelector('.gallery');
console.log(galeryInsertionPoint);

// создаем разметку картинок
const InsertionContent = createGalleryCardsMarkup(galleryItems);
console.log();
galeryInsertionPoint.insertAdjacentHTML('afterbegin', InsertionContent);
console.log();
// создание разметки по шаблону
function createGalleryCardsMarkup(el){
    return  el
    .map(({preview,original,description}) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
        </a>
      </div>`;
       
    })
    .join('');
}