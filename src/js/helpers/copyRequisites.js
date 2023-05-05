export default function copyRequisites() {
  const buttons = document.querySelectorAll('.js-copy-requisites');

  buttons.forEach(button => {
    const container = button.closest('.requisites__block');
    const requisitesInfo = container.querySelector('.requisites__block-list');

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(requisitesInfo.textContent);
    })
  })
}
