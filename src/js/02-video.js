import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const idPlayer = document.querySelector('#vimeo-player'); // підключення плеєра
const player = new Player(idPlayer);

resumePlayBack();

// за допомогою методу плеєра (events - події) відстежуємо під час програвання плеєра подію timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(timeData) {
  const currentTime = JSON.stringify(timeData); // сторюємо константу для збереженнячасу відтворення відео плеєра(обєкт приходить з player.on('timeupdate'), приводимо до строки
  localStorage.setItem(STORAGE_KEY, currentTime); // Зберігаємо  у локальне сховище
}

// функція відновлення відео з місця зупинки після перезавантаження сторінки
function resumePlayBack() {
  const currentTimeData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // перевіряємо чи є збережене в localStorage
  if (currentTimeData) {
    player
      .setCurrentTime(currentTimeData.seconds) // повертаємо остані введені дані з обєкта локал сторедж
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  }
}

// const currentTimeData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// // перевіряємо чи є збережене в localStorage
// if (currentTimeData) {
//   player
//     .setCurrentTime(currentTimeData.seconds) // повертаємо остані введені дані з обєкта локал сторедж (звертаємось до параметру обєкта "секунди")
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           break;

//         default:
//           // some other error occurred
//           break;
//       }
//     });
// }
