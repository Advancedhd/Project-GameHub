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

getData().then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const name = urlParams.get('name');
    let infocard = document.querySelector(".infocard")
    for (let i = 0; i < data.length; i++){
        let game = data[i]
        const title = game.name
        if (title === name) {
            const image = game.images[0].src
            const price = game.price + "€"
            const ldesc = game.description
            const sdesc = game.short_description
            let format = `
                <div class="title">
                    <h1>${name}</h1>
                </div>
                <div class="image">
                    <img src="${image}" alt="This game is" width="300px" height="400px"><img>
                </div>
                <div class="longdesc">
                ${ldesc}
                    <h3>Price: ${price}</h3>
                    <button type="submit" Class="Addtocart" id="${id}">Add to Cart</button>
                </div>
                <div class="shortdesc">
                ${sdesc}
                </div>
                <div class="buyinfoscreen">
                </div>
            `
            infocard.innerHTML = format

            document.getElementById(id).addEventListener("click", (event) => {
                var amount = 1
                var item = []
                item.push(price, name, amount)
                add2cart(id, item)
            });
        }
    };
});

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
