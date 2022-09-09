import { dataDB } from "./js/data.js";
import { printFood, printFoodInCart, cart } from "./js/layout.js";
import "./js/showCart.js";

const contentFood = document.querySelector(".content_food");
const contentCartBody = document.querySelector(".content_cart-body");
const total = document.querySelector(".checkout");

contentFood.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {
        const idFood = +e.target.parentElement.id;
        
        const findFood = dataDB.find((item) => item.id === idFood);
        // si el item ya existe sumalo, si no agregalo
        console.log(findFood);
        if (cart[idFood]) {
            cart[idFood].amount++;
            total.innerHTML = +total.innerHTML+(cart[idFood].price);
        } else {
            cart[idFood] = findFood;
            cart[idFood].amount = 1;
            total.innerHTML = +total.innerHTML+(cart[idFood].price);
        }
        
        //Detecta si hay stock disponible
        if(cart[idFood].amount > cart[idFood].stock  ){
            alert("No hay mas stock");
            cart[idFood].amount--;
        }

        printFoodInCart(contentCartBody);
    }
});

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount--;
        total -= cart[idFood].price;
        total.innerHTML = +total.innerHTML-(cart[idFood].price);
        if(cart[idFood].amount < 1){
            alert("Cantidad minima para ordenar 1");
            cart[idFood].amount++;
        }
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount++;
        total.innerHTML = +total.innerHTML+(cart[idFood].price);
        if(cart[idFood].amount > cart[idFood].stock  ){
            alert("No hay mas stock, no insista");
            cart[idFood].amount--;
        }
    }

    if (e.target.classList.contains("bx-trash")) {
        const idFood = +e.target.parentElement.id;
        total.innerHTML = +total.innerHTML-(cart[idFood].amount) * (cart[idFood].price);
        delete cart[idFood];
    }

    printFoodInCart(contentCartBody);
});

printFood(contentFood, dataDB);
