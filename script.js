


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
document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search-input").value;
    alert("Searching for: " + query);
});


let cartCount = 0;

document.querySelectorAll(".cart-button").forEach(button => {
    button.addEventListener("click", function() {
        cartCount++;

        
        document.querySelector(".cart-count").textContent = cartCount;
    });
});

document.getElementById("cart-button2").onclick = function(){
    cartCount++;

        
    document.querySelector(".cart-count").textContent = cartCount;  
}


document.querySelector(".cart-btn").addEventListener("click", function() {
    alert("Cart clicked! Total items: " + cartCount);
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}




const see2 = document.getElementById("say2");
document.getElementById("see").onclick = function(){


    say2.style.display = "flex"

    document.getElementById("see").style.display = "none";
}

 



