const add  = (num1, num2) => num1 + num2;
const sum = add(22, 35);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4,7,3);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(5);

const tenTimes = num => num * 10;
const value = tenTimes(23);

const getName = () => 'Sailing Ship';
const name =getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(14, 9);
console.log(total);

document.getElementById('my-btn').addEventListener(event => {
    
})