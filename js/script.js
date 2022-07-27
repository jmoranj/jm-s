let products = [
    {
        id: 0,
        name: 'Guitarra Fender Standard Stratocaster Mn Black',
        img: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-stratocaster-standard-fender-preto-black-06-68987/255470.jpg?w=800&h=800&v=no-change&qs=ignore",
        price: 8990,
    },
    {
        id: 1,
        name: 'Baixo Fender 4 Cordas Flea Signature Active Jazz Bass',
        img: "https://http2.mlstatic.com/D_NQ_NP_727879-MLB44646443986_012021-O.webp",
        price: 22950,
    },
    {
        id: 2,
        name: 'Contrabaixo MUSIC MAN Ativo 4 Cordas STING RAY RW Preto',
        img: "https://static.mundomax.com.br/produtos/55738/550/1.webp",
        price: 13850,
    },
    {
        id: 3,
        name: 'Guitarra Fender ROAD WORN 60 Jaguar® candy apple red',
        img: "https://http2.mlstatic.com/D_NQ_NP_530305-MLB25024204967_082016-O.webp",
        price: 9489,
    },
    {
        id: 4,
        name: 'Violao Lava Music Me Pro Carbon Space Grey',
        img: "https://http2.mlstatic.com/D_NQ_NP_783110-MLB49481118117_032022-O.webp",
        price: 18625,
    },
    {
        id: 5,
        name: 'Encordoamento Baixo Ernie Ball 4 Cordas 2834 Slinky 045 100',
        img: "https://photos.enjoei.com.br/encordoamento-ernie-ball-baixo-4-cordas-super-slink-045-71519125/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNzU5NTg0OS9kZWVjMDYwMzI3Zjc1MTk1ZjcxNjk0YzAxZGNlZDFkNS5qcGc",
        price: 200,
    },
    {
        id: 6,
        name: 'Gibson Slash Les Paul Standard Appetite Burst',
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsc9epdwCdntinIqjXOmKQmR5D0cUS2_k7KOYW_5D7eQ9DbyeJaYEWas6MumDM2TZmsDAtigzbBEOqFQQj71YDh1qWEXXPEw2V9Bql-5129cF4NSNuBXor&usqp=CAE",
        price: 13000,
    },
    {
        id: 7,
        name: 'Fender Kurt Cobain Jag-Stang, Sonic Blue',
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPTl1h-bDXWyUfQXqvQCenPDYZhPMkZB--Y6gD4kaSdnD5Md11IIHJj9Af1ypwdsa7-2mhFD1PHXYbGUFfIIr9mYSns-Y3EtsAZ6F92bfE&usqp=CAE",
        price: 6500,
    },
    {
        id: 8,
        name: 'Pedal MXR Analog Chorus - M234',
        img: "https://m.media-amazon.com/images/I/71RhdJN2YjL._AC_SX679_.jpg",
        price: 890,
    },
    {
        id: 9,
        name: "Amplificador tipo combo Fender '65 Twin Reverb American Vintage",
        img: "https://www.guitarshop.com.br/media/catalog/product/0/1/010014-01_4.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=642&width=643&canvas=643:642",
        price: 25239,
    },
    {
        id: 10,
        name: "Fender Sig Eric Clapton custom shop RELIC®",
        img: "https://www.fender.com.br/imgs/produtos/details/fender_10172380.png",
        price: 47140,
    },
    {
        id: 11,
        name: "Fender 56 STRATOCASTER® HEAVY RELIC® LTD EDITION",
        img: "https://www.fender.com.br/imgs/produtos/details/fender_10172614.png",
        price: 79356,
    },

];


function updateCartCounter() {
    let basket = document.getElementById('basket');
    let cart = getFromStorage('cart');
    console.log(cart);

    let counter = cart.length.toString();

    basket.innerHTML = counter;

};


function addToCart(productId) {
    let cart = getFromStorage('cart');
    let newCart = [];
    let cartProduct = { ...products[productId], quantity: 1 };
    if (cart == null) {
        newCart.push(cartProduct)
    } else {
        let hasInCart = cart.find((item, index) => {
            if (item.id === productId) {
                cart[index].quantity += 1;
                return true;
            }
        });
        newCart = hasInCart ? cart : [...cart, cartProduct];
    }
    saveInLocalStorage('cart', newCart);
    updateCartCounter();
};

function getFromStorage(key) {
    let value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
};

function saveInLocalStorage(key, value) {
    let strValue = JSON.stringify(value);

    localStorage.setItem(key, strValue)
}

function listProducts() {
    let container = document.querySelector('.products-list');

    let product = "";

    for (let i = 0; i < products.length; i++) {
        product += `
            <div key=${products[i].id} class="image">
                <img class="images" src=${products[i].img} alt=${products[i].tag} />
                <h3 class="name">${products[i].name}</h3>
                <h3 class="price">${(products[i].price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
                <button class="add-cart cart" onClick="addToCart(${products[i].id})" type="button">Add</button>
            </div>
        `;
    }

    container.innerHTML = product;
}




listProducts();
updateCartCounter();
