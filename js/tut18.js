console.log("hello javaScript");
//!more on events
let btn = document.getElementById("btn");
btn.addEventListener('click', func);
btn.addEventListener('dblclick', func1);
btn.addEventListener('mousedown', func2);
function func(e) {
    console.log("hello alex", e);
    e.preventDefault();
}
function func1(e) {
    console.log("hello alex double click", e);
    e.preventDefault();
}
function func2(e) {
    console.log("hello alex mouse down click", e);
    e.preventDefault();
}

// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log("Danger Zone");
// })

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log("safe Zone");
// })

document.querySelector('.no').addEventListener('mousemove', function () {
    document.body.style.backgroundColor = "cyan";
    console.log("moving Zone");
})