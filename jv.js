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

const protected1Items = document.querySelectorAll(".protected1");

protected1Items.forEach(item => {
    item.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "Donate.html";
    });
});

const protected2Items = document.querySelectorAll(".protected2");

protected2Items.forEach(item => {
    item.addEventListener("click", function(event){
            event.preventDefault();
            window.location.href = "Home.html";
    });
});

const loginButton = document.querySelectorAll(".loginButton");

loginButton.forEach(item => {
    item.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "Log.html";
    });
});