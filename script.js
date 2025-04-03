document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chat2").addEventListener("click", function () {
        document.getElementById("chat-popup").style.display = "block";
    });

    document.getElementById("close-chat").addEventListener("click", function () {
        document.getElementById("chat-popup").style.display = "none";
    });

    document.getElementById("send-message").addEventListener("click", function () {
        let message = document.getElementById("chat-input").value;
        if (message.trim() !== "") {
            let chatMessages = document.getElementById("chat-messages");
            let userMsg = document.createElement("p");
            userMsg.textContent = "You: " + message;
            chatMessages.appendChild(userMsg);
            document.getElementById("chat-input").value = "";
        }
    });

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


    document.getElementById("search-btn").addEventListener("click", function () {
        let query = document.getElementById("search-input").value;
        alert("Searching for: " + query);
    });

    let cartCount = 0;
    const cartCounter = document.querySelector(".cart-count");

    document.querySelectorAll(".cart-button").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            if (cartCounter) cartCounter.textContent = cartCount;
        });
    });

    const cartButton2 = document.getElementById("cart-button2");
    if (cartButton2) {
        cartButton2.onclick = function () {
            cartCount++;
            if (cartCounter) cartCounter.textContent = cartCount;
        };
    }

    document.querySelector(".cart-btn").addEventListener("click", function () {
        alert("Cart clicked! Total items: " + cartCount);
    });

    function toggleMenu() {
        const mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.toggle("show");
        }
    }

    const see = document.getElementById("see");
    const say2 = document.getElementById("say2");
    
    if (see && say2) {
        see.onclick = function () {
            say2.style.display = "flex";
            this.style.display = "none";
        };
    }
});
