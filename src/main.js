function loadItems() {
    return fetch('src/data/data.json')  
      .then(response => response.json())
      .then(json => json.items);
  }
  
  function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
  }
  
  function createHTMLString(item) {
    return `
      <li class="items_item">
        <img src="${item.image}" alt="${item.type}" class="items_item_thumb">
        <span class="items_item_explain">${item.gender}, ${item.size}</span>
      </li>
    `;
  }
  
  // main
  loadItems()
    .then(items => {
      console.log(items);
      displayItems(items);
      //setEventListeners(items);
    })
    .catch(console.log);