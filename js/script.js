const topHeader = document.querySelector('.top-header');
const aside = document.querySelector('aside');
const elements = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

function toggleMenu(visible) {
  
function toggleClasses(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('section-show-menu', visible);
  }
}
    aside.classList.toggle('show', visible);
    aside.classList.toggle('show-mobile-nav', visible);
    mobileMenuWrapper.classList.toggle('show-mobile-menu', visible);
    topHeader.classList.toggle('top-header-show-menu', visible);
    toggleClasses(elements);
 }

 hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    
});

