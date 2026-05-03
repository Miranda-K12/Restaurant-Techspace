export function initNav() {
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
}