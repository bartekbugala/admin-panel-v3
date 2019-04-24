function toggleMenu(visible) {
    document.querySelector('aside').classList.toggle('show', visible);
    document.querySelector('section').classList.toggle('section-show-menu', visible);
    document.querySelector('.top-header').classList.toggle('top-header-show-menu', visible);
  }

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});
