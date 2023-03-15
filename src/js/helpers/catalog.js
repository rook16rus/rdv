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
}
