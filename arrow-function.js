// function declaration
function add(num1, num2){
    return num1 + num2;
}
// function expression
const add2 = function add2(num1, num2){
    return num1 + num2;
}
// function expression(anonymous)
const add3 = function(num1, num2){
    return num1 + num2;
}
// arrow function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(37, 78);
const sum2 = add2(23, 45);
const sum3 = add3(33, 48);
const sum4 = add4(38, 77);
console.log(sum1, sum2, sum3, sum4);


// document.getElementById('my-btn').onclick = function handleEvent(){

// }

