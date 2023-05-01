// код перевірки помилок парса

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(
      'Помилка під час збереження даних в localStorage: ',
      error.message
    );
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(
      'Помилка під час отримання даних з localStorage: ',
      error.message
    );
  }
};

export { save, load };
