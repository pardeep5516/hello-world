console.log("hello world");

//?element selector
//?single selector
//?multiple element selector

//?single selector
let element = document.getElementById("first");

// let element = document.getElementsByClassName("child");
// element = element.childNodes[0];
// element = element.parentNode;
// element.style.color = 'cyan';
element.style.background = 'cyan';
element.innerText = "hello";
element.innerHTML = "<b>hello Alex</b>"
console.log(element.innerHTML);

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('div');
sel.style.color = 'tomato';
// console.log(sel);

//?multi element selector
let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('child'));
// console.log(elems);
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = '#888888';
});