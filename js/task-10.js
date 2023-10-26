function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("#controls").firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
userInput.addEventListener("change", onInputChange);

let userInputValue = 0;

function onInputChange(event) {
  userInputValue = event.currentTarget.value;
};

function onCreateBtnClick() {
  createBoxes(userInputValue);
}

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 1, side = 30; i <= amount; i += 1, side += 10) {
    const color = getRandomHexColor();
  boxesArr.push(`<div style="width: ${side}px; height: ${side}px; background-color: ${color}"></div>`);}
  const boxesMarkup = boxesArr.join("");

  boxesContainer.insertAdjacentHTML("beforeend", boxesMarkup);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
};