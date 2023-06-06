export default function projectsReset() {
  const form = document.querySelector('.projects__filter');
  if (!form) return

  const inputsValues = [...form.elements].map(el => el.checked);
  const tags = document.querySelectorAll('.projects__tag-input');
  const resetButton = document.querySelector('.projects__filter-reset');

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      if (tag.classList.contains('active')) {
        tag.checked = false;
        tag.classList.remove('active');
      } else {
        tags.forEach(tag => tag.classList.remove('active'));
        tag.checked = true;
        tag.classList.add('active');
      }

      showOrHideResetButton();
    })
  })

  resetButton.addEventListener('click', () => {
    tags.forEach(tag => {
      tag.checked = false;
      tag.classList.remove('active');
    })

    resetButton.classList.remove('active')
  })

  function showOrHideResetButton() {
    if (isFormChanged(form)) {
      resetButton.classList.add('active')
    } else {
      resetButton.classList.remove('active')
    }
  }

  function isFormChanged(form) {
    for (let i = 0; i < form.elements.length; i++) {
      if(form.elements[i].checked !== inputsValues[i]) {
        return true
      }
    }

    return false;
  }
}
