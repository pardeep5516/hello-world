console.log("hello javaScript");

const marks = [34, 75, 86, 87];
const fruit = ['orange', 'apple', 'banana'];

const arr = new Array();
// for (let i = 0; i < 5; i++) {
//     let items = prompt("enter array items");
//     arr[i] = items;
// }
// console.log(arr);
console.log(marks.length);
arr[0] = 100;
console.log(arr);

let value = marks.indexOf(34);
console.log(value);

// marks.pop();
// marks.push(56);
// marks.shift();
// marks.unshift(349);
// marks.splice(1, 2);
// marks.reverse();
// marks = marks.concat(arr);
// console.log(marks);

let myObj = {
    'first name': 'java',
    chanel: 'oracle',
    num: [45, 35, 543, 5343, 553],
}
console.table(myObj);
class Node {


    constructor() {
        console.log("i'm constructor ");
    }
}
let obj = new Node();
obj.num2 = 19;
