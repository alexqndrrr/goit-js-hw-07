'use strict';



const listItem = document.querySelectorAll('.item');
const listCategory = document.querySelectorAll('.category');

console.log(`Number of categories: ${listItem.length}`);



listItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.innerText}`);
    const numberOfCategories = item.lastElementChild.childElementCount;
    console.log(`Elements: ${numberOfCategories}`);
});

