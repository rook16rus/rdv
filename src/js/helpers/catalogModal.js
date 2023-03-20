export default function catalogModal() {
  const modals = document.querySelectorAll('.js-catalog-modal');

  modals.forEach(modal => {
    const title = modal.querySelector('.js-catalog-modal-title');
    const tabs = modal.querySelectorAll('.js-catalog-modal-tag');
    const backButtons = modal.querySelectorAll('.js-catalog-modal-back');
    const resetButtons = modal.querySelectorAll('.js-catalog-modal-reset');

    tabs.forEach(tab => {
      const subTagsContainer = modal.querySelector(`*[data-id="${tab.dataset.href}"]`);
      const subTags = subTagsContainer.querySelectorAll('.js-catalog-modal-subtag');

      let subtagsCount = tab.dataset.count;

      checkCount(subtagsCount, tab);

      subTags.forEach(subtag => {
        subtag.addEventListener('change', () => {
          subtagsCount = [...subTags].filter(tag => tag.checked).length;
          tab.dataset.count = subtagsCount;

          checkCount(subtagsCount, tab);
        })
      })

      tab.addEventListener('click', () => {
        title.textContent = tab.textContent;
      })
    })

    backButtons.forEach(button => {
      button.addEventListener('click', () => {
        title.textContent = "Все теги";
      })
    })

    resetButtons.forEach(button => {
      const subtagsContainer = button.closest('.js-tab-content');
      const subtags = subtagsContainer.querySelectorAll('.js-catalog-modal-subtag');
      const tagButton = modal.querySelector(`*[data-href="${subtagsContainer.dataset.id}"]`)

      button.addEventListener('click', () => {
        subtags.forEach(subtag => subtag.checked = false);
        checkCount(0, tagButton);
      })
    })
  })
}

function checkCount(count, display) {
  if (count > 0) {
    display.classList.add('count-active')
  } else {
    display.classList.remove('count-active')
  }
}
