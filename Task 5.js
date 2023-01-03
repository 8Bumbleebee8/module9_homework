const form = document.querySelector('.form');
const inputFirst = document.querySelector('.inputfirst');
const inputSecond = document.querySelector('.inputsecond');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

document.addEventListener('DOMContentLoaded', () => {
  let savedSession = localStorage.getItem('images');
  if (savedSession) {
    result.innerHTML = savedSession;
  }
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  const valueFirst = Number(inputFirst.value);
  const valueSecond = Number(inputSecond.value);

  if (inputFirst => 1 && inputFirst <= 10) {
    error.textContent = 'Номер страницы вне диапазона от 1 до 10';
  } else if (inputSecond => 1 && inputSecond <= 10) {
    error.textContent = 'Лимит вне диапазона от 1 до 10';
  } else if (
    inputFirst >= 1 &&
    inputFirst <= 10 &&
    inputSecond >= 1 &&
    inputSecond <= 10
  ) {
    error.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else {
    getRequest(valueFirst, valueSecond);
  }
});

function getRequest(page, limit) {
  let reqUrl = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  console.log(reqUrl);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', reqUrl, true);

  xhr.onload = function () {
    const response = JSON.parse(xhr.response);
    let content = ``;
    localStorage.clear();

    for (let item of response) {
      content += `<img class="img" src="${item.download_url}" alt="" width="300px" height="250px">`;
    }
    localStorage.setItem('images', content);
    result.innerHTML = content;
  };
  xhr.send();
}