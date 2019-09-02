console.log("alex");

let name = "alex "
let greeting = "Good morning";
console.log(name + greeting);

let html;
html = "<h1> this is heading" +
    "with some text";
html = html.concat(' this', ' str');
console.log(html);

console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toUpperCase());

console.log(html.startsWith('<'));

console.log(html.endsWith('str'));

console.log(html[1]);
console.log(html[5]);

console.log(html.indexOf('is'));

console.log(html.lastIndexOf('str'));

console.log(html.charAt(5));

console.log(html.includes('new'));

console.log(html.slice(0, 5));
console.log(html);

console.log(html.trim());

console.log(html.substring(0, 7));

console.log(html.codePointAt(5));

console.log(html.split('*'));

console.log(html.replace('this', "end"));

//TODO: back tick
let fruit1 = "orange";
let fruit2 = "apple";
let myHtml = `Hello ${name}
                    this is heading
                    you like ${fruit1}`;
console.log(myHtml);

let name = "alex";
console.log(`hello ${name}`);
