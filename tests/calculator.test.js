const { appendNumber } = require("../calculator");

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