const numbers = [23,47,12,67];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,78,85,97);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// numbers.push(55);
// console.log(numbers);

const numbers2 = [33, ...numbers, 66];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
