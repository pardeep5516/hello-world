console.log("hello alex");
//!javaScript Date() object
let today = new Date();
//?console.log(today);
let otherDate = new Date('8-4-2019 04:38:43');
otherDate = new Date('dec 13 2019');
//?console.log(otherDate);
a = otherDate.getDate();
a = otherDate.getDay();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getHours();
a = otherDate.getMonth();

otherDate.setDate(23);
otherDate.setMonth(10);
otherDate.setFullYear(2020);
console.log(otherDate);