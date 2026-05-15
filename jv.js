document.addEventListener("DOMContentLoaded", () => {
    const accountMenu = document.getElementById("account-menu");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true" && accountMenu) {
        accountMenu.innerHTML = `
            <div class="nav-item dropdown" style="padding: 0; margin: 0;">
                Account
                <div class="dropdown-content">
                    <a href="#" id="logoutBtn">Log out</a>
                </div>
            </div>`;
        document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            alert("Log out!");
            window.location.reload();
        });
    }

    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.addEventListener("click", (e) => {
            const target = e.target.closest(".nav-item.dropdown");
            if (target) {
                const text = target.childNodes[0].textContent.trim();
                if (text === "Data Structures" || text === "Algorithms") {
                    if (localStorage.getItem("isLoggedIn") !== "true") {
                        e.preventDefault();
                        e.stopPropagation();
                        alert("You need to log in to view this content!");
                        window.location.href = "Log.html";
                    }
                }
            }
        }, true); 
    }
});
            
const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}); 