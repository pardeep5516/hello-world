console.log("hello javascript");
// variables in js
var name1 = "Bindesh";
let name2 = "Pradeep";
const name3 = "Pardeep";
console.log(name1);
console.log(name2);
console.log(name3);

var chanel = "Bindesh tech Zone";
console.log(chanel);

var web = null;
console.log(web);

var app;
console.log(app);

// variable rule
// can't start with number
// can't start with width $

var city = "kalyan";
console.log(city);

//?const keyword
const owner_name = "alice";
// can't not be change 
// owner_name = "alex";
console.log(owner_name);

//!let keyword
let company_name = "amazon";
//you can chage it
company_name = "paytm"
console.log(company_name);

// TODO: block level scope  of let keyword
{
    let city = "mumbai";
    city = "pune";
    console.log(city);
}
console.log(city);

//Datatype arry 
const arr = [2, 5, 6, 4, 6];
arr.push(7);
console.table(arr);
arr.shift(6);
console.table(arr);
arr.unshift(7);
console.table(arr);
arr.pop();
console.table(arr);
arr.pop(5);
console.table(arr);
console.log(arr.length);
//can't not reasign because const is used
// arr = [7, 5, 5, 5];
