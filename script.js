const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-btn");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value = appendNumber(
            display.value,
            button.dataset.number
        );
    });
});