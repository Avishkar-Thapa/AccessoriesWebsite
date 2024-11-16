// Array to hold cart items
const cart = [];

// Add to Cart Function
function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} has been added to your cart!`);
    console.log(cart); // For debugging purposes
}

// Add event listeners to all Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.textContent;
        addToCart(productName);
    });
});

// Search Functionality

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    let hasResults = false;

    products.forEach((product) => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'inline-block'; // Show matching products
            hasResults = true;
        } else {
            product.style.display = 'none'; // Hide non-matching products
        }
    });

    // Display a "no results" message if no products match
    if (!hasResults) {
        alert("No products found!");
    }
}
