function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json=> console.log(json))
}


loadItems()
.then(items => {
    // displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);