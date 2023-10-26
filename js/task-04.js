let counterValue = 0;

const value = document.querySelector("#value");
const decrementBtnEl = document.querySelector('[data-action = "decrement"]');
const incrementBtnEl = document.querySelector('[data-action = "increment"]');

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick () {
counterValue -= 1;
value.textContent = counterValue;
}

function onIncrementBtnClick () {
counterValue += 1;
value.textContent = counterValue;
}
