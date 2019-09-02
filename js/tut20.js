console.log('javaScript');
let myArray = ['apple', 'banana', 'mango', 'orange'];
//!sets the key value pair on localStorage
localStorage.setItem('Name', 'alex');
localStorage.setItem('Name2', 'alice');
localStorage.setItem('Fruits', JSON.stringify(myArray));
//!clear the entire local storage

// localStorage.clear();
//!clear a particular key
localStorage.removeItem('Name2');

//!get the value on local storage
let name = localStorage.getItem('Name2');
let name2 = JSON.parse(localStorage.getItem('Fruits'));
console.log(name2);

//!session storage
sessionStorage.setItem('sessionName', 'alex');
sessionStorage.setItem('sessionName2', 'alice');
sessionStorage.setItem('sessionFruits', JSON.stringify(myArray));