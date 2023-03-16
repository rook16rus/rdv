import moreButtonRow from "./moreButtonRow";

export default function catalog() {
  const catalog = document.querySelector('.catalog');
  if (!catalog) return

  const tags = catalog.querySelectorAll('.catalog__tag-radio');

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      if (tag.classList.contains('active')) {
        tag.checked = false;
        tag.classList.remove('active');
      } else {
        tags.forEach(tag => tag.classList.remove('active'));
        tag.classList.add('active');
      }
    })
  })

  const search = catalog.querySelector('.catalog__search');

  document.addEventListener('mousedown', e => {
    if (e.target.closest(".catalog__search-button") || e.target.closest(".catalog__search-input-block")) {
      search.classList.add('active');
    } else {
      search.classList.remove('active')
    }
  })

  const gridButtons = catalog.querySelector('.catalog__grid-buttons');
  const catalogList = catalog.querySelector('.catalog__list');
  const catalogCards = catalog.querySelectorAll('.catalog-card');

  gridButtons.addEventListener('click', e => {
    if (e.target.closest('.catalog__grid-button')) {
      const button = e.target.closest('.catalog__grid-button');
      const modification = button.dataset.modification;
      const cardModification = button.dataset.modificationCards;

      catalogList.className = `catalog__list ${modification}`;
      catalogCards.forEach(card => card.className = `catalog-card ${cardModification}`)

      catalog.querySelectorAll('.catalog__grid-button')
        .forEach(button => button.classList.remove('active'))
      button.classList.add('active');

      moreButtonRow();
    }
  })
}
