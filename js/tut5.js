//? type conversion
//! integer to string 
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVal = String(true);
console.log(booleanVal, (typeof booleanVal));

let date = new Date();
toString(date);
console.log(date, (typeof date));

let arr = toString([5, 5, , 63, 53, 53, 5, 36]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString());

let str2 = Number("57374");
console.log(str2, (typeof str2));

let number = parseInt('34.556');
console.log(number, (typeof number));

let number2 = parseFloat('36.556');

console.log(number2.toFixed(5), (typeof number2));

let myStr = "698";
let myNum = 34;
console.log(Number(myStr) + myNum);