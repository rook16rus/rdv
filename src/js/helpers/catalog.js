export default function catalog() {
  const catalog = document.querySelector('.catalog');
  if (!catalog) return

  const tags = catalog.querySelectorAll('.catalog__tag-radio');

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      tag.classList.add('active')
      console.log(tag.checked)
    })
  })
}
