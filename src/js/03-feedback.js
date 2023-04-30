import throttle from 'lodash.throttle';
import refs from './03-references'; // дефолтне імпортування посилань на елементи форми
import {
  onTextAreaInputs,
  populateInputsArea,
  onSubmitBtn,
} from './03-functions'; //іменоване імпортування обєкта з функціями

// вішаємо слухачі подій
refs.form.addEventListener('input', throttle(onTextAreaInputs, 1000)); // на введення в інпутах
refs.form.addEventListener('submit', onSubmitBtn); // на подію сабміту

populateInputsArea(); // виклик функції, яка заповнює поля останніми даними при перезавантаженні сторінки
