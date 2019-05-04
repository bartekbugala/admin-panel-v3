const topHeader = document.querySelector('.top-header');
const aside = document.querySelector('aside');
const elements = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const mobileMenuWrapper = document.querySelector('.menu-wrapper');
const managerStatus = document.querySelector('.manager-status');
//const logo = document.querySelector('.logo');
//const menuSelectedMarked = document.getElementById(document.menuSelected);
/*document.querySelector('[id^="menu-item-"]').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});*/
/*function markSelectedInMenu() {
  menuSelectedMarked.classList.toggle('menu-selected', visible);

  document.getElementById("Element").classList.add/remove("Class")

}
markSelectedInMenu();*/

function toggleMenu(visible) {
  
function toggleClasses(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('section-show-menu', visible);
  }
}
    mobileMenuWrapper.classList.toggle('menu-wrapper-toggle', visible);
    topHeader.classList.toggle('top-header-show-menu', visible);
    managerStatus.classList.toggle('status-md', visible);
    managerStatus.classList.toggle('status-sm', visible);
    toggleClasses(elements);
 }

 hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    
});




 
