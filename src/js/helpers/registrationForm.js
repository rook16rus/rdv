import 'parsleyjs'
import $ from "jquery";

export default function registrationForm() {
  const form = document.querySelector('.modal-registration');
  if (!form) return

  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      if (!window.initRegistrationForm) return;

      const formGroup = input.closest('.modal-registration__form-group')
      const checkedCount = [...formGroup.querySelectorAll('input')].filter(input => input.checked).length;
      const button = formGroup.querySelector('.button--blue');

      if (checkedCount > 0) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', true)
      }
    })
  })

  const groups = form.querySelectorAll('.modal-registration__form-group');
  const tabButtons = form.querySelectorAll('button[data-href]');
  const progressbarLine = form.querySelector('.modal-registration__progressbar-line');

  progressbarLine.style.setProperty('--registration-progress', 0);

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const activeIndex = [...groups].findIndex(group => group.classList.contains('active'));
      const percent = activeIndex / (groups.length) * 100;

      console.log(activeIndex);

      progressbarLine.style.setProperty('--registration-progress', percent + '%');
    })
  })

  const eventForm = document.querySelector('.event-form__form');
  if (!eventForm) return;

  const eventFormButton = eventForm.querySelector('.event-form__button');

  $(eventForm).parsley({
    errorsContainer: function (field) {
      return field.$element.closest('.input-wrapper');
    },
    focus: 'none',
    errorClass: 'is-error',
    successClass: 'success',
    classHandler: (field) => {
      return field.$element.closest('.js-validation-wrapper');
    },
    trigger: 'change'
  });

  eventFormButton.addEventListener('click', () => {
    if ($(eventForm).parsley().isValid()) {
      window.rdv_API.modal.onOpen('registration');
    }
  })
}
