var totalAmount = 0
for(let i = 0; i < 100; i++) {
    var amount = localStorage.getItem(i)
    if(!amount) continue
    amount = amount.split(",")
    totalAmount += parseInt(amount[2])
}
var topbar = document.getElementsByClassName("nav-links")
topbar[0].innerHTML += `<li><a href="cart.html">Cart (${totalAmount})</a></li>`