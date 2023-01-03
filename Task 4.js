const form = document.querySelector('.form');
const inputFirst = document.querySelector('.inputfirst');
const inputSecond = document.querySelector('.inputsecond');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const valueFirst = Number(inputFirst.value);
  const valueSecond = Number(inputSecond.value);
  if (
    valueFirst >= 100 &&
    valueFirst <= 300 &&
    valueSecond >= 100 &&
    valueSecond <= 300
  ) {
    fetch(`https://picsum.photos/${valueFirst}/${valueSecond}`)
      .then((response) => {
        result.innerHTML = `<img class="img" src="${response.url}" alt="" width="300px" height="250px">`;
      })
      .catch(() => {
        console.log('Что-то пошло не так');
      });
  } else {
    error.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  }
});