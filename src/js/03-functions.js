import throttle from 'lodash.throttle';
import refs from './03-references'; // дефолтне імпортування посилань на елементи форми
import { save, load, remove } from './03-storage'; //іменований імпорт обєкта

const STORAGE_KEY = 'feedback-form-state'; // виносимо в глобальну змінну параметр, що часто використовується
let formData = load(STORAGE_KEY) || {}; // створюємо обєкт для збереження тексту з інпутів, якщо щось було вже прописано при перезавантаженні залишаємо в локалстореджі і додаємо до нього текст далі (також додаємо в інпут),якщо нічого не було (null) буде пустий масив

// функція запису в локал сторедж значень інпутів
function onTextAreaInputs(event) {
  // в змінну значення поля куди де відпувається введення (завжди target!!!)
  formData[event.target.name] = event.target.value; // в обєкт форм дата з ключем [event.target.name - це невідоме значення тому в квдрат дужках. Сохраняем значения всех текстовых полей на странице в объекте formData, используя атрибут name в качестве ключа.] покласти значення event.target.value
  save(STORAGE_KEY, formData); //зберігаємо в локал сторедж через метод save, що перевіряє помилки парсу, імпортований з файлу сторедж
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // зберігаємо в локал сторедж без перевірки на помилки методом save
}

// функція яка заповнює поля останніми даними при перезавантаженні сторінки
function populateInputsArea() {
  // const stringData = localStorage.getItem(STORAGE_KEY); // отримання обєкту через ключ у вигляді строки
  // const savedInputsData = JSON.parse(stringData); // персел строки в обєкт
  //const savedInputsData = JSON.parse(localStorage.getItem(STORAGE_KEY)); // або однією строкою

  const savedInputsData = load(STORAGE_KEY); // отримання обєкту через ключ з перевіркою на помилки при парселі даних імпортованим методом лоад з файлу сторедж

  // перевіряємо чи є збережений текст в localStorage
  if (savedInputsData) {
    refs.email.value = savedInputsData.email || ''; // повертаємо остані введені дані з обєкта локал сторедж і інпут, або порожню строку якщо нічого не було введено
    refs.message.value = savedInputsData.message || '';
  }
}
// функція очищення форми, локал стореджу і виведення останніх даних в консоль при натисканні сабміту
function onSubmitBtn(event) {
  // перевірка чи всі поля заповнені
  if ((refs.email.value !== '') & (refs.message.value !== '')) {
    event.preventDefault(); // уникнення перезавантаження сторінки
    event.currentTarget.reset(); //очищення всієї форми при кліку на кнопку (резет лише якщо це форма)
    // refs.currentTarget.value = ''; // якщо не форма можна очищати значення  полів через присвоєння пустої строки
    console.log(load(STORAGE_KEY)); // виведення у консоль (через перевірку на помилки функцією, що імпортована з файлу сторедж) об'єкт з полями email, message та їхніми поточними значеннями
    // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); // виведення у консоль об'єкт з полями email, message та їхніми поточними значеннями
    remove(STORAGE_KEY); // очищення локал стореджу після сабміту з використанням методу ремув для перевірки на помилки парсингу, імпортованого з файлу сторедж
    // localStorage.removeItem(STORAGE_KEY); // очищення локал стореджу після сабміту
    formData = {}; // очищення обєкту після сабміту
  } else {
    alert('Заповніть, будь ласка, всі поля');
  }
}

export { onTextAreaInputs, populateInputsArea, onSubmitBtn }; //іменований експорт функцій через обєкт
