let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let card = document.querySelector('.card')

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');

})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');

})
body.style.overflowX = "hidden";


let products = [
    {
        id: 0,
        image: './imgg/xbox_series_s-removebg-preview.png',
        name: 'XBOX Series S',
        price: 120,
    },
    {
        id: 1,
        image: './imgg/XBOX_SERIES_X-removebg-preview.png',
        name: 'XBOX SERIES X',
        price: 60,
    },
    {
        id: 2,
        image: './imgg/xbox_series_consoles-removebg-preview.png',
        name: 'XBOX SERIES CONSOLES',
        price: 230,
    },
    {
        id: 3,
        image: './imgg/XBOXCONSOLES.PNG',
        name: 'XBOX  Newest Consoles',
        price: 100,
    },
    // Microsoft products
    {
        id: 4,
        image: './imgg/xbox_series_s-removebg-preview.png',
        name: 'XBOX Series S',
        price: 120,
    },
    {
        id: 5,
        image: './imgg/XBOX_SERIES_X-removebg-preview.png',
        name: 'XBOX SERIES X',
        price: 60,
    },
    {
        id: 6,
        image: './imgg/xbox_series_consoles-removebg-preview.png',
        name: 'XBOX SERIES CONSOLES',
        price: 230,
    },
    {
        id: 7,
        image: './imgg/XBOXCONSOLES.PNG',
        name: 'XBOX  Newest Consoles',
        price: 100,
    },
    {
        id: 4,
        image: './imgg/xbox_series_s-removebg-preview.png',
        name: 'XBOX Series S',
        price: 120,
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// checkOut
function CheckOut(){
    alert("Your order is confirm")
  
}

// hamburger button

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

