import "./style.css";
import Swal from 'sweetalert2';

const BASE_URL = 'https://superheroapi.com/api.php/6193953773960111'

const button = document.querySelector('button');
const randomNumber = () => Math.floor(Math.random()*100);

let id;

const changeText = (info) => {
  document.querySelector('p').innerText = info;
}
const changeImg = (info) => {
  let img = document.querySelector('img');
  img.src = info;
}

button.addEventListener('click', () => {
  id = randomNumber();
  fetch(`${BASE_URL}/${id}/image`)
    .then((response) => response.json())
    .then((data) => {
      changeImg(data.url);
      changeText(data.name);
    })
    .catch((reject) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
});