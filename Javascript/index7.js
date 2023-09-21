const btn = document.getElementById('add-btn');
const list = document.getElementById('list-wrapper');
btn.addEventListener('mousedown', function () {
    const newList = document.createElement('li');
    newList.appendChild(document.createTextNode('List Item '+(list.childElementCount+1)));
    newList.id = "item"+list.childElementCount;
    list.appendChild(newList);
 }); 