function getFromStorage(key) {
  let value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};

function saveInLocalStorage(key, value) {
  let strValue = JSON.stringify(value);

  localStorage.setItem(key, strValue)
}

function getTotal() {
  let totalText = document.querySelector('.total')
  console.log(totalText);

  let total = 0;
  let cart = getFromStorage('cart');

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  let formatted = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  console.log(total);
  totalText.innerHTML = formatted;
  localStorage.removeItem('cart');
}

getTotal();
