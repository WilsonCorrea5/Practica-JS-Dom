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

const productList = [];
productList.push({
    productName:'Tv',
    productPrice: 220,
    productimage: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function showerProducts(arrayProducts) {
  for (product of arrayProducts){
    const cardContainer = document.querySelector('.cards-container');
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.productimage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productClassLessDiv = document.createElement('div');
    const productPriceP = document.createElement('P');
    productPriceP.innerText = '$' + product.productPrice;
    
    const productNameP = document.createElement('P');
    productNameP.innerText = product.productName

    const productTagFigure = document.createElement('figure');

    const productImgcart = document.createElement('img');
    productImgcart.setAttribute('src', './icons/bt_add_to_cart.svg');  

    productTagFigure.appendChild(productImgcart);
    productClassLessDiv.append(productPriceP, productNameP);
    productInfo.append(productClassLessDiv, productTagFigure);
    productCard.append(imgProduct,productInfo);
    cardContainer.append(productCard);

}
  
}

showerProducts(productList);