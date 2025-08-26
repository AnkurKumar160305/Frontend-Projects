let inputBox = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let clear = document.querySelector("#c");
let clearEntry = document.querySelector("#ce");
let equal = document.querySelector("#equal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.id !== "c" && button.id !== "ce" && button.id !== "equal") {
        inputBox.value += button.innerHTML;
    }
  });
});
let calculate = (e) => {
  let expression = inputBox.value;
  expression = expression.replace(/√(\d+|\([^()]*\))/g, "Math.sqrt($1)");
  let value = eval(expression);
  if (value !== undefined) {
    inputBox.value = value;
  } else {
    inputBox.value = "";
  }
};

equal.addEventListener("click", calculate);

clear.addEventListener("click", () => {
  inputBox.value = "";
});

clearEntry.addEventListener("click", () => {
  inputBox.value = inputBox.value.slice(0, -1);
});