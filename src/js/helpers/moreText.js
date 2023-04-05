export default function moreText() {
  const containers = document.querySelectorAll('.js-more-text-container');

  containers.forEach(container => {
    const text = container.querySelector('.js-more-text');
    const button = container.querySelector('.js-more-text-button');

    button.addEventListener('click', () => {
      if (text.classList.contains('active')) {
        button.querySelector('span').textContent = 'Раскрыть';
      } else {
        button.querySelector('span').textContent = 'Скрыть';
      }

      text.classList.toggle('active');
      button.classList.toggle('active');
    })
  })
}
