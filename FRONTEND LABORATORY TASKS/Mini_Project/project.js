
// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 2499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 4,
        name: "Digital Camera",
        price: 5999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 5,
        name: "Laptop",
        price: 45999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 6,
        name: "Sunglasses",
        price: 999,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 7,
        name: "Backpack",
        price: 1299,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        price: 1799,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    }
];

// Shopping cart
let cart = [];

// Get product container
const productContainer = document.getElementById("product-container");

// Display products
function displayProducts(items) {

    productContainer.innerHTML = "";

    items.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);

    });
}

// Add product to cart
function addToCart(productId) {

    const selectedProduct = products.find(
        product => product.id === productId
    );

    cart.push(selectedProduct);

    updateCart();

    alert(selectedProduct.name + " added to cart!");
}


// Update cart and display items
function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
    }

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <h4>${product.name}</h4>

                <p>₹${product.price}</p>

                <button onclick="removeFromCart(${index})"
                    class="remove-btn">
                    Remove
                </button>

            </div>
        `;

    });

    document.getElementById("cart-total").innerText =
        "Total: ₹" + total;

}

// Remove product from cart
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Search functionality
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("input", function() {

    const searchValue = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);

});

// Initial display
displayProducts(products);
