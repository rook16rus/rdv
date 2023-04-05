import catalog from "./catalog";

export default function catalogAdaptive() {
  const catalogSection = document.querySelector('.catalog')
  if (!catalogSection) return

  const dateButton = catalogSection.querySelector('.catalog__date-button');
  const dotesButton = catalogSection.querySelector('.catalog__tags-more');
  const tags = catalogSection.querySelectorAll('.catalog__tag');

  if (matchMedia('(max-width: 1024px)').matches) {
    dateButton.setAttribute("data-path", "dates");
    dotesButton.setAttribute("data-path", "tags");
    tags.forEach(tag => tag.setAttribute("data-path", "tags"));
  } else {
    catalog();
  }
}
