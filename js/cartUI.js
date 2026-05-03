import { clearCart } from "./cart.js";
import { renderCart } from "./ui.js";
export function initCartUI() {
  
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-cart');
const payBtn = document.getElementById('pay-btn');

 const  toggleCart =() =>{
    cartModal.classList.toggle('hidden');
  }
  cartBtn.addEventListener('click', toggleCart);
    if (closeBtn) {
  closeBtn.addEventListener('click', toggleCart)
  }
  if (payBtn) {
  payBtn.addEventListener('click', () => {

  clearCart();
  renderCart();
  updateCartCount();
  cartModal.classList.add('hidden');
}); 
}
}

