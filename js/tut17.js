console.log('hello alex');
//?events

//!click
// document.getElementById('heading'), addEventListener('click', function (e) {
//     console.log('you have click heading');
// this.location.href = 'google.com';
//     let variable = e.target;
//     variable = e.target.className;
//     variable = e.target.classList;
//     variable = Array.from(e.target.classList);
//     variable = e.offsetX;
//     variable = e.offsetY;
//     variable = e.clientX;
//     variable = e.clientY;
//     console.log(variable);
// });

//!mouseover
document.getElementById('heading'), addEventListener('mouseover', function (e) {
    console.log('you have click heading');
    // this.location.href = 'google.com';
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    //console.log(variable);
});