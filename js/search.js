export function initSearch() {
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

}