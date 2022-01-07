// let a = document.querySelector('.bocek');
// let sagasolaget = true;

// function sagaget() {
//     a.style.left = window.innerWidth - 200 + 'px'
// }

// function solaget() {
//     a.style.left = "0"
// }
// let a = document.querySelector('.like');

let sum = 0;

function plus() {
    sum += 2; //sum++
    document.querySelector(".like").innerHTML = sum;
}

function minus() {
    sum -= 2;
    document.querySelector(".like").innerHTML = sum;
}

function reset() {
    let sum = 0
    document.querySelector(".like").innerHTML = sum;
}