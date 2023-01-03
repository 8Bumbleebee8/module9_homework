const form = document.querySelector('.form');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

let reqUrl = 'https://picsum.photos/v2/list?limit=';

button.addEventListener('click', changeUrl);

function changeUrl(e) {
  e.preventDefault();
  if (Number(input.value) >= 1 && Number(input.value) <= 10) {
    reqUrl += Number(input.value);
    getRequest(reqUrl);
  } else {
    error.textContent = 'число от 1 до 10 вне диапозона';
  }
}

function getRequest(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    const response = JSON.parse(xhr.response);
    response.forEach((elem) => {
      result.innerHTML += `<img class="img" src="${elem.download_url}" alt="" width="360px" height="260px">`;
    });
  };
  xhr.send();
  error.textContent = '';
  input.style.display = 'none';
  button.textContent = 'Repeat';
  button.removeEventListener('click', changeUrl);
}