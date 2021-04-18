async function getData() {
    // get with read only credentials
    let headers = new Headers()
    headers.set('Authorization', 'Basic ' + btoa("ck_66e55f0ccb3a3f1989f17ad8ad80055c9d2847a4" + ":" + "cs_0f92785a3a441d22fca8f6d5c8486c8272eb05fb"));
    const response = await fetch("https://12u.ad6.myftpupload.com//wp-json/wc/v3/products/", {
        method:"GET",
        headers: headers
    })
    const data = await response.json()
    return data
}

const gameDiv = document.querySelector(".card")
const gameDiv2 = document.querySelector(".card2")
console.log(gameDiv)
let id = 1
getData().then(data => {
    for (let i = 0; i < data.length; i++){
        let game = data[i]
        const image = game.images[0].src
        const price = game.price + "€"
        const name = game.name
        let format = `
        <div >
            <a href="./gamesinfo.html?name=${name}&id=${id}">
                <img class="img"  src="${image}" alt="Buy ${name}">
            </a>
            <h2>${name}</h2>
            <h3>${price}</h3>
            <button type="submit" Class="Addtocart" id="${id}">Add to Cart</button>
        </div>`
        gameDiv.innerHTML += format
        id++
    };

    for (let i = 0; i < data.length; i++){
        let game = data[i]
        const image = game.images[0].src
        const price = game.price + "€"
        const name = game.name
        
        let format = `
        <div>
            <a href="./gamesinfo.html?name=${name}&id=${id}">
                <img class="img"  src="${image}" alt="Buy ${name}">
            </a>
            <h2>${name}</h2>
            <h3>${price}</h3>
            <button type="submit" Class="Addtocart" id="${id}">Add to Cart</button>
        </div>`
        id++
        gameDiv2.innerHTML += format
    };
        
    for (var i = 1; i <= 20; i++) {
        document.getElementById(i).addEventListener("click", (event) => {
            var amount = 1
            var item = []
            var id = event.toElement.attributes.id.value
            var textInnerHTML = event.path[1].innerText.split("\n")
            var name = textInnerHTML[0]
            var price = textInnerHTML[1]
            item.push(price, name, amount)
            add2cart(id, item)
        });
    }


    function add2cart(id, object) {
        var storage = window.localStorage.getItem(id)
        if(!storage) return localStorage.setItem(id, object)
        var updatedItem = []
        storage = storage.split(",")
        newAmount = parseInt(storage[2]) + 1
        localStorage.removeItem(id)
        updatedItem.push(storage[0], storage[1], newAmount)
        localStorage.setItem(id, updatedItem)
        return location.reload()
    }
});
