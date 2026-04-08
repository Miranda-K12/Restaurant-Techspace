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
        <img src="${categories.strCategoryThumb}">
        <h3 class="card-title">${categories.strCategory}</h3>
        <p class="price">Price:<span class="price-info">$${priceInfo[index]}</span></p>
<button class="order-button">Order Now</button>
        `
      container.appendChild(div);
    })
  }
  catch (error){
    console.error("Error");
  }

}

getMenu();

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

