let isLoggedIn = false;

const protectedItems = document.querySelectorAll(".protected");

protectedItems.forEach(item => {
    item.addEventListener("click", function(event){

        if(!isLoggedIn){
            event.preventDefault();
            window.location.href = "Log.html";
        }

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('custom-amount');
    const priceButtons = document.querySelectorAll('.row .box');

    priceButtons.forEach(button => {
        button.addEventListener('click', () => {
            let value = button.textContent;
            let numericValue = value.replace('$', '');
            amountInput.value = numericValue;
        });
    });
});
