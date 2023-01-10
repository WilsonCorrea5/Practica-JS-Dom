const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenuRight)

function toggleMenuRight() {
    desktopMenu.classList.toggle('inactive');
    
}