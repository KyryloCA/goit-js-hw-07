import { galleryItems } from "./gallery-items.js";
// Change code below this line

//находим целевые элементы
const galeryInsertionPoint = document.querySelector(".gallery");

// создаем разметку картинок
const InsertionContent = createGalleryCardsMarkup(galleryItems);
galeryInsertionPoint.insertAdjacentHTML("afterbegin", InsertionContent);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

// создание разметки по шаблону
function createGalleryCardsMarkup(el) {
  return el
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}" onclick = "event.preventDefault()">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    })
    .join("");
}
