document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("vhat2").addEventListener("click", function () {
        if (window.chatbase) {
          window.chatbase("toggleChat");
        }
      });
    

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


    const searchBtn = document.getElementById("search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            let query = document.getElementById("search-input").value;
            alert("Searching for: " + query);
        });
    }

    // Cart
    let cartCount1 = 0;
    const cartCounter = document.querySelector(".cart-count");

    document.querySelectorAll(".cart-button").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            if (cartCounter) cartCounter.textContent = cartCount1;
        });
    });

    const cartButton2 = document.getElementById("cart-button2");
    if (cartButton2) {
        cartButton2.onclick = function () {
            cartCount1++;
            if (cartCounter) cartCounter.textContent = cartCount1;
        };
    }

    const cartBtn = document.querySelector(".cart-btn");
    if (cartBtn) {
        cartBtn.addEventListener("click", function () {
            alert("Cart clicked! Total items: " + cartCount1);
        });
    }

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






const products = [
    {
        id: 1,
        name: "Light blue suit",
        gender: "female",
        age: "adult",
        price: 80000,
        size: ["small", "medium", "large"],
        image: "product1" // This will be used as a CSS class
    },
    {
        id: 2,
        name: "Dark blue suit",
        gender: "male",
        age: "adult",
        price: 85000,
        size: ["medium", "large"],
        image: "product2"
    },
    {
        id: 3,
        name: "Red dress",
        gender: "female",
        age: "adult",
        price: 75000,
        size: ["small", "medium"],
        image: "product3"
    },
    {
        id: 4,
        name: "Black jacket",
        gender: "male",
        age: "adult",
        price: 95000,
        size: ["medium", "large"],
        image: "product4"
    },
    {
        id: 5,
        name: "White shirt",
        gender: "male",
        age: "adult",
        price: 55000,
        size: ["small", "medium", "large"],
        image: "product1"
    },
    {
        id: 6,
        name: "Yellow dress",
        gender: "female",
        age: "adult",
        price: 78000,
        size: ["small", "medium"],
        image: "product2" 
    },
    {
        id: 7,
        name: "Green jumper",
        gender: "female",
        age: "children",
        price: 45000,
        size: ["small"],
        image: "product3"
    },
    {
        id: 8,
        name: "Blue jeans",
        gender: "male",
        age: "children",
        price: 40000,
        size: ["small", "medium"],
        image: "product4"
    },
  
];


const productsPerPage = 12;
let currentPage = 1;
let filteredProducts = [...products];

// Function to display products
function displayProducts(page = 1) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear existing products
    
    
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Get viewport width to determine products per row
    const viewportWidth = window.innerWidth;
    const productsPerRow = viewportWidth < 768 ? 1 : 4; // 2 products per row on mobile, 4 on desktop

    // Create rows of products based on viewport width
    for (let i = 0; i < paginatedProducts.length; i += productsPerRow) {
        const rowProducts = paginatedProducts.slice(i, i + productsPerRow);
        const row = document.createElement('section');
        row.className = 'secproduct1';
        
        rowProducts.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = `product${(index % productsPerRow) + 1} ${product.image} product-item`;
            
            productDiv.innerHTML = `
                <a href="details.html?id=${product.id}">
                    <div class="gotozoom">
                        <p class="zoom1">click to zoom</p>
                    </div>
                </a>
                <h3 class="name">${product.name}</h3>
                <section class="secdetail1">
                    <p><i>Gene: </i> ${product.gender}</p>
                    <p><i>Age: </i> ${product.age}</p>
                </section>
                <section class="price1">
                    <h3> MK ${product.price.toLocaleString()}</h3>
                    <img src="icons/cart.png" class="cart-button" data-product-id="${product.id}">
                </section>
            `;
            
            row.appendChild(productDiv);
        });
        
        container.appendChild(row);
    }
    
    // Update pagination
    updatePagination();
}



