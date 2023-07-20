document.addEventListener("DOMContentLoaded", (event) => {
  /* ====   Реализация отправки данных с форм регистрации на мероприятие и анкеты   ==== */

  /* Отправка данных двух форм на сервер */
  const registrationForm = document.querySelector('.js-event-form');
  const registrationModalForm = document.querySelector('.modal-registration__form');

  if (!registrationForm) return

  /* Отправкой данных будет заниматься форма в модальном окне с анкетой */
  registrationModalForm.addEventListener('submit', e => {
    e.preventDefault();

    /* Инициализация данных форм и их объединение в один объект */
    const registrationFormData = new FormData(registrationForm);
    const registrationModalFormData = new FormData(registrationModalForm);

    for (let pair of registrationModalFormData.entries()) {
      registrationFormData.append(pair[0], pair[1]);
    }

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
        window.rdv_API.modal.onOpen("error");
      });
  })

  /* ====   Формирование анкеты формы через json   ==== */

  /* Беру данные для формирования урла из разметки */
  const jsonUrl = registrationForm.dataset.json
  const eventId = registrationForm.querySelector('input[name="eventId"]');

  /* Фомирую урл */
  const url = `${jsonUrl}?${eventId.name}=${eventId.value}`;

  /* Template блока с вопросом для формирования разметки */
  const questionTemplate = registrationModalForm.querySelector('#eventQuestionTemp');

  const formGroup = questionTemplate.content.querySelector('.modal-registration__form-group');
  const questionTitle = questionTemplate.content.querySelector('.modal-registration__question');
  const answersWrapper = questionTemplate.content.querySelector('.modal-registration__answers');
  const answersLeft = questionTemplate.content.querySelector('.modal-registration__answers-left');
  const answersRight = questionTemplate.content.querySelector('.modal-registration__answers-right');
  const navigationButtons = questionTemplate.content.querySelector('.modal-registration__buttons');

  /* Template поля с ответом для формирования разметки */
  const answerTemplate = registrationModalForm.querySelector('#eventAnswerTemp');

  const answerInput = answerTemplate.content.querySelector('.modal-registration__input');
  const answerLabel = answerTemplate.content.querySelector('.modal-registration__label');

  /* Тестовый запрос к файлу events.json (заменить на url) */
  fetch("./assets/include/events.json")
    .then(res => res.json())
    .then(json => {
      /* Перебираю все вопросы */
      const questions = json.question;

      if (!questions) throw new Error("The questionnaire is empty");

      questions.forEach((question, index) => {
        /* Дают первому табу класс active */
        if (index === 0) {
          formGroup.classList.add('active');
        } else {
          formGroup.classList.remove('active');
        }

        /* Подставляю данные для табов и вопроса из json-файла */
        formGroup.dataset.id = `answerTab${index}`;
        questionTitle.textContent = question.name;

        /* В зависимости от количества ответов формирую сетку. Если вопросов больше пяти, то вопросы делятся на 2 колонки */
        const answersLeftArr = question.answers.slice(0, question.answers.length / 2 + 1);
        const answersRightArr = question.answers.slice(question.answers.length / 2 + 1);
        answersLeft.innerHTML = '';
        answersRight.innerHTML = '';

        if (question.answers.length < 5) {
          answersWrapper.classList.add('modal-registration__answers--single-column');

          answersLeftArr.forEach((answer) => {
            answerInputAdd(question, answer, answersLeft);
          })

          answersRightArr.forEach((answer) => {
            answerInputAdd(question, answer, answersLeft);
          })
        } else {
          answersWrapper.classList.remove('modal-registration__answers--single-column');

          answersLeftArr.forEach((answer) => {
            answerInputAdd(question, answer, answersLeft);
          })

          answersRightArr.forEach((answer) => {
            answerInputAdd(question, answer, answersRight);
          })
        }

        /* Добавляю кнопки навигации в зависимости от того, на каком шаге находится пользователь. */
        let navigationButton;
        navigationButtons.innerHTML = '';

        if (index > 0) {
          navigationButton = document.createElement('button');
          navigationButton.className = 'modal-registration__button button button--medium button--bordered js-tab';
          navigationButton.type = 'button';
          navigationButton.dataset.href= `answerTab${index - 1}`;
          navigationButton.textContent = 'Назад';

          navigationButtons.append(navigationButton);
        }

        if (index + 1 < questions.length) {
          navigationButton = document.createElement('button');
          navigationButton.className = 'modal-registration__button button button--medium button--blue js-tab';
          navigationButton.type = 'button';
          navigationButton.dataset.href= `answerTab${index + 1}`;
          navigationButton.textContent = 'Далее';
          navigationButton.disabled = true;

          navigationButtons.append(navigationButton);
        }

        if (index + 1 === questions.length) {
          navigationButton = document.createElement('button');
          navigationButton.className = 'modal-registration__button button button--medium button--blue';
          navigationButton.type = 'submit';
          navigationButton.textContent = 'Завершить';
          navigationButton.disabled = true;

          navigationButtons.append(navigationButton);
        }

        /* Добавляю получившийся блок вопроса в разметку */
        const questionBlock = questionTemplate.content.cloneNode(true);
        registrationModalForm.append(questionBlock);
      })
    })
    .then(() => {
      /* После формировании разметки запускаю все функции, связанные с анкетой */
      window.initTabs();
      window.initRegistrationForm();
      window.initSimpleBar();
    })
    .catch(err => {
      console.error(err);
    })

  /* Функция для создания поля с вопросом. */
  function answerInputAdd(question, answer, answerColumn) {
    answerInput.type = question.isMultiple ? 'radio' : 'checkbox';
    answerInput.name = question.isMultiple ? question.id : answer.id;
    answerInput.id = answer.id;
    answerInput.value = answer.id

    answerLabel.textContent = answer.name;
    answerLabel.htmlFor = answer.id;

    const answerEl = answerTemplate.content.cloneNode(true);
    answerColumn.append(answerEl);
  }
});
