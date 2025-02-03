function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColor = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
buttonChangeColor.addEventListener('click', onButtonClick);
function onButtonClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  currentColor.textContent = color;
}
