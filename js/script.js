function toggleMenu(visible) {
  
  const elements = document.querySelectorAll('section');

function toggleClasses(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('section-show-menu', visible);
  }
}
    document.querySelector('aside').classList.toggle('show', visible);
    document.querySelector('.top-header').classList.toggle('top-header-show-menu', visible);
    toggleClasses(elements);



    //document.querySelector('section').classList.toggle('section-show-menu', visible);
  }

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});
