const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuMobileBurg = document.querySelector('.mobileBurgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail')

menuEmail.addEventListener('click', showMenuUser);
menuMobileBurg.addEventListener('click', showMenuMobile);
menuShoppingCart.addEventListener('click', showMenuMyOrder);

function showMenuUser() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
}

function showMenuMobile() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
}

function showMenuMyOrder() {
    asideShoppingCart.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}   