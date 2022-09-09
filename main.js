import { dataDB } from "./js/data.js";
import { printFood, printFoodInCart, cart } from "./js/layout.js";
import "./js/showCart.js";

const contentFood = document.querySelector(".content_food");
const contentCartBody = document.querySelector(".content_cart-body");

contentFood.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {
        const idFood = +e.target.parentElement.id;

        const findFood = dataDB.find((item) => item.id === idFood);

        if (cart[idFood]) {
            cart[idFood].amount++;
        } else {
            cart[idFood] = findFood;
            cart[idFood].amount = 1;
        }

        printFoodInCart(contentCartBody);
    }
});

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount--;
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount++;
    }

    if (e.target.classList.contains("bx-trash")) {
        const idFood = +e.target.parentElement.id;
        delete cart[idFood];
    }

    printFoodInCart(contentCartBody);
});

printFood(contentFood, dataDB);
