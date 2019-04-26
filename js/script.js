const topHeader = document.querySelector('.top-header');
const aside = document.querySelector('aside');
const elements = document.querySelectorAll('section');

function toggleMenu(visible) {
  
function toggleClasses(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('section-show-menu', visible);
  }
}
    document.querySelector('aside').classList.toggle('show', visible);
    document.querySelector('.top-header').classList.toggle('top-header-show-menu', visible);
    toggleClasses(elements);
    


 }

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    
});


if (document.documentElement.clientWidth < 767) {
  aside.appendChild(topHeader);
}
if (document.documentElement.clientWidth <= 767) {
  aside.parentNode.insertBefore(topHeader, aside.nextSibling);
}

