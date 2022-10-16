const displayInput = document.querySelector("#displayInput");
const numbers = document.querySelectorAll("button");
// let currentInput = displayInput.textContent;
// let inputAsString = displayInput;

const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const equalsButton = document.querySelector("#equals");
const leftParenthesis = document.querySelector("#leftParenthesis");
const rightParenthesis = document.querySelector("#rightParenthesis");
const clearAll = document.querySelector("#c");
const deleteCharacter = document.querySelector("#deleteCharacter");
const historyInput = document.querySelector("#historyInput");

let deleteSingleCharacter = deleteCharacter.addEventListener("click", (e) => {
  displayInput.textContent = displayInput.textContent.slice(0, -1);
});

let clearFunction = clearAll.addEventListener("click", (e) => {
  displayInput.textContent = "";
});

equalsButton.addEventListener("click", (e) => {
  let result = eval(displayInput.textContent);
  displayInput.textContent = result;
});

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    displayInput.textContent += e.target.value;
  });
});
