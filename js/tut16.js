console.log('hello java');
//create html element
let element = document.createElement('li');
let text = document.createTextNode('I am text node ');
element.appendChild(text)//add a class name

element.className = 'child1';
element.id = 'create_li';
element.setAttribute('title', 'my_title');
// element.innerText = "hello this is created by alex";
// element.innerHTML = "<b>hello this is created by alex</b>";
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

let lem2 = document.createElement('h3');
lem2.id = 'lem2';
lem2.className = 'lem2';
let tNode = document.createTextNode('this is created nod for lem2 ');
lem2.appendChild(tNode);

element.replaceWith(lem2);

let my_ul = document.querySelector('#my_ul');
my_ul.replaceChild(element, document.getElementById('f_ui'), element);
my_ul.removeChild(document.getElementById('l_ui'));
let pr = lem2.getAttribute('class');
pr = lem2.hasAttribute('class');
lem2.removeAttribute('id');
console.log(lem2, pr);

let new_element = document.createElement('h1');
new_element.id = 'new_head';
new_element.className = 'heading';
let t_new_text = document.createTextNode('hello alex');
new_element.appendChild(t_new_text);
element.replaceWith(new_element);