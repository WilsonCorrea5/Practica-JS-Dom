//Open and close user menu (Nav Menu on EmailUser). Toggle.
const userMenuOnEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
userMenuOnEmail.addEventListener('click', showMenuUser);
function showMenuUser() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
}

//Open and close mobile menu (Nav Hamburger Menu). Toggle.
const menuMobileBurg = document.querySelector('.mobileBurgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
menuMobileBurg.addEventListener('click', showMenuMobile);
function showMenuMobile() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
}

//Open and close my order menu (Shopping cart). Toggle.
const asideShoppingCart = document.querySelector('#myOrderContainer');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
menuShoppingCart.addEventListener('click', showMenuMyOrder);
function showMenuMyOrder() {
    asideShoppingCart.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
}   

//open product details.
const asideProductDetail = document.querySelector('#productDetail');
function openProductDetail() {
  asideProductDetail.classList.remove('inactive');
  asideShoppingCart.classList.add('inactive');
  mobileMenu.classList.add('inactive');



}

//close product details.
const iconCloseAsideProductDetail = document.querySelector('.product-detail-close');
iconCloseAsideProductDetail.addEventListener('click', closeProductDetail);
function closeProductDetail() {
  asideProductDetail.classList.add('inactive');
}

// array products container.
const productList = [];
productList.push({
    productName:'Tv',
    productPrice: 220,
    productimage: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  productName:'Pc',
  productPrice: 220,
  productimage: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  productName:'bike',
  productPrice: 220,
  productimage: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//Function for showing products sent to array products.
function showerProducts(arrayProducts) {
  for (product of arrayProducts){
    const cardContainer = document.querySelector('.cards-container');
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.productimage);
    imgProduct.addEventListener('click', openProductDetail);

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