export default function fixedModalButtons() {
  const modalContents = document.querySelectorAll('.modal__content');

  modalContents.forEach(content => {
    const buttons = content.closest('.modal__container').querySelector('.modal-burger__buttons');
    if (!buttons) return

    const wrapper = content.querySelector('.simplebar-content-wrapper');

    wrapper.addEventListener('scroll', (e) => {
      if (e.currentTarget.scrollTop > 0) {
        buttons.classList.add('fixed');
      } else {
        buttons.classList.remove('fixed');
      }
    })
  })
}
