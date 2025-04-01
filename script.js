document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search-input").value;
    alert("Searching for: " + query);
});


let cartCount = 0;
document.querySelector(".cart-btn").addEventListener("click", function() {
    alert("Cart clicked! Total items: " + cartCount);
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}






const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
});


closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});
