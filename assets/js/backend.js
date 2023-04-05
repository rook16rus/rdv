document.addEventListener("DOMContentLoaded", (event) => {
  /* Отправка данных двух форм на сервер */
  const registrationForm = document.querySelector('.event-form__form');
  const registrationModalForm = document.querySelector('.modal-registration__form');

  /* Отправкой данных будет заниматься форма в модальном окне с анкетой */
  registrationModalForm.addEventListener('submit', e => {
    e.preventDefault();

    /* Инициализация данных форм и их объединение в один объект */
    const registrationFormData = new FormData(registrationForm);
    const registrationModalFormData = new FormData(registrationModalForm);
    const combinedFormData = Object.assign(registrationFormData, registrationModalFormData);

    /* Путь к php-файлу берется из формы с анкетой */
    const url = registrationModalForm.getAttribute("action");

    /* Отправляем запрос и обрабатываем ответ. В зависимости от ответа открываем соотв. модалку. */
    axios.post(url, combinedFormData)
      .then((response) => {
        const emailInputValue = registrationForm.querySelector('input[type="email"]').value;
        const emailSpan = document.querySelector('.modal-registration-success .js-email');
        emailSpan.textContent = emailInputValue;

        window.rdv_API.modal.close();
        window.rdv_API.modal.onOpen("registration-success");
      })
      .catch((error) => {
        console.log(error.message);
        window.rdv_API.modal.close();
        window.rdv_API.modal.onOpen("registration-success");
      });
  })
});
