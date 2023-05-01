import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const idPlayer = document.querySelector('#vimeo-player'); // підключення плеєра
const player = new Player(idPlayer);

resumePlayBack(); // виклик функції відновлення відео з місця зупинки після перезавантаження сторінки

// за допомогою методу плеєра (events - події) відстежуємо під час програвання плеєра подію timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(onPlay, 1000));

// через деструктирізацію витягаємо з обекта тільки секунди
function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds); // Зберігаємо  у локальне сховище секунти без приведення до строки бо це прості дані(числа)
}

// функція відновлення відео з місця зупинки після перезавантаження сторінки
function resumePlayBack() {
  const currentTimeData = localStorage.getItem(STORAGE_KEY);
  // перевіряємо чи є збережене в localStorage
  if (currentTimeData) {
    player.setCurrentTime(currentTimeData); // повертаємо остані введені дані з обєкта локал сторедж
  }
}
