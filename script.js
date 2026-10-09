const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-btn");
const operationButtons = document.querySelectorAll(".operation-btn");
const equalsButton = document.querySelector(".equals-btn");

let firstNumber = null;
let selectedOperation = null;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value = appendNumber(
            display.value,
            button.dataset.number
        );
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        firstNumber = Number(display.value);
        selectedOperation = button.dataset.operation;
        display.value = "0";
    });
});

equalsButton.addEventListener("click", () => {
    const secondNumber = Number(display.value);

    if (selectedOperation === "+") {
        display.value = addNumbers(firstNumber, secondNumber);
    } else if (selectedOperation === "-") {
        display.value = subtractNumbers(firstNumber, secondNumber);
    }
});