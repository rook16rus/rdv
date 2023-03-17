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
  const searchInput = catalog.querySelector('.catalog__search-input');
  const searchReset = catalog.querySelector('.catalog__search-reset');

  document.addEventListener('mousedown', e => {
    if (e.target.closest(".catalog__search-button") || e.target.closest(".catalog__search-input-block")) {
      search.classList.add('active');
    } else {
      if (searchInput.value === '') search.classList.remove('active')
    }
  })

  searchReset.addEventListener('click', () => {
    searchInput.value = '';
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

  const countsDisplays = catalog.querySelectorAll('.catalog__tag-label');

  countsDisplays.forEach(countDisplay => {
    const subTagsContainer = catalog.querySelector(`*[data-id="${countDisplay.dataset.href}"]`);
    const subTags = subTagsContainer.querySelectorAll('.catalog__subtag-radio');

    let subtagsCount = countDisplay.dataset.count;

    checkCount(subtagsCount, countDisplay);

    subTags.forEach(subtag => {
      subtag.addEventListener('change', () => {
        subtagsCount = [...subTags].filter(tag => tag.checked).length;
        countDisplay.dataset.count = subtagsCount;

        checkCount(subtagsCount, countDisplay);
      })
    })
  })

  const dateButton = catalog.querySelector('.catalog__date-button');
  const monthCheckBoxes = catalog.querySelectorAll('.catalog__month-checkbox');

  let count = [...monthCheckBoxes].filter(checkbox => checkbox.checked).length;

  checkCount(count, dateButton)

  monthCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      count = [...monthCheckBoxes].filter(checkbox => checkbox.checked).length;

      checkCount(count, dateButton);
    })
  })

  function checkCount(count, display) {
    if (count > 0) {
      display.classList.add('count-active')
    } else {
      display.classList.remove('count-active')
    }
  }
}
