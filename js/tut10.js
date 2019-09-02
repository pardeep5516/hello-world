// console.log('hello javScript');
//?TODO: function
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(4, 5));
// function greeting(name, thank = "thanks") {
//     let msg = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aspernatur vero ipsa, quidem, alias optio nesciunt mollitia necessitatibus magni perspiciatis itaque magnam, explicabo quisquam numquam omnis nostrum libero ad reprehenderit ${name} ${thank} !`;
//     return msg;

// }
// let name = 'alex';
// let val = greeting(name);
// console.log(val);

// let greeting = function (name, thank = "thanks") {
//     let msg = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aspernatur vero ipsa, quidem, alias optio nesciunt mollitia necessitatibus magni perspiciatis itaque magnam, explicabo quisquam numquam omnis nostrum libero ad reprehenderit ${name} ${thank} !`;
//     return msg;

// }
// let name = 'alex';
// let val = greeting(name);
// console.log(val);

// const myObj = {
//     name: 'alex',
//     game: function () {
//         return 'GTA';
//     },
//     type: function () {
//         return 'Fight';
//     }
// }
// console.log(myObj.game());
// console.log(myObj.name);
// console.log(myObj.type());

// let myArray = [34, 5, 3, 6, 3, 5, 3, 6, 3, 6, 3, 6];
// myArray.forEach(function (element, index, array) {
//     console.log(element, index);
// });

//?scope
let i = 34;
console.log(i);
function ui(name) {
    let i = 8;
    console.log(i);
    return `this is ${name}`;
}
console.log(ui('alex'), i);