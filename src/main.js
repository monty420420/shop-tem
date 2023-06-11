function loadItems(){
    return fetch('src/data/data.json')  //fetch함수 이용해서 데이터 받아오기
    .then(response => response.json()) //성공적으로 받아왔으면 json으로 변환
    .then(json=> json.items);
}


loadItems()
.then(items => {
    console.log(items);
    // displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);