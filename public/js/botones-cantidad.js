

const addButton = document.querySelectorAll(".add");
const subtractButton = document.querySelectorAll(".subtract");
const quantityInputs = document.querySelectorAll(".quantity");

addButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        quantityInputs[index].value = Number(quantityInputs[index].value) + 1;
    });
});

subtractButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (quantityInputs[index].value > 0) {
            quantityInputs[index].value = Number(quantityInputs[index].value) - 1;
        }
    });
});



