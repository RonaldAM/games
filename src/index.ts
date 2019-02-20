import './styles.css';
import { ready } from './utils';
const button = document.getElementById('setName');
const name = document.getElementById('name');
const nameInput = document.getElementById('nameInput') as HTMLInputElement;

button.addEventListener('click', function () {
    name.innerText =
        nameInput.value;
});

ready(() => { alert('i am ready') });
