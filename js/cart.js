
let cart = JSON.parse(localStorage.getItem('cart')) || [];
export function addToCart(name, price) {
  cart.push({ name, price: Number(price) })
  saveCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}
 export  function getTotalPrice(){
  return cart.reduce((sum, item) => 
    sum + Number(item.price), 0)
};
export function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function clearCart() {
  cart = [];
  saveCart();
}
export function getCart() {
  return cart;
}