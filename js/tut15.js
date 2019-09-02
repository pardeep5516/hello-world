console.log('hello worlds');

let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
//console.log(cont.childNodes);
//console.log(cont.children);
let nodeName = cont.childNodes[1].nodeName;
nodeName = cont.childNodes[2].nodeType;
// console.log(nodeName);

//1element
//2Attribute
//3text node 
//8comment
//9document
//10doctype

let container = document.querySelector('div.container');
// console.log(container.children[1].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastElementChild);
// console.log(container.lastChild);
// console.log(container.children)
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);