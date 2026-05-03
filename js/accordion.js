//Accordion
export function initAccordion() {
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
}




