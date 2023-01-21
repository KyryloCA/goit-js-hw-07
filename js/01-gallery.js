import { galleryItems } from './gallery-items.js';
// Change code below this line
//находим целевые элементы
const galeryInsertionPoint = document.querySelector('.gallery');

// создаем разметку картинок
const InsertionContent = createGalleryCardsMarkup(galleryItems);
galeryInsertionPoint.insertAdjacentHTML('afterbegin', InsertionContent);

// ставим слушателя клика на контейнер галереи
galeryInsertionPoint.addEventListener('click',picClicAction);

// функции
function picClicAction(el){
if(!el.target.classList.contains('gallery__image')){return};
openLargeImage(el.target.dataset.source);
};

function openLargeImage(path){
  const instance = basicLightbox.create(`<img src="${path}" width="800" height="600">`);
  function closeCommand(){instance.close(document.removeEventListener("keydown",closeCommand))};
  instance.show(() => {document.addEventListener("keydown",closeCommand);});
}

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





