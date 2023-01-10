const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuMobileBurg = document.querySelector('.mobileBurgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleMenuRight)
menuMobileBurg.addEventListener('click', toggleMenuLeft)

function toggleMenuRight() {
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMenuLeft() {
    mobileMenu.classList.toggle('inactive');
    
}