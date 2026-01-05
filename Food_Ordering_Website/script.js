let cart = {};

function addToCart(item, price) {
    if (cart[item]) {
        cart[item].quantity++;
    } else {
        cart[item] = {
            price: price,
            quantity: 1
        };
    }
    displayCart();
}

function removeFromCart(item) {
    cart[item].quantity--;
    if (cart[item].quantity === 0) {
        delete cart[item];
    }
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;

    for (let item in cart) {
        let itemTotal = cart[item].price * cart[item].quantity;
        total += itemTotal;

        cartDiv.innerHTML += `
            <p>
                ${item} - ₹${cart[item].price} × ${cart[item].quantity}
                <button onclick="addToCart('${item}', ${cart[item].price})">+</button>
                <button onclick="removeFromCart('${item}')">-</button>
            </p>
        `;
    }

    cartDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}
