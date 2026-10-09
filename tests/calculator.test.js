const {
    appendNumber,
    addNumbers,
    subtractNumbers,
    clearCalculator,
    logCalculation,
    logCalculationError,
    checkCalculatorHealth
} = require("../calculator");

describe("Number Input", () => {

    test("should replace the initial zero with a number", () => {
        expect(appendNumber("0", "5")).toBe("5");
    });

    test("should allow multiple digits to be entered", () => {
        expect(appendNumber("12", "3")).toBe("123");
    });

    test("should allow decimal numbers", () => {
        expect(appendNumber("1", ".")).toBe("1.");
        expect(appendNumber("1.", "5")).toBe("1.5");
    });

    test("should prevent multiple decimal points", () => {
        expect(appendNumber("1.5", ".")).toBe("1.5");
    });

    test("should allow zero as a number", () => {
        expect(appendNumber("0", "0")).toBe("0");
    });

});

describe("Addition", () => {

    test("should add two whole numbers", () => {
        expect(addNumbers(5, 3)).toBe(8);
    });

    test("should add two decimal numbers", () => {
        expect(addNumbers(1.5, 2.5)).toBe(4);
    });

    test("should add positive and negative numbers", () => {
        expect(addNumbers(10, -3)).toBe(7);
    });

});

describe("Subtraction", () => {

    test("should subtract two whole numbers", () => {
        expect(subtractNumbers(10, 3)).toBe(7);
    });

    test("should subtract two decimal numbers", () => {
        expect(subtractNumbers(5.5, 2.5)).toBe(3);
    });

    test("should return a negative result when the second number is larger", () => {
        expect(subtractNumbers(3, 8)).toBe(-5);
    });

});

describe("Clear Calculator", () => {

    test("should reset the display to zero", () => {
        expect(clearCalculator().displayValue).toBe("0");
    });

    test("should reset the first number", () => {
        expect(clearCalculator().firstNumber).toBeNull();
    });

    test("should reset the selected operation", () => {
        expect(clearCalculator().selectedOperation).toBeNull();
    });

});

// Error and Logging tests

describe("Application Logging", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should log a successful calculation", () => {
        const logSpy = jest
            .spyOn(console, "info")
            .mockImplementation(() => {});

        logCalculation("+", 5, 3, 8);

        expect(logSpy).toHaveBeenCalledWith(
            "[CalcFlow] Calculation: 5 + 3 = 8"
        );
    });

    test("should log an application error", () => {
        const errorSpy = jest
            .spyOn(console, "error")
            .mockImplementation(() => {});

        logCalculationError("Invalid calculation");

        expect(errorSpy).toHaveBeenCalledWith(
            "[CalcFlow] Error: Invalid calculation"
        );
    });

});

describe("Application Health Check", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should report healthy when all components are available", () => {
        const logSpy = jest
            .spyOn(console, "info")
            .mockImplementation(() => {});

        const result = checkCalculatorHealth({
            display: true,
            numberButtons: true,
            operationButtons: true,
            equalsButton: true,
            clearButton: true
        });

        expect(result).toBe(true);
        expect(logSpy).toHaveBeenCalledWith(
            "[CalcFlow] Health check passed."
        );
    });

    test("should report unhealthy when a component is missing", () => {
        const errorSpy = jest
            .spyOn(console, "error")
            .mockImplementation(() => {});

        const result = checkCalculatorHealth({
            display: true,
            numberButtons: true,
            clearButton: false
        });

        expect(result).toBe(false);
        expect(errorSpy).toHaveBeenCalledWith(
            "[CalcFlow] Health check failed. Missing: clearButton"
        );
    });

});