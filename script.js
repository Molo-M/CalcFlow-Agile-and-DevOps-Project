
const display = document.getElementById("display");
const errorMessage = document.getElementById("error-message");
const numberButtons = document.querySelectorAll(".number-btn");
const operationButtons = document.querySelectorAll(".operation-btn");
const equalsButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-btn");

let firstNumber = null;
let selectedOperation = null;

function showError(message) {
    errorMessage.textContent = message;
    logCalculationError(message);
}

function clearError() {
    errorMessage.textContent = "";
}

const healthStatus = checkCalculatorHealth({
    display: display !== null,
    errorMessage: errorMessage !== null,
    numberButtons: numberButtons.length > 0,
    operationButtons: operationButtons.length > 0,
    equalsButton: equalsButton !== null,
    clearButton: clearButton !== null,
    appendNumber: typeof appendNumber === "function",
    addNumbers: typeof addNumbers === "function",
    subtractNumbers: typeof subtractNumbers === "function",
    clearCalculator: typeof clearCalculator === "function"
});

if (!healthStatus) {
    if (errorMessage) {
        errorMessage.textContent =
            "The calculator could not initialize correctly. Please reload the page.";
    }

    throw new Error("CalcFlow failed its startup health check.");
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        clearError();

        display.value = appendNumber(
            display.value,
            button.dataset.number
        );
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        clearError();

        firstNumber = Number(display.value);
        selectedOperation = button.dataset.operation;
        display.value = "0";
    });
});

equalsButton.addEventListener("click", () => {
    if (firstNumber === null || selectedOperation === null) {
        showError("Please enter a calculation first.");
        return;
    }

    const secondNumber = Number(display.value);
    let result;

    if (selectedOperation === "+") {
        result = addNumbers(firstNumber, secondNumber);
    } else if (selectedOperation === "-") {
        result = subtractNumbers(firstNumber, secondNumber);
    } else {
        showError("This operation is not supported yet.");
        return;
    }

    if (!Number.isFinite(result)) {
        showError("The calculation produced an invalid result.");
        return;
    }

    display.value = String(result);

    logCalculation(
        selectedOperation,
        firstNumber,
        secondNumber,
        result
    );

    firstNumber = null;
    selectedOperation = null;
    clearError();
});

clearButton.addEventListener("click", () => {
    const state = clearCalculator();

    display.value = state.displayValue;
    firstNumber = state.firstNumber;
    selectedOperation = state.selectedOperation;

    clearError();
});