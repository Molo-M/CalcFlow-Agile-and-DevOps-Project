function appendNumber(currentValue, value) {
    if (currentValue === "0" && value !== ".") {
        return value;
    }

    if (value === "." && currentValue.includes(".")) {
        return currentValue;
    }

    return currentValue + value;
}

function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function clearCalculator() {
    return {
        displayValue: "0",
        firstNumber: null,
        selectedOperation: null
    };
}

if (typeof module !== "undefined") {
    module.exports = {
        appendNumber,
        addNumbers,
        subtractNumbers,
        clearCalculator
    };
}