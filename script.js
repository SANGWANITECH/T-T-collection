document.addEventListener("DOMContentLoaded", function () {

    // Chat Popup
    const chatBtn = document.getElementById("chat2");
    const chatPopup = document.getElementById("chat-popup");
    const closeChat = document.getElementById("close-chat");
    const sendMessage = document.getElementById("send-message");

    if (chatBtn && chatPopup && closeChat) {
        chatBtn.addEventListener("click", function () {
            chatPopup.style.display = "block";
        });

        closeChat.addEventListener("click", function () {
            chatPopup.style.display = "none";
        });

        if (sendMessage) {
            sendMessage.addEventListener("click", function () {
                let message = document.getElementById("chat-input").value;
                if (message.trim() !== "") {
                    let chatMessages = document.getElementById("chat-messages");
                    let userMsg = document.createElement("p");
                    userMsg.textContent = "You: " + message;
                    chatMessages.appendChild(userMsg);
                    document.getElementById("chat-input").value = "";
                }
            });
        }
    }

    // Login Modal
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");

    if (loginBtn && loginModal && closeBtn) {
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
    }

    // Search
    const searchBtn = document.getElementById("search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            let query = document.getElementById("search-input").value;
            alert("Searching for: " + query);
        });
    }

    // Cart
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

    const cartBtn = document.querySelector(".cart-btn");
    if (cartBtn) {
        cartBtn.addEventListener("click", function () {
            alert("Cart clicked! Total items: " + cartCount);
        });
    }

    // Mobile Menu Toggle
    function toggleMenu() {
        const mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.toggle("show");
        }
    }

    // "See More" Section
    const see = document.getElementById("see");
    const say2 = document.getElementById("say2");

    if (see && say2) {
        see.onclick = function () {
            say2.style.display = "flex";
            this.style.display = "none";
        };
    }

});
