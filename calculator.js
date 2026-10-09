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

// Monitoring Functions

function logCalculation(operation, firstNumber, secondNumber, result) {
    console.info(
        `[CalcFlow] Calculation: ${firstNumber} ${operation} ${secondNumber} = ${result}`
    );
}

function logCalculationError(message) {
    console.error(`[CalcFlow] Error: ${message}`);
}

function checkCalculatorHealth(components) {
    const missingComponents = Object.entries(components)
        .filter(([, available]) => !available)
        .map(([name]) => name);

    if (missingComponents.length > 0) {
        console.error(
            `[CalcFlow] Health check failed. Missing: ${missingComponents.join(", ")}`
        );

        return false;
    }

    console.info("[CalcFlow] Health check passed.");
    return true;
}

// Export the functions
if (typeof module !== "undefined") {
    module.exports = {
        appendNumber,
        addNumbers,
        subtractNumbers,
        clearCalculator,
        logCalculation,
        logCalculationError,
        checkCalculatorHealth
    };
}