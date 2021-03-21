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