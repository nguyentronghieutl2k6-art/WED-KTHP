document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const accountMenu = document.getElementById("account-menu");

    if (isLoggedIn === "true") {
        accountMenu.innerHTML = `
            <div class="nav-item dropdown" style="padding: 0; margin: 0;">
                Account
                <div class="dropdown-content">
                    <a href="#" id="logoutBtn">Đăng xuất</a>
                </div>
            </div>
        `;

        document.getElementById("logoutBtn").addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            alert("Đã đăng xuất thành công!");
            window.location.reload();
        });
    }

    const dropdowns = document.querySelectorAll(".navbar .nav-item.dropdown");

    dropdowns.forEach(dropdown => {
        const menuText = dropdown.childNodes[0].textContent.trim();
        
        if (menuText === "Data Structures" || menuText === "Algorithms") {
            dropdown.addEventListener("click", (e) => {
                if (isLoggedIn !== "true") {
                    e.stopPropagation(); 
                    e.preventDefault();
                    
                    alert("Bạn cần phải đăng nhập tài khoản để truy cập nội dung này!");
                    window.location.href = "Log.html";
                }
            });
        }
    });

    const authButtons = document.querySelectorAll(".requires-auth");

    authButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (isLoggedIn === "true") {
                const targetUrl = this.getAttribute("data-url");
                window.location.href = targetUrl;
            } else {
                alert("Bạn phải đăng nhập để vào học khóa Arrays hoặc Linked list!");
                window.location.href = "Log.html";
            }
        });
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

const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});