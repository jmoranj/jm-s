function getFromStorage(key){
    let value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
};

function saveInLocalStorage(key, value){
    let strValue = JSON.stringify(value);

    localStorage.setItem(key, strValue)   
}

function cartProductsList(){
    let container = document.querySelector('.cart-products-list');
    console.log(container);
    let product = "";

    let cart = getFromStorage('cart');

    for (let i = 0; i < cart.length; i++){
        product += `
        <div key=${cart[i].id} class="image">
                <img src=${cart[i].img} alt=${cart[i].tag} />
                <h3 class="name">${cart[i].name}</h3>
                <h3 class="price">${cart[i].price}</h3>
            </div>
        `;
    }

    container.innerHTML = product;

}

cartProductsList();