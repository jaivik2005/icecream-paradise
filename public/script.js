// Cart functionality for Ice Cream Paradise

let cart = [];
let selectedTable = 1;

// Add item to cart
function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    
    updateCartDisplay();
}

// Update selected table
function updateSelectedTable() {
    selectedTable = parseInt(document.getElementById('table-select').value);
}

// Remove item from cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
}

// Update quantity
function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const floatingCount = document.getElementById('floating-count');
    const cartTotal = document.getElementById('cart-total');
    
    // Update counts
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    floatingCount.textContent = totalItems;
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total}`;
    
    // Update cart items list
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty!</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>₹${item.price} each</span>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart('${item.name}')">🗑️</button>
                </div>
            </div>
        `).join('');
    }
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}

// Place order
async function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const order = {
        tableNumber: selectedTable,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    try {
        const response = await fetch('/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });

        const result = await response.json();

        // Show success modal
        document.getElementById('order-number').textContent = result.order._id.substring(result.order._id.length - 6);
        document.getElementById('order-table').textContent = `Table ${result.order.tableNumber}`;
        document.getElementById('order-modal').classList.add('active');

        // Clear cart
        cart = [];
        updateCartDisplay();
        toggleCart();

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to place order. Please try again!');
    }
}

// Close modal
function closeModal() {
    document.getElementById('order-modal').classList.remove('active');
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.querySelector('.cart-icon');
    const floatingCart = document.getElementById('floating-cart');
    
    if (cartSidebar.classList.contains('active') &&
        !cartSidebar.contains(event.target) &&
        !cartIcon.contains(event.target) &&
        !floatingCart.contains(event.target)) {
        toggleCart();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        toggleCart();
    }
});

