'use strict';
const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitPress);
function onSubmitPress(evt) {
  evt.preventDefault();
  const email = evt.target.elements.email.value.trim();
  const password = evt.target.elements.password.value.trim();
  const emailKey = evt.target.elements.email.name;
  const passwordKey = evt.target.elements.password.name;
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const userData = {
    [emailKey]: email,
    [passwordKey]: password,
  };
  console.log(userData);
  evt.target.reset();
}
