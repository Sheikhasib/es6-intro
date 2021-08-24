//  default parameter
function getName(first, last = 'Peyala'){
    return first + '' + last;

} 

// template string
const person = 'Akbar the great';
const priyoPerson = 'Momtaj Begum';
const myPeople = `this ${person} was  very powerful and his full name is ${getName('Akbar ')}. His wife is ${priyoPerson}`;
console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + last;
const fourTimes = x => x * 4;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x+y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [4,6,3,98,56,90];
const min = Math.min(...numbers);
console.log(min);