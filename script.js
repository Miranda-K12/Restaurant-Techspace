/*https://www.themealdb.com/api/json/v1/1/categories.php  */
const priceInfo = ["12.00", "15.50", "20.90", "26.50", "18.20",
  "13.90", "19.60",  "17.50", "12.90",  "22.00", "15.60", "18.00"]

async function getMenu() {
  try {
    let response = await
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data = await response.json();
  // console.log(data)
    let container = document.getElementById("categories");
    let filtered = data.categories.filter(categories =>
      !["Chicken", "Goat"].includes(categories.strCategory)
    );
    filtered.forEach((categories, index) => {
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML =       `
        <img src="${categories.strCategoryThumb}" alt='food-image'>
        <h3 class="card-title">${categories.strCategory}</h3>
        <p class="price">Price:<span class="price-info">$${priceInfo[index]}</span></p>
<button class="order-button">Order Now</button>
        `
      let button = div.querySelector('.order-button');
      button.addEventListener("click", ()=> {
        addToCart(categories.strCategory, priceInfo[index]);
   
      })
      container.appendChild(div);
    })
  }
  catch (error){
   // console.error("Error");
  }

}
getMenu();


let cart = JSON.parse(localStorage.getItem('cart')) || [];

//კალათაში დამატება
function addToCart(name, price) {
  cart.push({ name, price: Number(price) })
  saveCart();
  UpdateCartCount();
  renderCart();
}


//დასეივება
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
//update cart count
function UpdateCartCount() {
document.querySelector('.cart-count').textContent = cart.length;
}

//პროდუქტის ფასის ჯამური რაოდენობა
function getTotalPrice(){
  return cart.reduce((sum, item) => 
    sum + Number(item.price), 0)
};
  
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  // li შექმნა
  cart.forEach((item, index) => {
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

    // წაშლის ფუნქციონალი
    let btn = li.querySelector('.remove-btn');
    btn.addEventListener('click', () => {
      removeFromCart(index);
    });

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


  // ელემენტის წაშლა
  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    UpdateCartCount();
    renderCart();
  }
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-cart');
const payBtn = document.getElementById('pay-btn');

  function toggleCart() {
    cartModal.classList.toggle('hidden');

  }
  cartBtn.addEventListener('click', toggleCart);

  if (closeBtn) {
  closeBtn.addEventListener('click', toggleCart)
  }

payBtn.addEventListener('click', () => {
  cart = [];
  saveCart();
  UpdateCartCount();
  renderCart();
  cartModal.classList.add('hidden');
}); 
UpdateCartCount();
renderCart();


//nav-menu
const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navlinks.classList.remove('active');
  });
});

//Search 
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  let value = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const ProductName = card.querySelector('.card-title').textContent.toLowerCase();
    if (ProductName.includes(value)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
})

//dark-light mode
const modeBtn = document.querySelector('.mode-toggle');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

const icon = document.querySelector('.dark-light');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun')
  }
  else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
})

//Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-questions');
  question.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      faqItems.forEach(p => 
        p.classList.remove('active'))
      item.classList.add('active');
      }
  })
})


