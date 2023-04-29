import throttle from 'lodash.throttle';
// import refs from './03-references';
import {
  onTextAreaInputs,
  populateInputsArea,
  onSubmitBtn,
} from './03-functions';

// отримуємо необхідні елементи форми
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'), // посилання через нейм
  message: document.querySelector('textarea[name="message"]'),
};

populateInputsArea(); // виклик функції, яка заповнює поля останніми даними при перезавантаженні сторінки

// вішаємо слухачі подій
refs.form.addEventListener('input', throttle(onTextAreaInputs, 1000)); // на введення в інпутах
refs.form.addEventListener('submit', onSubmitBtn); // на подію сабміту

onTextAreaInputs();
populateInputsArea();
onSubmitBtn();
