const inputRange = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputRange.addEventListener("input", onInputRangeChange);

function onInputRangeChange(event) {
textSpan.style.fontSize = `${Number(event.currentTarget.value)}px`;
};