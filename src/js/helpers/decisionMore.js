export default function decisionMore() {
  const section = document.querySelector('.decision');
  if (!section) return

  const list = section.querySelector('.decision__list');
  const buttons = section.querySelectorAll('.decision__item-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = Boolean([...buttons].find((btn => {
        return btn.classList.contains('active')
      })))

      list.style.alignItems = isExpanded ? "flex-start" : "stretch";
    })
  })
}
