const openCart = document.querySelector(".shop-bag");
const closeCart = document.querySelector(".close-btn");
const foodCont = document.querySelector(".food-container");
const foodList = document.querySelector(".food-list");
const totalSpend = document.querySelector(".total");
const quantProd = document.querySelector(".shop-bag-counter");
const body = document.querySelector("body");

openCart.addEventListener("click", ()=>{
    body.classList.add("active");
})

closeCart.addEventListener("click", ()=>{
    body.classList.remove("active");
})

const products = [
    {
        id: 1,
        name: "PRODUCT NUMBER ONE",
        img: "images/1.png",
        price: 30.00,
    },
    {
        id: 2,
        name: "FRANGUINHO DUCO",
        img: "images/2.png",
        price: 35.00,
    },
    {
        id: 3,
        name: "PRODUCT NUMBER THREE",
        img: "images/3.png",
        price: 40.00,
    },
    {
        id: 4,
        name: "PRODUCT NUMBER FOUR",
        img: "images/4.png",
        price: 27.00,
    },
    {
        id: 5,
        name: "PRODUCT NUMBER FIVE",
        img: "images/5.png",
        price: 32.00,
    },
    {
        id: 6,
        name: "PRODUCT NUMBER SIX",
        img: "images/6.png",
        price: 50.00,
    }
];

let listCarts = [];

function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="${value.img}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</div>
            <button onclick="addToCart(${key})">ADD TO CART</button>
        `;
        foodCont.appendChild(newDiv);
    })
}
initApp();
