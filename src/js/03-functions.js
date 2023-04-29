// import refs from './03-references';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'), // посилання через нейм
  message: document.querySelector('textarea[name="message"]'),
};

// вішаємо слухачі подій
refs.form.addEventListener('input', throttle(onTextAreaInputs, 1000)); // на введення в інпутах
refs.form.addEventListener('submit', onSubmitBtn); // на подію сабміту

const STORAGE_KEY = 'feedback-form-state'; // виносимо в глобальну змінну параметр, що часто використовується
const formData = {}; // створюємо обєкт для збереження тексту з інпутів

// функція запису в локал сторедж значень інпутів
function onTextAreaInputs(event) {
  // в змінну значення поля куди де відпувається введення (завжди target!!!)
  formData[event.target.name] = event.target.value; // в обєкт форм дата з ключем [event.target.name] покласти значення event.target.value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// функція яка заповнює поля останніми даними при перезавантаженні сторінки
function populateInputsArea() {
  // перевірка на помилки при парселі даних з локал стореджу
  try {
    const stringData = localStorage.getItem(STORAGE_KEY); // отримання обєкту через ключ у вигляді строки
    savedInputsData = JSON.parse(stringData); // персел строки в обєкт
  } catch (evt) {
    console.error('Помилка під час отримання даних з localStorage:', evt);
  }
  // перевіряємо чи є збережений текст в localStorage
  if (savedInputsData) {
    refs.email.value = savedInputsData.email || ''; // повертаємо остані введені дані з обєкта локал сторедж і інпут, або порожню строку якщо нічого не було введено
    refs.message.value = savedInputsData.message || '';
  }
}
// функція очищення форми, локал стореджу і виведення останніх даних в консоль при натисканні сабміту
function onSubmitBtn(event) {
  event.preventDefault(); // уникнення перезавантаження сторінки
  event.currentTarget.reset(); //очищення всієї форми при кліку на кнопку
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); // виведення у консоль об'єкт з полями email, message та їхніми поточними значеннями
  localStorage.removeItem(STORAGE_KEY); // очищення локал стореджу після сабміту
}

export { onTextAreaInputs, populateInputsArea, onSubmitBtn };