function handleResponsiveLayout() {
    const viewportWidth = window.innerWidth;
    const storeContainer = document.querySelector('.store');
    const filterSection = document.querySelector('.filter');
    const allProductSection = document.querySelector('.allproduct');
    
    if (viewportWidth < 768) {
        // Mobile layout - Filter on top
        storeContainer.style.flexDirection = 'column';
        filterSection.style.width = '100%';
        allProductSection.style.width = '100%';
        
        // Make filter collapsible on mobile
        const filterToggle = document.createElement('button');
        if (!document.querySelector('#filter-toggle')) {
            filterToggle.id = 'filter-toggle';
            filterToggle.textContent = 'Show/Hide Filters';
            filterToggle.className = 'filter-toggle-btn';
            
            // Insert the button before the filter content
            const filterTitle = document.querySelector('.fi');
            if (filterTitle && filterTitle.parentNode) {
                filterTitle.parentNode.insertBefore(filterToggle, filterTitle);
            }
            
            // Toggle filter visibility
            const filterContent = document.querySelector('.filter section');
            if (filterContent) {
                filterContent.style.display = 'none'; // Initially hidden on mobile
                
                filterToggle.addEventListener('click', function() {
                    filterContent.style.display = 
                        filterContent.style.display === 'none' ? 'block' : 'none';
                });
            }
        }
        
        // Make products display 2 per row
        document.querySelectorAll('.secproduct1').forEach(row => {
            row.style.display = 'flex';
            row.style.flexWrap = 'wrap';
            row.style.gap = '10px';
            row.style.justifyContent = 'space-between';
        });
        
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.width = 'calc(50% - 5px)'; // 2 products per row with a small gap
            product.style.marginBottom = '15px';
        });
    } else {
        // Desktop layout - Filter on side
        storeContainer.style.flexDirection = 'row';
        filterSection.style.width = '25%';
        allProductSection.style.width = '75%';
        
        // Remove mobile-only elements
        const filterToggle = document.querySelector('#filter-toggle');
        if (filterToggle) {
            filterToggle.remove();
        }
        
        // Show filter content in desktop view
        const filterContent = document.querySelector('.filter section');
        if (filterContent) {
            filterContent.style.display = 'block';
        }
        
        // Reset product layout for desktop
        document.querySelectorAll('.secproduct1').forEach(row => {
            row.style.display = '';
            row.style.flexWrap = '';
            row.style.gap = '';
            row.style.justifyContent = '';
        });
        
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.width = '';
            product.style.marginBottom = '';
        });
    }
}


// Function to update pagination
function updatePagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // Create simplified pagination (just show numbers)
    if (totalPages <= 6) {
        // Show all page numbers if 6 or fewer
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('p');
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayProducts(currentPage);
            });
            paginationDiv.appendChild(pageBtn);
        }
    } else {
        // Show first, current, and last pages with ellipsis
        // First page
        addPageButton(1);
        
        // Add ellipsis if needed
        if (currentPage > 3) {
            const ellipsis = document.createElement('p');
            ellipsis.textContent = '...';
            paginationDiv.appendChild(ellipsis);
        }
        
        // Pages around current page
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
            addPageButton(i);
        }
        
        // Add ellipsis if needed
        if (currentPage < totalPages - 2) {
            const ellipsis = document.createElement('p');
            ellipsis.textContent = '...';
            paginationDiv.appendChild(ellipsis);
        }
        
        // Last page
        if (totalPages > 1) {
            addPageButton(totalPages);
        }
    }
    
    function addPageButton(num) {
        const pageBtn = document.createElement('p');
        pageBtn.textContent = num;
        if (num === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.addEventListener('click', () => {
            currentPage = num;
            displayProducts(currentPage);
        });
        paginationDiv.appendChild(pageBtn);
    }
}

// Function to filter products
function filterProducts() {
    const activeFilters = {
        gender: [],
        age: [],
        size: []
    };
    
    // Get all checked filter checkboxes
    const checkedFilters = document.querySelectorAll('.filter-checkbox:checked');
    
    // Build activeFilters object
    checkedFilters.forEach(filter => {
        const filterType = filter.dataset.filter;
        const filterValue = filter.dataset.value;
        
        if (activeFilters[filterType]) {
            activeFilters[filterType].push(filterValue);
        }
    });
    
    // Apply filters
    filteredProducts = products.filter(product => {
        // Check gender filter
        if (activeFilters.gender.length > 0 && !activeFilters.gender.includes(product.gender)) {
            return false;
        }
        
        // Check age filter
        if (activeFilters.age.length > 0 && !activeFilters.age.includes(product.age)) {
            return false;
        }
        
        // Check size filter
        if (activeFilters.size.length > 0 && !activeFilters.size.some(size => product.size.includes(size))) {
            return false;
        }
        
        return true;
    });
    
    // Reset to first page and display filtered products
    currentPage = 1;
    displayProducts(currentPage);
}

// Add event listeners to filter checkboxes
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Add event listener to search input
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProducts = [...products]; // Reset to all products
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.gender.toLowerCase().includes(searchTerm) ||
            product.age.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayProducts(currentPage);
});

// Initialize cart functionality
function initCart() {
    // Cart data structure
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Add event delegation for cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cart-button')) {
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        }
    });
    
    // Add to cart function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (product) {
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show confirmation
            alert(`${product.name} added to cart!`);
        }
    }
    
    // Initialize cart count
    updateCartCount();
}

// Login modal functionality
function initLoginModal() {
    const modal = document.getElementById('loginModal');
    const btn = document.getElementById('loginBtn');
    const closeBtn = document.querySelector('.close');
    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Form submission
    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple check (in real application, this would be server-side)
        if (username === 'admin' && password === 'admin123') {
            alert('Login successful!');
            modal.style.display = "none";
            // Redirect to admin page or show admin controls
            // window.location.href = 'admin.html';
        } else {
            alert('Invalid login credentials');
        }
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    initCart();
    initLoginModal();
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
    }
}


 

