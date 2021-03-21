var shoppingcart = document.querySelector(".shoppingcart");
var totalPrice = 0;
var totalAmount = 0;
for (var i = 1; i <= 100; i++) {
    var item = window.localStorage.getItem(i);
    if (item === null) continue
    item = item.split(",");
    var price = item[0];
    var name = item[1];
    var amount = item[2];
    var cartcontent = "";
    var price = parseFloat(price) * parseFloat(amount);
    totalPrice += parseFloat(price);
    cartcontent += `<div class="shoppingcartcontent" id="${i}">
                        <h3> ${name}</h3>
                    </div>
                    <div class="qtycontent" id="${i}">
                        <button id="decreaseButton${i}">-</button> ${amount} <button id="increaseButton${i}">+</button> 
                    </div>
                    <div class="cartcontentprice" id="${i}">
                        ${price.toFixed(2)}€
                    </div>`

    shoppingcart.innerHTML += cartcontent;
}
shoppingcart.innerHTML += `<div class="shoppingcartcontenttotalprice">
                                <h2>Total: ${totalPrice.toFixed(2)}€</h2>
                            </div>`

var storage = window.localStorage.getItem(1);


for (let i = 1; i <= 100; i++) {
    var check = document.getElementById(`increaseButton${i}`);
    if (!check) continue;
    document.getElementById(`increaseButton${i}`).addEventListener("click", (event) => {
        storage = window.localStorage.getItem(i);
        storage = storage.split(",");
        var newItem = []
        var price = storage[0]
        var name = storage[1]
        var amount = storage[2]
        amount = parseInt(amount) + 1
        newItem.push(price, name, amount);
        window.localStorage.removeItem(i);
        window.localStorage.setItem(i, newItem);
        location.reload();
    });
}

for (let i = 1; i <= 100; i++) {
    var check = document.getElementById(`decreaseButton${i}`)
    if (!check) continue
    document.getElementById(`decreaseButton${i}`).addEventListener("click", (event) => {
        storage = window.localStorage.getItem(i)
        storage = storage.split(",")
        var newItem = []
        var price = storage[0]
        var name = storage[1]
        var amount = storage[2]
        if (parseInt(amount) <= 1) {
            console.log("Cleared item")
            window.localStorage.removeItem(i)
            return location.reload()
        }
        amount = parseInt(amount) - 1
        newItem.push(price, name, amount);
        window.localStorage.removeItem(i);
        window.localStorage.setItem(i, newItem);
        location.reload();
    });
}
