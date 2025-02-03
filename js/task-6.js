function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');
const fragment = document.createDocumentFragment();
createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);
function onCreateButtonClick() {
  if (input.value === '') {
    alert(`0 is not valid, pls enter number from 1 to 100`);
    input.value = '';
    return;
  }
  if (input.value < 1 || input.value > 100) {
    alert(`${input.value} is not valid, pls enter number from 1 to 100`);
    input.value = '';
    return;
  }
  for (let i = 0; i < input.value; i++) {
    createBoxes(i);

    // markup += '<div></div>';
  }
  boxes.appendChild(fragment);
  input.value = '';
}
function onDestroyButtonClick() {
  destroyBoxes();
}
function createBoxes(amount) {
  // let markup = '';
  const boxAmount = boxes.children.length;
  const size = 30 + boxAmount * 10;
  const newBox = document.createElement('div');
  newBox.style.width = `${size + amount * 10}px`;
  newBox.style.height = `${size + amount * 10}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(newBox);
  // box.insertAdjacentHTML('beforeend', markup);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
