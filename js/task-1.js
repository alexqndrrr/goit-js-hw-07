'use strict';



const listItem = document.querySelectorAll('.item')

console.log(`Number of categories: ${listItem.length}`);



listItem.forEach((item) => {
    console.log(`Category: ${item.innerHTML}`);
});

