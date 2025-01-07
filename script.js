const products = [
  { id: 1, name: "levis shirt", price: 25, image: "images/product1.jpg" },
  { id: 2, name: "lee shirt", price: 30, image: "images/product2.jpg" },
  { id: 3, name: "shoes", price: 20, image: "images/product3.jpg" },
  { id: 4, name: "hat", price: 40, image: "images/product4.jpg" },
  { id: 5, name: "winter jacket", price: 50, image: "images/product5.jpg" },
  { id: 6, name: "Sunglasses", price: 35, image: "images/product6.jpg" },
  { id: 7, name: "Bag", price: 28, image: "images/product7.jpg" },
  { id: 8, name: "Watch", price: 33, image: "images/product8.jpg" },
  { id: 9, name: "Belt", price: 22, image: "images/product9.jpg" },
  { id: 10, name: "Scarf", price: 27, image: "images/product10.jpg" },
];

const productContainer = document.querySelector(".products");
const cartItems = document.querySelector("#cart-items");
const totalElement = document.querySelector("#total");
let cart = [];

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
  `;
  productContainer.appendChild(productDiv);
});

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
