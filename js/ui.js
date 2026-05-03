import { addToCart, removeFromCart, getTotalPrice, getCart } from "./cart.js";

export function renderMenu(data, priceInfo) {
  let container = document.getElementById("categories");
  if (!container) return;
  container.innerHTML = '';
  data.forEach((item, index) => {
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML =       `
        <img src="${item.strCategoryThumb}" alt='food-image'>
        <h3 class="card-title">${item.strCategory}</h3>
        <p class="price">Price:<span class="price-info">$${priceInfo[index]}</span></p>
<button class="order-button">Order Now</button>
        `
      let button = div.querySelector('.order-button');
      button.addEventListener("click", ()=> {
        addToCart(item.strCategory, priceInfo[index]);
        renderCart();
        updateCartCount();
      })
      container.appendChild(div);
    })
}
  

export function renderCart() {
  const cartItems = document.getElementById('cart-items');
  if (!cartItems) return;
  cartItems.innerHTML = '';

  // li შექმნა
  getCart().forEach((item, index) => {
    let li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div>
      <span>${item.name}</span> - $${item.price}
      </div>
      <button class="remove-btn">
        <i class="fa-solid fa-rectangle-xmark"></i>
      </button>
    `;
    li.querySelector('button').addEventListener('click', () => {
      removeFromCart(index);
      renderCart();
      updateCartCount()
})
  
    cartItems.appendChild(li);
  });
  let total = document.getElementById('cart-total');
  if (!total) {
    total = document.createElement('h3');
    total.id = 'cart-total';
    document.getElementById('cart-modal').appendChild(total);
  }
    total.textContent = 'Total: $' + getTotalPrice().toFixed(2);
}
  
export function updateCartCount(){
  const el = document.querySelector('.cart-count');
  if (el) el.textContent = getCart().length; 
}