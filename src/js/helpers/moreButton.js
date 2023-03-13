export default function moreButton() {
  const buttons = document.querySelectorAll('.js-more-button');

  buttons.forEach(button => {
    const container = button.closest('.js-more-button-container');
    if (!container) return

    let items = container.querySelectorAll('.js-more-button-item');
    items = Array.from(items).filter(item => item.closest('.js-more-button-container').isEqualNode(container));

    let count;

    if (matchMedia('(max-width: 768px)').matches) {
      count = button.dataset.mobileCount || button.dataset.count
    } else {
      count = button.dataset.count
    }

    if (items.length > count) {
      const surplus = [];

      items.forEach((item, index) => {
        if (index + 1 > count) {
          item.classList.add('visually-hidden');
          surplus.push(item);
        }
      })

      const buttonSurplusCount = button.querySelector('.js-more-button-surplus');
      if (buttonSurplusCount) {
        buttonSurplusCount.textContent = surplus.length.toString();
      }

      button.addEventListener('click', () => {
        items.forEach(item => item.classList.remove('visually-hidden'))
        button.remove();
      })
    } else {
      button.remove();
    }
  })
}
