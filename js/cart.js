var container = document.querySelector('.cart-products-list');
var pagarContainer = document.querySelector('.pagar')

function getFromStorage(key) {
    let value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
};

function saveInLocalStorage(key, value) {
    let strValue = JSON.stringify(value);

    localStorage.setItem(key, strValue)
}

function hasCart() {
    let cart = getFromStorage('cart');
    if (cart === null) {
        container.innerHTML = `<h1>O carrinho está vazio!</h1>`
    } else {
        pagarContainer.innerHTML = `<a href="./pix.html">Pay</a>`
        cartProductsList();
    }


}

function cartProductsList() {

    console.log(container);
    let product = "";

    let cart = getFromStorage('cart');

    for (let i = 0; i < cart.length; i++) {
        product += `
        <div key=${cart[i].id} class="image">
                <img class="images" src=${cart[i].img} alt=${cart[i].tag} />
                <h3 class="name">${cart[i].name}</h3>
                <h3 class="price">${(cart[i].price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
                <h3 class="quantity">Quantidade: ${cart[i].quantity}</h3>
                <h3 class="total">subtotal: ${(cart[i].quantity * cart[i].price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
            </div>
        `;
    }

    container.innerHTML = product;

}

hasCart();
