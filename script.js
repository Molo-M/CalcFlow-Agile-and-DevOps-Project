const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-btn");

function enterNumber(value) {
    if (display.value === "0" && value !== ".") {
        display.value = value;
        return;
    }

    if (value === "." && display.value.includes(".")) {
        return;
    }

    display.value += value;
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        enterNumber(button.dataset.number);
    });
});