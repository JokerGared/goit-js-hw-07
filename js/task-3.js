'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
    return;
  }
  nameInput.value = nameInput.value.trim();
  nameOutput.textContent = event.currentTarget.value.trim();
});
