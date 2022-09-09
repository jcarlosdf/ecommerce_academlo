let cart = {};

function printFoodInCart(elementHTML) {
    let html = "";

    const arrayCart = Object.values(cart);

    arrayCart.forEach(({ id, name, urlImages, amount }) => {
        html += `
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <span id="amount">${amount}</span>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `;
    });

    elementHTML.innerHTML = html;
}
function printFood(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        html += `
        <div class="food">
            <div class="food__img">
                <img src="${urlImages}" alt="${name}">
            </div>
            <div class="food__body" id="${id}">
                <h2 class="food__body-title">${name}</h2>
                <p>precio: ${price}</p>
                <p>stock: ${stock}</p>
                <button class="btn btn__add">Agregar</button>
            </div>
        </div>
    `;
    });

    elementHTML.innerHTML = html;
}

export { printFoodInCart, printFood, cart };
