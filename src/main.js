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
  
  // onButtonClick 함수는 버튼을 클릭할 때 호출. 클릭된 버튼의 data-key와 data-value 값을 가져옵니다. 이 함수에서는 items 배열을 필터링하여 일치하는 조건을 가진 항목만 남기고, displayItems 함수를 호출하여 필터링된 항목을 표시.
  function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = event.target.dataset.key;
    //console.log(key); 
    const value = event.target.dataset.value; // 클릭된 버튼의 data-value 값 가져오기
    //console.log(value); 
    const target = event.target;
    // console.log(target);
    //console.log(items)
    if (key == null || value == null) {
      return;
    }
    // console.log(items);
    const filterd = items.filter(item => item[key] === value);
    // console.log(filterd);
    displayItems(filterd);
  }
  
  function setEventListeners(items) {
    const buttons = document.querySelector('.btn');
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', ()=> displayItems(items));
    buttons.addEventListener('click', (event) => onButtonClick(event, items));
  }
  
  // main
  loadItems()
    .then(items => {
      displayItems(items);
      setEventListeners(items);
    })
    .catch(console.log);