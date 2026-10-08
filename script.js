const products = document.querySelectorAll(".product");

let selectedCoffee = {
    name: "Caffe Mocha",
    price: 4.53,
    image: "assets/mocha.jpg"
};

let quantity = 1;


/* PRODUCT SELECTION */

products.forEach(product => {

    product.addEventListener("click", event => {

        if (event.target.classList.contains("add")) {
            addToCart();
            return;
        }

        selectedCoffee = {
            name: product.dataset.name,
            price: Number(product.dataset.price),
            image: product.dataset.image
        };

        document.getElementById("detailName").textContent =
            selectedCoffee.name;

        document.getElementById("detailPrice").textContent =
            "$" + selectedCoffee.price.toFixed(2);

        document.getElementById("detailImage").src =
            selectedCoffee.image;

        document.getElementById("orderName").textContent =
            selectedCoffee.name;

        document.getElementById("orderImage").src =
            selectedCoffee.image;

        quantity = 1;

        document.getElementById("quantity").textContent =
            quantity;

        updatePrice();

        document.querySelector(".details-section")
            .scrollIntoView({ behavior: "smooth" });
    });

});


/* CART */

function addToCart() {

    const cart = document.getElementById("cartCount");

    cart.textContent =
        Number(cart.textContent) + 1;
}


/* BUY NOW */

document.getElementById("buyNow").addEventListener("click", () => {

    document.getElementById("order")
        .scrollIntoView({ behavior: "smooth" });

});


/* PLUS */

document.getElementById("plus").addEventListener("click", () => {

    quantity++;

    document.getElementById("quantity").textContent =
        quantity;

    updatePrice();
});


/* MINUS */

document.getElementById("minus").addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;
    }

    document.getElementById("quantity").textContent =
        quantity;

    updatePrice();
});


/* PRICE */

function updatePrice() {

    const total =
        selectedCoffee.price * quantity;

    document.getElementById("summaryPrice").textContent =
        "$" + total.toFixed(2);
}


/* ORDER */

document.getElementById("orderButton").addEventListener("click", () => {

    document.querySelector(".tracking-section")
        .scrollIntoView({ behavior: "smooth" });

});


/* CATEGORIES */

document.querySelectorAll(".category").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".category")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");
    });

});


/* SIZES */

document.querySelectorAll(".sizes button").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".sizes button")
            .forEach(item => item.classList.remove("selected"));

        button.classList.add("selected");
    });

});


/* DELIVERY TABS */

document.querySelectorAll(".delivery-switch button").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".delivery-switch button")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");
    });

});


/* INITIAL PRICE */

updatePrice();
