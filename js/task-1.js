'use strict';
const categories = Array.from(document.querySelector('#categories').children);
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
