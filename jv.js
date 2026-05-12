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
