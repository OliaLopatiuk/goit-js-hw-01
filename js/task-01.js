const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const arr = [...list.children]

arr.forEach(item => console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.children.length}`));
