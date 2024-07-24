import { registerClient } from './components/registerClient';
import { searchLocation } from './components/searchLocation';

const searchBtn = document.getElementById('search');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchLocation();
  });
}

const registerBtn = document.getElementById('register');

if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    registerClient();
  });
}
