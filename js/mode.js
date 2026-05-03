export function initMode() {
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
}