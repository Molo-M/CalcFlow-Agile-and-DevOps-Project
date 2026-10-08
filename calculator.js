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

if (typeof module !== "undefined") {
    module.exports = {
        appendNumber,
        addNumbers
    };
}