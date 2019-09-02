console.log('hello javaScript');

//!loops
//?1for
//?2while
//?doWhile
//?foreach

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let i = 100;
// while (i > 0) {
//     console.log(i);
//     i--;
// }
// let k = 100;
// do {
//     console.log(k);
//     if (k == 9) {
//         break;
//     }
//     k--;
// } while (k > 0);

let array = [34, 35, 4, 34, 24, 2, 4, 45];
array.forEach(function (element, index, array) {
    console.table(element, index, array);
});



//TODO: impotent object iteration 
let obj = {
    name: 'alex',
    age: 20,
    type: 'dangerous programmer',
    os: "ubuntu"
}
console.table(obj);
for (let key in obj) {
    console.log(`${key} or object is ${obj[key]}`);
}